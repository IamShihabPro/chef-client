import React from 'react';

const Footer = () => {
    return (
        <div className='p-10 bg-gray-800 text-white mt-6'>
            <div className='my-container max-w-7xl mx-auto'>
                <div className='grid lg:grid-cols-5 gap-3'>
                    <div className=''>
                        <h2 className='font-bold text-2xl'>SaltBae</h2>
                        <p className='text-gray-300'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <div className='flex items-center gap-2 mt-2'>
                            <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" alt="" className='w-8' />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg" alt="" className='w-8' />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="" className='w-8' />
                        </div>
                    </div>

                    <div>
                        <h2>Company</h2>
                        <ul>
                            <li>About Us</li>
                            <li>Work</li>
                            <li>Latest News</li>
                            <li>Careers</li>
                        </ul>
                    </div>

                    <div>
                        <h2>Product</h2>
                        <ul>
                            <li>Prototype</li>
                            <li>Plans & Pricing</li>
                            <li>Customers</li>
                            <li>Integrations</li>
                        </ul>
                    </div>

                    <div>
                        <h2>Support</h2>
                        <ul>
                            <li>Help Desk</li>
                            <li>Sales</li>
                            <li>Become a Partner</li>
                            <li>Developers</li>
                        </ul>
                    </div>

                    <div>
                        <h2>Contact</h2>
                        <ul>
                            <li>524 Broadway , NYC</li>
                            <li>+1 777 - 978 - 5570</li>
                        </ul>
                    </div>
                </div>

            <hr className='mt-6' />
            </div>        
        </div>
    );
};

export default Footer;