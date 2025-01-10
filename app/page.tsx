"use client";

import { useState } from "react";
import {
    FaBars,
    FaTimes,
    FaRegHandshake,
    FaBook,
    FaClipboardList,
    FaShieldAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle the menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close the menu and scroll to the section
    const handleLinkClick = (id: string) => {
        setIsMenuOpen(false);
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <main className='bg-white text-gray-800'>
            {/* Navigation Bar */}
            <nav className='bg-black text-white py-2 px-8 fixed top-0 left-0 w-full z-50 shadow-md'>
                <div className='flex justify-between items-center max-w-screen-xl mx-auto'>
                    {/* Logo Placeholder */}
                    <div className='text-2xl font-bold'>
                        <a href='#home' className='text-white'>
                            LMS Audit
                        </a>
                    </div>

                    {/* Hamburger Menu for Mobile */}
                    <div className='md:hidden flex items-center'>
                        <button onClick={toggleMenu} className='text-white'>
                            {isMenuOpen ? (
                                <FaTimes className='h-6 w-6' />
                            ) : (
                                <FaBars className='h-6 w-6' />
                            )}
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div
                        className={`md:flex sm:text-center md:space-x-8 ${
                            isMenuOpen
                                ? "fixed inset-0 bg-black flex flex-col items-center justify-center"
                                : "hidden"
                        } md:block`}
                    >
                        {/* Close icon on mobile */}
                        <div className='absolute top-4 left-4 md:hidden'>
                            {isMenuOpen && (
                                <button
                                    onClick={toggleMenu}
                                    className='text-white'
                                >
                                    <FaTimes className='h-6 w-6' />
                                </button>
                            )}
                        </div>

                        <a
                            href='#services'
                            onClick={() => handleLinkClick("services")}
                            className='hover:text-gray-200 py-4 text-xl flex items-center'
                        >
                            <FaClipboardList className='mr-2' />
                            Our Services
                        </a>
                        <a
                            href='#philosophy'
                            onClick={() => handleLinkClick("philosophy")}
                            className='hover:text-gray-200 sm:text-center py-4 text-xl flex items-center'
                        >
                            <FaRegHandshake className='mr-2' />
                            Our Philosophy
                        </a>
                        <a
                            href='#contact'
                            onClick={() => handleLinkClick("contact")}
                            className='hover:text-gray-200 py-4 sm:text-center text-xl flex items-center'
                        >
                            <MdEmail className='mr-2' />
                            Contact Us
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section
                id='home'
                className='bg-white text-gray-800 mt-8 py-16 px-8 text-center pt-24'
            >
                <h1 className='text-4xl font-bold mb-4 text-black'>
                    Welcome to LMS Audit and Risk Services
                </h1>
                <p className='text-lg mb-6 text-gray-700'>
                    Trustworthiness is our philosophy. We specialize in
                    Accounting, Auditing, Bookkeeping, and Risk Management.
                </p>
                <button className='bg-black text-white px-6 py-2 font-semibold rounded shadow hover:bg-gray-700'>
                    Learn More
                </button>
            </section>

            {/* Services Section */}
            <section id='services' className='py-12 px-8'>
                <h2 className='text-3xl font-bold text-center mb-8 text-black'>
                    Our Services
                </h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='bg-gray-100 p-6 shadow rounded'>
                        <h3 className='text-xl font-semibold mb-4 flex items-center text-black'>
                            <FaBook className='mr-2' />
                            Accounting
                        </h3>
                        <p className='text-gray-700'>
                            Professional accounting services tailored to meet
                            the unique needs of Non-Profit Organizations,
                            schools, and churches.
                        </p>
                    </div>
                    <div className='bg-gray-100 p-6 shadow rounded'>
                        <h3 className='text-xl font-semibold mb-4 flex items-center text-black'>
                            <FaClipboardList className='mr-2' />
                            Auditing
                        </h3>
                        <p className='text-gray-700'>
                            Comprehensive auditing services ensuring compliance
                            and financial transparency.
                        </p>
                    </div>
                    <div className='bg-gray-100 p-6 shadow rounded'>
                        <h3 className='text-xl font-semibold mb-4 flex items-center text-black'>
                            <FaBook className='mr-2' />
                            Bookkeeping
                        </h3>
                        <p className='text-gray-700'>
                            Accurate bookkeeping services to keep your financial
                            records in order.
                        </p>
                    </div>
                    <div className='bg-gray-100 p-6 shadow rounded'>
                        <h3 className='text-xl font-semibold mb-4 flex items-center text-black'>
                            <FaShieldAlt className='mr-2' />
                            Risk Management
                        </h3>
                        <p className='text-gray-700'>
                            Expert risk management solutions to safeguard your
                            organization’s future.
                        </p>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section
                id='philosophy'
                className='bg-gray-200 py-12 px-8 text-center'
            >
                <h2 className='text-3xl font-bold mb-4 text-black'>
                    Our Philosophy
                </h2>
                <p className='text-lg max-w-2xl mx-auto text-gray-700'>
                    Trustworthiness is at the core of everything we do. We are
                    committed to integrity, diligence, and sincerity in
                    delivering professional services that exceed expectations.
                </p>
            </section>

            {/* Director Section */}
            <section id='director' className='py-12 px-8'>
                <h2 className='text-3xl font-bold text-center mb-8 text-black'>
                    Meet Our Director
                </h2>
                <div className='flex flex-col md:flex-row items-center gap-8'>
                    <Image
                        src='/director.jpg'
                        alt='Director Spofana ML'
                        width={200}
                        height={200}
                        className='rounded-full'
                    />
                    <div>
                        <h3 className='text-xl font-bold text-black'>
                            Spofana ML
                        </h3>
                        <p className='text-lg text-gray-700'>
                            BSc, HED (UDW); B Ed, (Unisa), B Compt (Unisa), MBA
                            (Stell), CIA, and BAP.
                        </p>
                        <p className='mt-4 text-gray-700'>
                            A Certified Internal Auditor (CIA) and Business
                            Accountant in Practice (BAP) with extensive
                            experience in accounting and risk management.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id='contact'
                className='bg-black text-white py-12 px-8 text-center'
            >
                <h2 className='text-3xl font-bold mb-4'>Contact Us</h2>
                <p className='text-lg mb-6'>
                    Expand your organization’s potential with LMS Audit and Risk
                    Services. Contact us today to discuss your needs.
                </p>
                <div className='text-lg mb-6'>
                    <p>Reg. No. K2023978367</p>
                    <p>Emfundweni Street, Zwelitsha Location, Sterkspruit</p>
                    <p>SAIBA 14191</p>
                    <p>Cell: 0837337651 / 0714855645</p>
                </div>
                <form
                    action='/submit' // Replace with your form submission handler
                    method='POST'
                    className='max-w-xl mx-auto space-y-4'
                >
                    <div>
                        <label
                            htmlFor='name'
                            className='block text-lg font-semibold mb-2'
                        >
                            Your Name
                        </label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            required
                            className='w-full p-3 rounded border border-gray-300'
                            placeholder='Enter your full name'
                        />
                    </div>
                    <div>
                        <label
                            htmlFor='email'
                            className='block text-lg font-semibold mb-2'
                        >
                            Your Email
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            required
                            className='w-full p-3 rounded border border-gray-300'
                            placeholder='Enter your email address'
                        />
                    </div>
                    <div>
                        <label
                            htmlFor='message'
                            className='block text-lg font-semibold mb-2'
                        >
                            Your Message
                        </label>
                        <textarea
                            id='message'
                            name='message'
                            required
                            rows={4}
                            className='w-full p-3 rounded border border-gray-300'
                            placeholder='Write your message here'
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type='submit'
                            className='bg-white text-black px-6 py-2 font-semibold rounded shadow hover:bg-gray-200 flex items-center'
                        >
                            <MdEmail className='mr-2' />
                            Submit Inquiry
                        </button>
                    </div>
                </form>
            </section>
        </main>
    );
}
