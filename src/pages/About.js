import React, { Component } from 'react'
import Navs from '../access/component/Navs';
import '../access/main.css';
import '../pages-style/about.css'
import Footer from '../access/component/Footer'
export default class About extends Component {
  render() {
    return (
      <div className='about'>
        <Navs />
         <div className='about-content'>
         <h1 className='about-title'>ABOUT US</h1>
         <p>You’re on a journey to health and wellness. And we’re right there with you.</p>
         <p>How you feel affects every single day of your life, which is why you work so hard to get well and stay well. No matter your journey, we’re here to support, guide, and inspire you.</p>
         <p>We cut through the confusion with straightforward, expert-reviewed, person-first experiences — all designed to help you make the best decisions for yourself and the people you love.</p>
         <strong><p>We want to help you own your well-being.</p></strong>
         <p>Healthline covers all facets of physical and mental health openly and objectively because we’re here for the whole person — for your whole life. And because people come to us with unique challenges, we listen closely and put empathy first across our organization. In everything from our personal perspectives to our commitment to inclusivity, you’ll see that we feel with you.</p>
         <p>We hope you tap into all of Healthline’s resources — from our health and wellness library and newsletters to our apps, podcasts, and communities.
</p>
        <p>Thanks for being here,
          The Healthy Lifestyle Team !!</p>
          <hr />
          <h3>Health seekers have made us the fastest growing health information site. Over 200 million people turn to Healthline every month.</h3>
          <p>Whether you’re here to learn more about a health condition, research a medication, tap into one of our communities, or get some tips for a healthier lifestyle, you’re in the right place. You’ll find content that’s informative, easy to understand, and engaging. You’ll also find a compassionate team of professionals who genuinely care about people.</p>
          <h1>ABOUT US </h1>
          <h2>Medical Affairs</h2>
          <p>Healthline’s Medical Affairs team ensures that Healthline’s content, products, and services uphold the highest standards of medical integrity. Our dedicated team manages an extensive medical network of over 150 healthcare professionals providing medical review, expert POVs, and clinical guidance. Healthline’s healthcare professionals help ensure that the information we publish is accurate, evidence-based, current, person-centric, and trustworthy.</p>
          <hr/>
          <h1>Following us</h1>
          <p>As your ally, we promise to never leave you stranded in your journey to well-being. Healthline has more than 15 social communities where people from across the globe come together to find information, share experiences, and offer support. We’re committed to bringing all matters of health into the spotlight. Through moderated conversations, expert-hosed videos, and content that serves the whole person, Healthline is changing the way we think about well-being.</p>
          <hr/>
          <h2>Privacy Plicy</h2>
          <p>Health & Fitness is dedicated to protecting the privacy of readers and customers. Because customer privacy is our top priority, we proactively embed privacy into the development and curation of our services.</p>
          <p>At any time, all customers — regardless of geographical location — can make a data subject access request by using our rights request form. In doing so, customers can access, delete, restrict, or correct all personal information that they have shared with Healthline.</p>
          <p>Health & Fitness will share your personal information with third-party marketers only after you have provided explicit consent to do so.</p>
          <p>We are committed to the advancement of customer privacy initiatives. We are a Silver Corporate Sponsor of the International Association of Privacy Professionals (IAPP).</p>
          <hr/>
          <h2>Terms of Use</h2>
          <p>Our content is for informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified healthcare professional with any questions you may have regarding a medical condition. If you think you may have a medical emergency, call your doctor or 911 immediately.</p>
          <p>Our websites and apps operate under a code of conduct to encourage welcoming, diverse, and inclusive interactions; and to discourage harassment of any kind.</p>
          <p>We support authors’ creative rights by investigating, and removing where appropriate, materials that infringe on an author’s copyright through our Digital Millennium Copyright Act (DCMA) procedures.</p>
          </div>
       <Footer />
      </div>
    )
  }
}
