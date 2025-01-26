import {google} from 'googleapis';
import {NextResponse} from 'next/server';
import fs from 'fs';
import path from 'path';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

export function readDetailsFromLocalStorage() {
    const data = localStorage.getItem('userDetails');
    if (!data) {
        // read data from default.json file
        const data = fs.readFileSync('default.json', 'utf8');
        localStorage.setItem('userDetails', data);
    }
    return data;
}

// const CREDENTIALS_PATH = path.join(process.cwd(), process.env.GSHEET_CREDENTIAL_FILE);

// type ICredentials = {
//     client_secret: string;
//     client_id: string;
//     redirect_uris: string[];
// };

// async function loadCredentials() {
//     try {
//         const content = fs.readFileSync(CREDENTIALS_PATH, 'utf8');
//         return JSON.parse(content);
//     } catch (error) {
//         console.error('Error loading credentials:', error);
//         throw new Error('Failed to load credentials');
//     }
// }

async function authorize() {
    try {
        const client_secret = process.env.GSHEET_CLIENT_SECRET;
        const client_id = process.env.GSHEET_CLIENT_ID;
        const redirect_uris = process.env.GSHEET_REDIRECT_URI;
        console.log(client_id, client_secret, redirect_uris);
        const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris);

        const tokenPath = path.join(process.cwd(), 'token.json');
        if (fs.existsSync(tokenPath)) {
            const token = fs.readFileSync(tokenPath, 'utf8');
            oAuth2Client.setCredentials(JSON.parse(token));
        } else {
            const authUrl = oAuth2Client.generateAuthUrl({
                access_type: 'offline',
                scope: SCOPES,
            });
            console.log('Authorize this app by visiting this url:', authUrl);
            throw new Error('Authorization required');
        }
        return oAuth2Client;
    } catch (error) {
        console.error('Error authorizing:', error);
        throw new Error('Failed to authorize');
    }
}

export async function GET(request: Request) {
    try {
        const auth = await authorize();
        const sheets = google.sheets({version: 'v4', auth});
        const spreadsheetId = process.env.USER_GSHEET_ID;
        const range = 'active!A1:F'; // Adjust the range as needed

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
        });

        const rows = response.data.values;
        if (!rows || !rows.length) {
            return NextResponse.json({message: 'No data found.'});
        }

        const headers = rows[0];
        const emailIndex = headers.indexOf('email');
        const queryEmail = new URL(request.url).searchParams.get('email');

        if (emailIndex === -1 || !queryEmail) {
            return NextResponse.json({message: 'Invalid request.'});
        }

        const userData = rows.find(row => row[emailIndex] === queryEmail);

        if (!userData) {
            return NextResponse.json({message: 'User not found.'});
        }

        const userObject = headers.reduce((obj, header, index) => {
            obj[header] = userData[index];
            return obj;
        }, {});

        return NextResponse.json({data: userObject});
    } catch (error) {
        console.error('Error fetching user data:', error);
        return NextResponse.json({});
    }
}
