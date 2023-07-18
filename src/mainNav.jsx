import React, { useState, useEffect } from 'react';
import './MainPage.css';

function MainNav(props) {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleDropdownOpen = (heading) => {
        setActiveDropdown(heading);
    };

    const handleDropdownClose = () => {
        setActiveDropdown(null);
    };

    const handleClick = (heading, subHeading) => {
        if (activeDropdown === heading) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(heading);
        }

        if (subHeading) {
            console.log(heading);
            console.log(subHeading);


            // window.dataLayer.push({
            //     event: 'navbar_click',
            //     event_label: 'Navbar',
            //     clicked_heading: heading,
            //     clicked_sub_heading: subHeading
            // });


            // window.gtag('event', 'navbar_click', {
            //     event_label: 'Navbar',
            //     clicked_heading: heading,
            //     clicked_sub_heading: subHeading
            // });
        }
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (activeDropdown && !event.target.closest('.custom-width')) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [activeDropdown]);

    return (
        <nav className="bg-white py-8 fixed w-full">
            <ul className="flex space-x-72 font-bold text-lg justify-center">
                <li
                    className="text-black custom-width relative "
                    onClick={() => handleClick('HOME', '')}
                >
                    <span>HOME</span>
                    {activeDropdown === 'HOME' && (
                        <ul className="absolute -left-32 top-12 p-32 bg-white shadow-lg py-4 font-bold space-y-8">
                            <li
                                className="custom-width text-black cursor-pointer"
                                onClick={() => handleClick('HOME', 'ASK ME')}
                            >
                                ASK ME
                            </li>
                            <li
                                className="text-black custom-width cursor-pointer"
                                onClick={() => handleClick('HOME', 'ASK ANSU')}
                            >
                                ASK ANSU
                            </li>
                            <li
                                className="text-black custom-width cursor-pointer"
                                onClick={() => handleClick('HOME', 'ASK ADAM')}
                            >
                                ASK ADAM
                            </li>
                        </ul>
                    )}
                </li>
                <li
                    className="text-black relative custom-width"
                    onClick={() => handleClick('ABOUT', '')}
                >
                    <span>ABOUT</span>
                    {activeDropdown === 'ABOUT' && (
                        <ul className="absolute -left-32 top-12 p-32 bg-white shadow-lg py-4 font-bold space-y-8">
                            <li
                                className="text-black custom-width cursor-pointer"
                                onClick={() => handleClick('ABOUT', 'About ME')}
                            >
                                ABOUT ME
                            </li>
                            <li
                                className="text-black custom-width cursor-pointer"
                                onClick={() => handleClick('ABOUT', 'About ANSU')}
                            >
                                ABOUT ANSU
                            </li>
                        </ul>
                    )}
                </li>
                <li
                    className="text-black relative custom-width"
                    onClick={() => handleClick('CONTACT', '')}
                >
                    <span>CONTACT</span>
                    {activeDropdown === 'CONTACT' && (
                        <ul className="absolute -left-32 top-12 p-32 bg-white shadow-lg py-4 font-bold space-y-8">
                            <li
                                className="text-black custom-width cursor-pointer"
                                onClick={() => handleClick('CONTACT', 'EMAIL ME')}
                            >
                                EMAIL ME
                            </li>
                            <li
                                className="text-black custom-width cursor-pointer"
                                onClick={() => handleClick('CONTACT', 'CALL ME')}
                            >
                                CALL ME
                            </li>
                            <li
                                className="text-black custom-width cursor-pointer"
                                onClick={() => handleClick('CONTACT', 'FOLLOW ME')}
                            >
                                FOLLOW ME
                            </li>
                            <li
                                className="text-black custom-width cursor-pointer"
                                onClick={() => handleClick('CONTACT', 'SLACK ME')}
                            >
                                SLACK ME
                            </li>
                        </ul>
                    )}
                </li>
                <li
                    className="text-black relative custom-width"
                    onClick={() => handleClick('PREMIUM', '')}
                >
                    <span>PREMIUM</span>
                    {activeDropdown === 'PREMIUM' && (
                        <ul className="absolute -left-32 top-12 p-32 bg-white shadow-lg py-4 font-bold space-y-8">
                            <li
                                className="text-black custom-width cursor-pointer"
                                onClick={() => handleClick('PREMIUM', 'SILVER PREMIUM')}
                            >
                                SILVER PREMIUM
                            </li>
                            <li
                                className="text-black custom-width cursor-pointer"
                                onClick={() => handleClick('PREMIUM', 'GOLD PREMIUM')}
                            >
                                GOLD PREMIUM
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default MainNav;
