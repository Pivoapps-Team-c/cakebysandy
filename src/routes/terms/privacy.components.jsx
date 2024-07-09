

import React, { useState } from 'react'
import './terms.styles.scss'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import SubHeader from '../../components/subheader/subheader.components'
import { IoWarning } from 'react-icons/io5'
import { MdPrivacyTip } from 'react-icons/md'

const PrivacyPolicy = () => {
  return (
    <>

    <SubHeader h2='Privacy Policy' h6='Read more about our policies' />

    <div className="content-wrapper">
        <div className="signup-page">
            <div className="signup-left">
                <a href="/terms">
                    <div className="steps">
                        <h2><IoWarning size='18' className='float-left mr-2 mt-1'/>&nbsp; Terms & Conditions</h2>
                        <p>Fill in your personal/contact details</p>
                    </div>
                </a>

                <a href="/privacy">
                    <div className="steps">
                        <h2><MdPrivacyTip size='18' className='float-left mr-2 mt-1'/>&nbsp; Privacy Policy</h2>
                        <p>Make registration payment here</p>
                    </div>
                </a>
            </div>

            <div className="signup-right TandCs">

                <p>Your privacy is important to us at Cake by Sandy. This privacy policy explains how we collect, use, and protect your personal information.</p>
    
                <h2>1. Information We Collect</h2>
                <p>We collect personal information when you place an order, sign up for our newsletter, or contact us. This may include your name, email address, phone number, delivery address, and payment information.</p>
                
                <h2>2. How We Use Your Information</h2>
                <p>We use your information to process orders, communicate with you, and improve our services. Specifically, we use your information to:</p>
                <ul>
                    <li>Process and fulfill your orders</li>
                    <li>Send you order confirmations and updates</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Send you promotional materials and newsletters, if you have opted in</li>
                    <li>Improve our website and services</li>
                </ul>
                
                <h2>3. How We Protect Your Information</h2>
                <p>We implement a variety of security measures to protect your personal information. These measures include secure servers, encryption, and restricted access to data. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                
                <h2>4. Sharing Your Information</h2>
                <p>We do not sell, trade, or otherwise transfer your personal information to outside parties, except as necessary to fulfill your orders and provide our services. This includes trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.</p>
                
                <h2>5. Your Rights</h2>
                <p>You have the right to access, update, or delete your personal information. You can do this by contacting us at the information provided below. You may also opt out of receiving promotional emails from us by following the unsubscribe instructions in those emails.</p>
                
                <h2>6. Changes to Our Privacy Policy</h2>
                <p>We may update our privacy policy from time to time. Any changes will be posted on this page, and the date of the latest revision will be indicated at the top. We encourage you to review our privacy policy periodically to stay informed about how we are protecting your information.</p>
                
                <h2>7. Contact Us</h2>
                <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
                <ul>
                    <li>Email: info@cakebysandy.com</li>
                    <li>Phone: (123) 456-7890</li>
                </ul>
                
                <p>Thank you for trusting Cake by Sandy with your personal information. We value your privacy and are committed to protecting it.</p>

            </div>
        </div>

    </div>
    
    </>
  )
}

export default PrivacyPolicy