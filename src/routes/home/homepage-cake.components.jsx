

import React from 'react'

const HompageCake = () => {
  return (
    <form action="">
        <div className="pre-order">
            <div className="pre-note">
                <h2>Pre Order</h2>
                <p>From Sandy</p>
            </div>
            <div className="tf-container"><input name='date_needed' type="text" placeholder='Date Needed' /></div>
            <div className="tf-container"><input name='date_needed' type="number" min={0} placeholder='Phone' /></div>
            <div className="tf-container">
                <select name="category" id="">
                    <option value="">Cupcakes</option>
                    <option value="">Wedding Cake</option>
                    <option value="">Birthday Cake</option>
                    <option value="">Customized Cakes</option>
                    <option value="">Celebration Cakes</option>
                </select>
            </div>
        </div>
    </form>
  )
}

export default HompageCake