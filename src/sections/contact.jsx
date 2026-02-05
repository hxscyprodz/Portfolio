import PrimaryButton from "../ui/button";
import { Locate, Inbox, Phone } from "lucide-react";
import { useState } from "react";

function Contact () {
    const [ formData, setFormData ] = useState({
        name: "",
        email: "",
        location: "",
        budget: "",
        subject: "",
        message: ""
    });

    const handleDataChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <section id="Contact">
            <form onSubmit={handleSubmit}
                className="flex flex-col gap-3">
                <input className="text-blue-500 p-2 w-full border-b-2 border-b-gray-300 placeholder:text-gray-400 outline-0
                    focus:border-b-blue-500 focus:placeholder:text-blue-500"
                    type="text" 
                    placeholder="Name*"
                    name={"name"}
                    value={formData.name}
                    onChange={handleDataChange}/>
                <input className="text-blue-500 p-2 w-full border-b-2 border-b-gray-300 placeholder:text-gray-400 outline-0
                    focus:border-b-blue-500 focus:placeholder:text-blue-500"
                    type="text" 
                    placeholder="Email*"
                    name={"email"}
                    value={formData.email}
                    onChange={handleDataChange}/>
                <input className="text-blue-500 p-2 w-full border-b-2 border-b-gray-300 placeholder:text-gray-400 outline-0
                    focus:border-b-blue-500 focus:placeholder:text-blue-500"
                    type="text" 
                    placeholder="Location*"
                    name={"location"}
                    value={formData.location}
                    onChange={handleDataChange}/>
                <div className="flex gap-3">
                    <input className="text-blue-500 w-1/3 p-2 border-b-2 border-b-gray-300 placeholder:text-gray-400 outline-0
                        focus:border-b-blue-500 focus:placeholder:text-blue-500"
                        type="text" 
                        placeholder="Budget*"
                        name={"budget"}
                        value={formData.budget}
                        onChange={handleDataChange}/>
                    <input className="text-blue-500 p-2 w-full border-b-2 border-b-gray-300 placeholder:text-gray-400 outline-0
                         focus:border-b-blue-500 focus:placeholder:text-blue-500"
                        type="text" 
                        placeholder="Subject*"
                        name={"subject"}
                        value={formData.subject}
                        onChange={handleDataChange}/>
                </div>
                <input className="text-blue-500 mb-5 p-2 w-full border-b-2 border-b-gray-300 placeholder:text-gray-400 outline-0
                    focus:border-b-blue-500 focus:placeholder:text-blue-500"
                    type="text" 
                    placeholder="Message*"
                    name={"message"}
                    value={formData.message}
                    onChange={handleDataChange}/>
                <PrimaryButton text="Submit"/>
            </form>
            <p className="text-sm text-gray-400 text-center mt-7">
                I'm available for freelance work. Drop me a line if you have a project you think I'd be a good fit for.
            </p>
            <div className="flex flex-col gap-3">
                <div className="flex gap-3 hover:shadow p-3 transition-all duration-300">
                    <div className="flex p-3 rounded-md bg-blue-200 items-center">
                        <Locate />
                    </div>
                    <div className="text-gray-400 text-sm">
                        <p>Address</p>
                        <p className="font-semibold">2521 Empumalanga, Hwange</p>
                    </div>
                </div>
                <div className="flex gap-3 hover:shadow p-3 transition-all duration-300">
                    <div className="flex p-3 rounded-md bg-blue-200 items-center">
                        <Inbox />
                    </div>
                    <div className="text-gray-400 text-sm">
                        <p>My Email:</p>
                        <p className="font-semibold">hxscytech@gmail.com</p>
                    </div>
                </div>
                <div className="flex gap-3 hover:shadow p-3 transition-all duration-300">
                    <div className="flex p-3 rounded-md bg-blue-200 items-center">
                        <Phone />
                    </div>
                    <div className="text-gray-400 text-sm">
                        <p>Call me now:</p>
                        <p className="font-semibold">+263 78 210 5799</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;