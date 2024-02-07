import React, { useState } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';
import { useTheme } from "next-themes";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });
    const [errors, setErrors] = useState([]);
    const [btnText, setBtnText] = useState("Send Message");
    const { theme } = useTheme(); // Accessing the current theme

    const clearErrors = () => {
        setErrors([]);
    };

    const clearInput = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setBtnText("Sending...");
        let fData = new FormData();
        fData.append('first_name', formData.firstName);
        fData.append('last_name', formData.lastName);
        fData.append('email', formData.email);
        fData.append('phone_number', formData.phone);
        fData.append('message', formData.message);

        axios({
            method: "post",
            url: process.env.REACT_APP_CONTACT_API,
            data: fData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(function (response) {
                clearInput();
                setBtnText("Message Sent!");
                Notiflix.Report.success(
                    'Success',
                    response.data.message,
                    'Okay',
                );
            })
            .catch(function (error) {
                const { response } = error;
                setBtnText("Send Message");
                if (response && response.status === 500) {
                    Notiflix.Report.failure(
                        'An error occurred',
                        response.data.message,
                        'Okay',
                    );
                }
                if (response && response.data.errors !== null) {
                    setErrors(response.data.errors);
                }
            });
    };

    return (
        <>
            <div className={`flex justify-center items-center  w-full py-12 lg:py-24 ${theme === 'dark' ? 'bg-black-900' : 'bg-white'}`}>
            <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">

                    <form onSubmit={sendEmail}>

                        <div className={`w-full bg-${theme === 'dark' ? 'gray-700' : 'white'} p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl`}>
                            <div className="flex">
                                <h1 className="font-bold text-center lg:text-left  uppercase text-4xl">Send us a message</h1>
                            </div>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <div>
                                    <input
                                        name="firstName"
                                        className={`w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline`}
                                        type="text"
                                        placeholder="First Name*"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && <p className="text-red-500 text-sm">{errors.first_name}</p>}
                                </div>

                                <div>
                                    <input
                                        name="lastName"
                                        className={`w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline`}
                                        type="text"
                                        placeholder="Last Name*"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && <p className="text-red-500 text-sm">{errors.last_name}</p>}
                                </div>

                                <div>
                                    <input
                                        name="email"
                                        className={`w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline`}
                                        type="email"
                                        placeholder="Email*"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && <p className="text-red-500 text-sm">{errors.email}</p>}
                                </div>

                                <div>
                                    <input
                                        name="phone"
                                        className={`w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline`}
                                        type="number"
                                        placeholder="Phone*"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && <p className="text-red-500 text-sm">{errors.phone_number}</p>}
                                </div>
                            </div>
                            <div className="my-4">
                                <textarea
                                    name="message"
                                    placeholder="Message*"
                                    className={`w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline`}
                                    value={formData.message}
                                    onChange={handleChange}
                                    onKeyUp={clearErrors}
                                ></textarea>
                                {errors && <p className="text-red-500 text-sm">{errors.message}</p>}
                            </div>
                            <div className="my-2 w-1/2 lg:w-2/4">
                                <button
                                    type="submit"
                                    id="submitBtn"
                                    className={`uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-rose-600 text-gray-100 p-3 rounded-lg w-full 
                                    focus:outline-none focus:shadow-outline`}
                                >
                                    {btnText}
                                </button>
                            </div>
                        </div>
                    </form>
                    <div
                        className={`w-full  lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto ${theme === 'dark' ? 'bg-gray-700' : 'bg-rose-600'} rounded-2xl`}
                    >
                        <div className="flex flex-col text-white">

                            <div className="flex my-4 w-2/3 lg:w-3/4">
                                <div className="flex flex-col">
                                    <i className="fas fa-map-marker-alt pt-2 pr-2" />
                                </div>
                                {/* <div className="flex flex-col">
                                    <h2 className="text-2xl">Office Address</h2>
                                    <p className="text-gray-400">Ilo Awela, Ota, Ogun State</p>
                                </div> */}
                            </div>

                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <div className="flex flex-col">
                                    <i className="fas fa-phone-alt pt-2 pr-2" />
                                </div>

                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Call Us</h2>
                                    {/* Placeholder for phone number */}
                                    <p className="text-gray-400">Tel:+91 9281443441</p>

                                    <div className='mt-5'>
                                        <h2 className="text-2xl">Send E-mail</h2>
                                        {/* Placeholder for email */}
                                        <p className="text-gray-400">info@saola.in</p>
                                    </div>

                                </div>
                            </div>

                            <div className="flex mt-8 space-x-6">
              <Link
                href="https://www.facebook.com/saolainnovations/"
                target="_blank"
              >
                <FacebookOutlinedIcon className="hover:text-black-600 hover:-translate-y-1 transition-all" />
              </Link>
              
              <Link
                href="https://www.linkedin.com/in/saolainnovations/"
                target="_blank"
              >
                <LinkedInIcon className="hover:text-black-600 hover:-translate-y-1 transition-all" />
              </Link>
              <Link href="https://twitter.com/skillscrolls/" target="_blank">
                <TwitterIcon className="hover:text-black-600 hover:-translate-y-1 transition-all" />
              </Link>
              <Link
                href="https://www.instagram.com/saolainnovations/"
                target="_blank"
              >
                <InstagramIcon className="hover:text-black-600 hover:-translate-y-1 transition-all" />
              </Link>
            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* Place your Footer component here */}
            </div>
        </>
    )
}

export default Contact;
