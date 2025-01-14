import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-5"
             style={{ backgroundImage: "url('/org/not-found.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
            <div className="max-w-md text-center bg-black bg-opacity-75 p-6 rounded-md">
                <h1 className="text-6xl font-extrabold text-blue-600">404</h1>
                <p className="mt-4 text-2xl text-white">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <p className="mt-2 text-lm text-white">
                    But don't worry, we’re here to guide you back to safety.
                </p>

                <div className="mt-8">
                    <Link href="/">
                        <button
                            className="inline-block px-6 py-3 text-white bg-blue-600 rounded-md shadow hover:bg-blue-500">
                            Go to Homepage
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
