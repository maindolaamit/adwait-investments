import React, {useState} from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Button} from "@/components/ui/button";
import {useToast} from "@/hooks/use-toast";

export const SubscriptionModal = ({openModal: boolean}) => {
    const [formData, setFormData] = useState({name: "", email: "", phone: ""});
    const [errors, setErrors] = useState({name: "", email: "", phone: ""});
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const {toast} = useToast()

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const validate = () => {
        setIsLoading(true);
        let valid = true;
        let errors = {name: "", email: "", phone: ""};

        if (!formData.name) {
            errors.name = "Name is required";
            valid = false;
        }

        if (!formData.email) {
            errors.email = "Email is required";
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
            valid = false;
        }

        if (!formData.phone) {
            errors.phone = "Phone is required";
            valid = false;
        } else if (!/^\d{10}$/.test(formData.phone)) {
            errors.phone = "Phone number is invalid";
            valid = false;
        }

        setErrors(errors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // close modal
            setIsOpen(false);
            toast({
                title: "Subscription request sent",
                description: "Thank you for showing interest in our services. One of our team members will reach out to you shortly.",
                // action: (
                //     <ToastAction altText="Ok">Ok</ToastAction>
                // ),
            })
        }

        setIsLoading(false);
    };


    return (
        <>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <Button className={"mt-4 bg-blue-500 text-white px-4 py-2 rounded text-lg"}
                            variant="outline">Subscribe</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Subscribe to the Service</DialogTitle>
                        <DialogDescription>
                            Fill in the form below to subscribe to our service.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                            required
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                            required
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                            required
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                    <DialogFooter>
                        <Button type="submit"
                                className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
                                disabled={isLoading} onClick={handleSubmit}
                        >Submit</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};
