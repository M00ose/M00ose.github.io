import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { growIn, slideIn } from '../utils/index';
import { MooseCanvas } from './index';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_wtj7p5n',
      'template_qipke1q',
      {
        from_name: form.name,
        to_name: 'Ty',
        from_email: form.email,
        to_emai: 'tyrone.jacalan@protonmail.com',
        message: form.message,
      },
      'PBb_fCeccZblj7hDL'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thanks you. I will get back to you as soon as possible.");

          setForm({
            name: '',
            email: '',
            message: '',
          }), (error) => {
            setLoading(false)

            console.log(error);

            alert('Oh no! Something went wrong.')
          }
        }
      );
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      className={`relative snap-start h-screen w-screen overflow-scroll ${styles.padding} flex flex-col md:flex-row`}
    >
      <motion.div 
        variants={slideIn("left","tween",1,1)} 
        className={`relative ${styles.flexCol} justify-center xl:h-auto md:h-[550px] h-[350px]`}
      >

        <div className='relative h-auto w-[90vw] md:w-[30vw] min-w-[300px]'>
          <motion.div
            variants={growIn("vertical","tween",1.5,1,"100%")} 
            className='absolute left-0 top-0 bg-off-black z-10'>
          </motion.div>
          <motion.div
            variants={growIn("vertical","tween",1.5,1,"100%")} 
            className='absolute right-0 bottom-0 bg-off-black'>
          </motion.div>
          <motion.div
            variants={growIn("horizontal","tween",1,1,"100%")} 
            className='bg-off-black'>
          </motion.div>
          <div className='p-4'>
            <p className='text-sm'>I am always open to making new connections. If you have questions, comments about my work, or interested in discussing potential opportunities, please reach out to me by filling out this form: </p>
          </div>
          <motion.div
            variants={growIn("horizontal","tween",2,1,"100%")} 
            className='bg-off-black'>
          </motion.div>

          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-8 flex flex-col gap-4'
          >
            <label className='flex flex-col'>
              <span className='px-4 mb-4 text-sm'>Your Name</span>
              <input 
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className={`px-4 bg-primary placeholder:text-secondary outline-none text-sm`} />
            </label>
            <motion.div
              variants={growIn("horizontal","tween",2.2,1,"100%")} 
              className='bg-off-black'>
            </motion.div>
            <label className='flex flex-col'>
              <span className='px-4 mb-4 text-sm'>Your Email</span>
              <input 
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className={`px-4 bg-primary placeholder:text-secondary outline-none text-sm`} />
            </label>
            <motion.div
              variants={growIn("horizontal","tween",2.4,1,"100%")} 
              className='bg-off-black'>
            </motion.div>
            <label className='flex flex-col'>
              <span className='px-4 mb-4 text-sm'>Your Message</span>
              <textarea
                row="7" 
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can I help?"
                className={`px-4 bg-primary placeholder:text-secondary outline-none text-sm`} />
            </label>
            <div className='px-4'>
              <button
              type="submit"
              className='bg-tertiary w-full py-3 px-8 font-bold shadow-md shadow-primary hover:bg-secondary hover:text-off-white'
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
            </div>
            <motion.div
              variants={growIn("horizontal","tween",1,1,"100%")} 
              className='bg-off-black'>
            </motion.div>
            
          </form>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right","tween",1,1)}
        className="xl:flex-1 w-full xl:h-auto md:h-[550px] h-[350px]"
      >
        <MooseCanvas/>
      </motion.div>

    </motion.div>
  )
}

export default Contact