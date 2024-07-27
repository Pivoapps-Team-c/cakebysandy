

import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Select,
    Option,
    Textarea,
    Radio,
  } from "@material-tailwind/react";
import { BsPlusCircle } from "react-icons/bs";
import { FaCheck, FaRegCircleCheck, FaTimeline } from "react-icons/fa6";
import { FaRegTimesCircle, FaTimes, FaTimesCircle } from "react-icons/fa";
import React, { useContext, useEffect, useId, useState } from "react";
import { IoWarning } from "react-icons/io5";
import { successToast } from "../../utils/firebase/firebase.utils";

 
const Page1Home = () => {

    const lc = useId();
    // console.log('Started')
    const defaultValues = {
        mid: '',
        cake_list: [],
        title: 'Deliciously Baked, Lovingly Made',
        subtitle1: "Handcrafted cakes and pastries that bring joy to every occasion, ",
        subtitle2: "made with the finest ingredients and a touch of love.",
        cat1: 'Category One',
        cat1_desc: 'Short description from category one',
        cat2: 'Category Two',
        cat2_desc: 'Short description from category two',
        cat3: 'Category Three',
        cat3_desc: 'Short description from category three',
        evt_time: '',
        more_sandy: "Discover the range of delights that Sandy's Cake offers. From decadent cakes to mouthwatering pastries, our creations are crafted with passion and precision. Whether for a special celebration or a sweet craving, we have the perfect treat to make your day extraordinary. Explore our menu, book your custom order, and enjoy the finest baked goods made with love and the best ingredients.",
        del: 'no',
        created_at: new Date(),
        updated_at: null,
    }
    
    const [ formFields, setFormFields ] = useState(defaultValues);



    const changeFieldText = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
        localStorage.setItem('formFields', JSON.stringify({...formFields, [name]: value}))
        // console.log(value)
    }

    const updateHomepage = () => {
        successToast("Homepage update successful")
    }


 
  return (
    <>
    <form id='' className="m-auto w-full max-w-screen-lg">
        <div className="mb-1 flex flex-col gap-5">

            <p className="brown-p border-b border-orange-700/40 p-2 text-xs font-medium">Header</p>

            {/* { inquiryText === 'y' ?
                <Button type="button" variant='outlined' color='green' size='lg' className="flex text-center text-xs tracking-wider my-2 rounded-md"><FaRegCircleCheck size={16} />&nbsp;Order Successful</Button>
            : inquiryText === 'x' ?
                <Button type="button" variant='outlined' color='red' size='lg' className="flex text-center text-xs tracking-wider my-2 rounded-md" fullWidth><IoWarning size={16} />&nbsp;Oops..! Read and accept Terms & Conditions to proceed</Button>
            :null } */}

            <div className="input-div">
                <Input variant="outlined" name="title" value={formFields.title} onChange={changeFieldText} type="text" size="lg" label="Title" maxLength={32} required/>
            </div>

            <div className="input-div">
                <Input variant="outlined" name="subtitle1" value={formFields.subtitle1} onChange={changeFieldText} type="text" size="lg" label="Subtitle 1" maxLength={60} required/>
            </div>

            <div className="input-div">
                <Input variant="outlined" name="subtitle2" value={formFields.subtitle2} onChange={changeFieldText} type="text" size="lg" label="Subtitle 2" maxLength={60}/>
            </div>


            <p className="brown-p border-b border-orange-700/40 p-2 text-xs font-medium">What we do</p>

            <div className="input-div">
                <Input variant="outlined" name="cat1" value={formFields.cat1} onChange={changeFieldText} type="text" size="lg" label="Category 1" maxLength={24} required/>
            </div>

            <div className="input-div">
                <Textarea label="Category 1 Description" name="cat1_desc" value={formFields.cat1_desc} onChange={changeFieldText} maxLength={150} required/>
            </div>

            <div className="input-div">
                <Input variant="outlined" name="cat2" value={formFields.cat2} onChange={changeFieldText} type="text" size="lg" label="Category 2" maxLength={24} required/>
            </div>

            <div className="input-div">
                <Textarea label="Category 2 Description" name="cat2_desc" value={formFields.cat2_desc} onChange={changeFieldText} maxLength={150} required/>
            </div>

            <div className="input-div">
                <Input variant="outlined" name="cat3" value={formFields.cat3} onChange={changeFieldText} type="text" size="lg" label="Category 3" maxLength={24} required/>
            </div>

            <div className="input-div">
                <Textarea label="Category 3 Description" name="cat3_desc" value={formFields.cat3_desc} onChange={changeFieldText} maxLength={150} required/>
            </div>


            <p className="brown-p border-b border-orange-700/40 p-2 text-xs font-medium">Featured</p>

            <div className="input-div">
                <Textarea label="More from Sandy's" name="cat3_desc" value={formFields.more_sandy} onChange={changeFieldText} maxLength={390} required/>
            </div>

            <div className="input-div">
                <Button type="button" onClick={updateHomepage} className="rounded-md">Update Homepage</Button>
            </div>
        </div>
    </form>
    </>
  );
}

export default Page1Home