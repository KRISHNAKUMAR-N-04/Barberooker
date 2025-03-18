import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm' >
                <div>
                    {/* ---------- Left Section-------------*/}
                    <p className='text-2xl text-black font-bold leading-tight md:leading-tight lg:leading-tight mb-2'>Barberooker.</p>
                    <p className='w-full md:2/3 text-gray-600 leading-6'>Your go-to platform for booking top hair stylists. Browse profiles, check reviews, and schedule hassle-free appointments. Elevate your grooming experience with ease!</p>
                </div>
                <div>
                    {/* ---------- Centre Section-------------*/}
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policies</li>
                    </ul>
                </div>
                <div>
                    {/* ---------- Right Section-------------*/}
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+1-212-456-7890</li>
                        <li>support@barberooker.in</li>
                    </ul>
                </div>
            </div>
            <div>
                {/*---------Copyright----------- */}
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025@ Barberooker - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
