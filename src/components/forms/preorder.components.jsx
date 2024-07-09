

import { Button, Input } from '@material-tailwind/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PreorderForm = () => {
    const navigate = useNavigate()

    
    const defaultValues = {
        mid: '',
        cake_list: [],
        fullname: '',
        phone: '',
        email: '',
        evt_date: '',
        evt_time: '',
        delivery: 'yes',
        delivery_add: '',
        special_inst: '',
        terms: false,
        del: 'no',
        created_at: new Date(),
        updated_at: null,
    }
    const [ formFields, setFormFields ] = useState(defaultValues);

    const changeFieldText = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
        localStorage.setItem('formFields', JSON.stringify({...formFields, [name]: value}))
        console.log(value)
    }

    const submitOrder = (event) => {
        event.preventDefault()
        localStorage.setItem('formFields', JSON.stringify(formFields))
        console.log(formFields)
        navigate('/book', {replace: true})
    }

  return (
    <>
    <div className="pre-order-container">
        <form onSubmit={submitOrder} action="" className='w-full sm:w-auto'>
            <div className="pre-order">
                <div className="pre-note">
                    <h2>Pre Order</h2>
                    <p>From Sandy</p>
                </div>
                
                <div className="tf-container">
                    <p>Date Needed</p>
                    <input name='evt_date' type="date" placeholder='Date Needed' onChange={changeFieldText} required />
                </div>

                <div className="tf-container">
                    <p>Phone</p>
                    <input name='phone' type="number" min={0} placeholder='Type Here' onChange={changeFieldText} required />
                </div>

                {/* <div className="tf-container">
                    <p>Type</p>
                    <select name="category" id="">
                        <option value="">Cupcakes</option>
                        <option value="">Wedding Cake</option>
                        <option value="">Birthday Cake</option>
                        <option value="">Customized Cakes</option>
                        <option value="">Celebration Cakes</option>
                    </select>
                </div> */}

                <Button type='submit' className='preoder-btn'>Next</Button>
            </div>
        </form>
        {/* <form id='' onSubmit="" className="mt-8 mb-2 w-full max-w-screen-lg">
            <div className="flex">
                <div className="input-div w-1/2">
                    <Input variant="outlined" name="age" type="number" min={5} size="lg" label="Age" placeholder="Should be 5+"/>
                </div>

                <div className="input-div mx-2 w-1/3">
                    <select className="mySelect" variant="outlined" name="gender" size="lg">
                        <option value='M'>Gender</option>
                        <option value='M'>Male</option>
                        <option value='F'>Female</option>
                    </select>
                </div>
            </div>
        </form> */}
    </div>
    </>
  )
}

export default PreorderForm