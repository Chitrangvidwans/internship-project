
import React, { useState } from 'react';

    function Contact() {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [comments, setComments] = useState('');
        const [nameError, setNameError] = useState('');
        const [emailError, setEmailError] = useState('');
        const [commentsError, setCommentsError] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();

            // Validate inputs
            let isValid = true;

            if (name.trim() === '') {
                setNameError('Please enter your name');
                isValid = false;
            } else {
                setNameError('');
            }

            if (email.trim() === '') {
                setEmailError('Please enter your email');
                isValid = false;
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                setEmailError('Please enter a valid email');
                isValid = false;
            } else {
                setEmailError('');
            }

            // if (comments.trim() === '') {
            //     setCommentsError('Please enter your comments');
            //     isValid = false;
            // } else {
            //     setCommentsError('');
            // }

            // Submit form if inputs are valid
            if (isValid) {
                // TODO: Handle form submission
            }
        };

        return (
            <div className='bg-neutralSilver'>
            <div className='container mx-auto h-full'>
                {/* bg */}
                <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-36 gap-x-8 text-center lg:text-left'></div>

                {/* text & form */}
                <div className='lg:flex-1 lg:pt-32 px-4'>
                    <h1 className='h1'>Contact Us</h1>
                    <p className='mb-12'>Have a question or want to collaborate? We'd love to hear from you.</p>
                    {/* Feel free to reach out to us for any queries */}
                    <form className="flex flex-col gap-y-4 " onSubmit={handleSubmit}>
                        <div className='flex gap-x-10 '>


                        <input type='text' placeholder='Name' className='outline-none border-b border-b-primary h-[60px] bg-transparent
font-secondary w-full pl-3 placeholder:text-[#757879]' value={name} onChange={(e) => setName(e.target.value)} />
                        {nameError && <p className='text-red-500'>{nameError}</p>}


                        <input type='email' placeholder='Email' className='outline-none border-b border-b-primary h-[60px] bg-transparent
font-secondary w-full pl-3 placeholder:text-[#757879]' value={email} onChange={(e) => setEmail(e.target.value)} />
                        {emailError && <p className='text-red-500'>{emailError}</p>}

                        </div>
                        <textarea placeholder='Comments' className='outline-none border-b border-b-primary h-[60px] bg-transparent
font-secondary w-full pl-3 placeholder:text-[#757879]' rows='4' value={comments} onChange={(e) => setComments(e.target.value)} />
                   </form>     {/* {commentsError && <p className='text-red-500'>{commentsError}</p>} */}
                        <div class="button-container">
                        <button type='submit' className='btn-primary '>
                            Submit
                        </button>
                        </div>
                        </div>
                    
                </div>  
            </div>
        );
    }

    export default Contact;

