/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { motion } from "motion/react"

const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false);
     const [activeSection, setActiveSection] = useState('home')
     const handleToggle = () => (
        setIsOpen(!isOpen)
     )

    //  define close menu icon
    const handleCloseMenu = () => {
        setIsOpen(false)
    }

    // define Scroll function
        const handleScroll = () => {
        const sections = ['home', 'services', 'about', 'pricing', 'testimonial']
        const scrollPosition = window.scrollY + 100;
        
        // define forEach section
        sections.forEach(section => {
            const element = document.getElementById(section)
            if(element) {
                const offsetTop = element.offsetTop
                const height = element.offsetHeight
                if(scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                    setActiveSection(section)
                }
            }
        })
    }

    // Using useEffect hook
    useEffect (() => {
        window.addEventListener('scroll', handleScroll) 
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // define handleScrollTo
    const handleScrollTo = (targetId) => {
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior:'smooth'
            })
        }
    }
    const navLinks = (
        <ul className='font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4  md:p-0'>
            <li>
                <motion.a
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                  onClick={(e) => {
                    e.preventDefault()
                    handleCloseMenu()
                    handleScrollTo('home')
                    }}
                href="#home" 
                className={`text-white hover:text-green-500 transition-colors duration-300  ${activeSection === 'home' ? 'isActive' : ''}`}>Home</motion.a>
            </li>
            <li>
                <motion.a href="#services" 
                 whileHover={{scale: 1.1}}
                 whileTap={{scale: 0.9}}
                  onClick={(e) => {
                    e.preventDefault()
                    handleCloseMenu()
                    handleScrollTo('services')
                    }}
                className={`text-white hover:text-green-500 transition-colors duration-300  ${activeSection === 'services' ? 'isActive' : ''}`}>Services</motion.a>
            </li>
            <li>
                <motion.a href="#about" 
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                  onClick={(e) => {
                    e.preventDefault()
                    handleCloseMenu()
                    handleScrollTo('about')
                    }}
                className={`text-white hover:text-green-500 transition-colors duration-300  ${activeSection === 'about' ? 'isActive' : ''}`}>About</motion.a>
            </li>
            <li>
                <motion.a href="#pricing"
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                  onClick={(e) => {
                    e.preventDefault()
                    handleCloseMenu()
                    handleScrollTo('pricing')
                    }}
                className={`text-white hover:text-green-500 transition-colors duration-300  ${activeSection === 'pricing' ? 'isActive' : ''}`}>Pricing</motion.a>
            </li>
            <li>
                <motion.a href="#testimonial" 
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                  onClick={(e) => {
                    e.preventDefault()
                    handleCloseMenu()
                    handleScrollTo('testimonial')
                    }}
                className={`text-white hover:text-green-500 transition-colors duration-300  ${activeSection === 'testimonial' ? 'isActive' : ''}`}>Testimonials</motion.a>
            </li>
        </ul>
    )
  return (
    <header className='bg-heroBg text-white py-6 px-4
    fixed top-0 left-0 right-0 z-10'>
        <div className="container mx-auto flex justify-between items-center  h-full">
            {/* Logo */}
            <div>
                <a href="/">
                <img src="/logo.svg" alt="logo" />
                </a>
            </div>

            {/* navItems */}
                <div className='hidden md:flex flex-grow justify-center'>
                    <nav>
                        {navLinks}
                    </nav>
                </div>

            {/* button */}
                <div className="hidden md:block">
                    <a 
                    onClick={e => {
                        e.preventDefault()
                    handleScrollTo('contact')
                    }}
                    href="#contact" className='text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded'>Contact Us</a>
                </div>

            {/* Hamburger Menu */}
            <div className="block md:hidden">
                <button onClick={handleToggle} className={`text-white focus:outline-none ${isOpen ? "border border-white" : ""}`}>
                    <HiMenuAlt3 className='size-6' />
                </button>
            </div>
        </div>

        {/* mobile nav items */}
        {
            isOpen && (
                <nav className='absolute top-full left-0 w-full bg-heroBg z-20 md:hidden'>
                <ul className='flex flex-col p-4 space-y-3'>
                    {navLinks.props.children}

                    {/* List items */}
                    <li className='py-2'>
                    <a href="#contact" className='text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded' onClick={(e) => { e.preventDefault()
                    handleCloseMenu();
                    handleScrollTo('contact')
                    }}
                    >Contact Us</a>
                    </li>
                </ul>   
                </nav>
            )
            
        }
    </header>
  )
}

export default Navbar