

import React, { useState } from 'react'
import './terms.styles.scss'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import SubHeader from '../../components/subheader/subheader.components'
import { IoWarning } from 'react-icons/io5'
import { MdPrivacyTip } from 'react-icons/md'


const TermsAndConditions = () => {

    // const [ pageStatus, setPageStatus ] = useState(0);

    // const getSignUpStatus = (data) => {
    //     setPageStatus(data)
    //     console.log('Submitted: Parent ', data)
    // }

    
  return (
    <>

    <SubHeader h2='Terms & Conditions' h6='Read and accepts our terms to register' />

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

                <p>Welcome to Cake by Sandy. By placing an order with us, you agree to the following terms and conditions.</p>
        
                <h2>1. General</h2>
                <p>These terms and conditions apply to all orders placed by customers with Cake by Sandy. We reserve the right to update or modify these terms at any time without prior notice.</p>
                
                <h2>2. Orders</h2>
                <p>All orders must be placed at least 48 hours in advance. For custom cakes, we recommend ordering at least one week in advance to ensure availability and adequate preparation time. Orders can be placed through our website, phone, or in-person at our bakery.</p>
                
                <h2>3. Payments</h2>
                <p>Full payment is required at the time of order placement. We accept major credit cards, PayPal, and cash for in-person orders. Prices are subject to change without notice.</p>
                
                <h2>4. Cancellations and Refunds</h2>
                <p>Cancellations must be made at least 48 hours before the scheduled pickup or delivery time to receive a full refund. For cancellations made within 48 hours, a 50% refund will be issued. No refunds will be given for cancellations made less than 24 hours before the scheduled pickup or delivery time.</p>
                
                <h2>5. Delivery and Pickup</h2>
                <p>We offer delivery within a 20-mile radius of our bakery for an additional fee. Delivery times are subject to availability. Customers are responsible for providing accurate delivery information. Pickup orders must be collected within the agreed-upon time frame. We are not responsible for orders left uncollected.</p>
                
                <h2>6. Product Quality and Storage</h2>
                <p>Our cakes and pastries are made with the finest ingredients and are best enjoyed fresh. We recommend storing cakes in a cool, dry place and consuming them within 48 hours. Custom cakes with perishable fillings should be refrigerated.</p>
                
                <h2>7. Allergies and Dietary Restrictions</h2>
                <p>Customers are responsible for informing us of any allergies or dietary restrictions when placing an order. While we take precautions to prevent cross-contamination, we cannot guarantee that our products are free from allergens.</p>
                
                <h2>8. Custom Designs</h2>
                <p>For custom cake orders, customers must provide detailed design specifications. We will make every effort to replicate the design, but slight variations may occur. Photographs provided for custom designs will be used as inspiration.</p>
                
                <h2>9. Limitation of Liability</h2>
                <p>Cake by Sandy is not liable for any damages or losses resulting from the consumption of our products, including but not limited to allergic reactions or improper storage. Our liability is limited to the value of the purchased product.</p>
                
                <h2>10. Governing Law</h2>
                <p>These terms and conditions are governed by the laws of the state in which Cake by Sandy operates. Any disputes arising from these terms will be resolved in the courts of that state.</p>
                
                <h2>11. Contact Information</h2>
                <p>For any questions or concerns regarding these terms and conditions, please contact us at:</p>
                <ul>
                    <li>Email: info@cakebysandy.com</li>
                    <li>Phone: (123) 456-7890</li>
                </ul>
                
                <p>Thank you for choosing Cake by Sandy. We appreciate your business and look forward to serving you.</p>

            </div>
        </div>

    </div>

    </>
  )
}

export default TermsAndConditions