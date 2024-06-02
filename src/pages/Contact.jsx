import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../components/Footer';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Avinash",
          from_email: form.email,
          to_email: 'avinashwele@gmail.com',
          message: form.message
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        setForm({ name: '', email: '', message: '' });
        // Show success message
        alert('Message sent successfully!');
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        // Show error message
        alert('Error sending message. Please try again later.');
      });
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100]'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit} ref={formRef}>
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type="text"
              name='name'
              className='input'
              placeholder='Your Name...'
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>

          <label className='text-black-500 font-semibold'>
            Email
            <input
              type="email"
              name='email'
              className='input'
              placeholder='Your Email...'
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>

          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows={4}
              className='textarea'
              placeholder='Let me know how can I help you!'
              required
              value={form.message}
              onChange={handleChange}
            />
          </label>

          <button type='submit' className='btn' disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      <br />
      
    </section>
  );
};

export default Contact;
