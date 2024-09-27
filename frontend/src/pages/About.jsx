import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBow from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Welcome to forever, your one-stop destination for stylish and affordable clothing! We believe that fashion should be accessible to everyone, which is why we curate a diverse selection of trendy apparel for all occasions.</p>
            <p>Our passionate team is dedicated to bringing you the latest styles while ensuring top-notch quality and exceptional customer service. Join us on this fashion journey and discover pieces that express your unique style!</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Our mission is to empower shoppers by providing a seamless online shopping experience, offering a curated selection of high-quality products at competitive prices, while prioritizing exceptional customer service and sustainability.</p>
        </div>
      </div>

      <div className=' text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm  mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Choose us for quality assurance because we rigorously vet suppliers and enforce strict quality control. Our team ensures every product meets high standards, backed by warranties and dedicated support. Shop with confidence—your satisfaction is our priority!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Choose us for convenience! Our user-friendly website makes shopping easy, with quick navigation, secure payment options, and fast shipping. Enjoy hassle-free returns and responsive customer support, ensuring a smooth experience from start to finish. Shop effortlessly and get what you need, when you need it!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Choose us for exceptional customer service! Our friendly and knowledgeable team is dedicated to assisting you at every step, ensuring your questions are answered and concerns addressed promptly. </p>
        </div>
      </div>

      <NewsletterBow />
    </div>
  )
}

export default About