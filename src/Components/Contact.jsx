import React, { useContext } from 'react'
import { FaEnvelope, FaMapMarked, FaPhoneAlt } from 'react-icons/fa'
import { ThemeContext } from '../Context'
import Footer from './Footer'

const Contact = ({darkMode}) => {
  const theme = useContext(ThemeContext);
  const color = darkMode? theme.dark : theme.light;
  
  return (
    <section className={`h-[calc(100vh_-_4rem)] overflow-y-auto text-${color.foreground} bg-${color.background}`}>
    <div className={`h-full mt-20 md:mt-0`}>
      <div className="mb-6">
        <h1 className='flex justify-center mt-6 text-3xl font-medium'>Contact Me</h1>
        <h3 className="mx-4 md:mx-20 text-center">Here's the details you can use to get in touch with me or you can
          simply drop a message for me by filling the form below:</h3>
      </div>
      <div className='bg-skills'>
      <div className="flex flex-col md:flex-row bg-[#ffffff10] backdrop-blur text-white">
        <div className="flex flex-col w-full px-10 py-4 md:p-10 md:pl-20 md:w-2/5">
          <h3 className='text-xl'>Contact Info</h3>
          <div className="mt-2 w-full justify-center items-center">
            <div className="flex w-full">
              <div className="mr-4 flex items-center">
                <FaMapMarked size={40}/>
              </div>
              <div className="my-2">
                <h3 className="font-medium">Address:</h3>
                <p>
                  No. 20, Adegoke Villa, <br />
                  Lane 2 Irewole Community, <br />
                  Mogi Area, Oyo, Oyo State. <br />
                  Nigeria.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 flex items-center">
                <FaPhoneAlt size={40}/>
              </div>
              <div className="my-2">
                <h3 className="font-medium">Phone:</h3>
                <p>+234-902-360-0083</p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4 flex items-center">
                <FaEnvelope size={40}/>
              </div>
              <div className="my-2">
                <h3 className="font-medium">Email:</h3>
                <p className="text-[12px] sm:text-lg">abdrahmanoladimeji02@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full py-4 px-10 md:p-10 md:w-3/5">
        {/* <div> */}
          <form
          action="https://formspree.io/f/mknykwwl"
          method="POST"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className=""
            target="_blank"
            novalidate
          >
            <h3 className='text-xl'>Message Me</h3>
            <input type="text" name="fname" placeholder="Full Name" className='w-full md:w-4/5 bg-[#33333320] p-2 border-2 border-white mt-4 my-1 rounded-lg'/>
            <input
              type="email"
              name="Email Address"
              placeholder="Email Address"
              className="w-full md:w-4/5 required email bg-[#33333320] p-2 border-2 border-white my-2 rounded-lg"
              id="mce-EMAIL"
              required
            />
            <textarea
              name="Message body"
              placeholder="Your Message..."
              className='bg-[#33333320] w-full md:w-4/5 p-2 border-2 border-white my-2 rounded-lg'
            />
            <input
              type="submit"
              value="Send"
              name="Send"
              className="w-full md:w-4/5 bg-white text-black font-medium uppercase text-xl my-2 pt-2 pb-1 px-4 rounded-lg border border-white hover:text-white hover:bg-transparent transition duration-500"
            />
          </form>
        </div>
      </div>
      </div>
    </div>
    <Footer/>
    </section>
  )
}

export default Contact