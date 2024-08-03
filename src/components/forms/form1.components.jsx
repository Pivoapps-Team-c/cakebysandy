
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
import './forms.styles.scss'
import { BsPlusCircle } from "react-icons/bs";
import { FaCheck, FaRegCircleCheck, FaTimeline } from "react-icons/fa6";
import { FaRegTimesCircle, FaTimes, FaTimesCircle } from "react-icons/fa";
import { useContext, useEffect, useId, useState } from "react";
import { IoWarning } from "react-icons/io5";
import { infoToast, successToast } from "../../utils/firebase/firebase.utils";
import { OrderContext } from "../../context/order.context";


   
export function Form1({ sendOrderStatus }) {

    const lc = useId();
    // console.log('Started')
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
        status: 'no',
        del: 'no',
        created_at: new Date(),
        updated_at: null,
    }
    const defaultCakeField = {
        c: 0,
        cake_type: '',
        qty: '',
        flavor: 'Flavor 1',
        specific_dets: '',
        dietary_rests: ''
    }

    const { addOrder, orders } = useContext(OrderContext);
    
    const [ allOrders, setAllOrders ] = useState(orders);
    const [ formFields, setFormFields ] = useState(defaultValues);
    const [ CakeField, setCakeField ] = useState(defaultCakeField);
    // const [ orderStatus, setOrderStatus ] = useState(0);
    const [termsChecked, setTermsChecked] = useState(false);
    const [cakeDelivery, setCakeDelivery] = useState('Delivery');
    const [ inquiryText, setInquirText ] = useState('');



    const handleDelivery = () => {
        setFormFields({...formFields, ['delivery']: 'yes'})
        localStorage.setItem('formFields', JSON.stringify({...formFields, ['delivery']: 'yes'}))
        // setCakeDelivery('Deliver')
        // console.log(cakeDelivery)
        // console.log(JSON.parse(localStorage.getItem('formFields')))
    };

    const handlePickUp = () => {
        setFormFields({...formFields, ['delivery']: 'no'})
        localStorage.setItem('formFields', JSON.stringify({...formFields, ['delivery']: 'no'}))
        // setCakeDelivery('Pick Up')
        // console.log(cakeDelivery)
    };

    const handleCheckboxChange = (event) => {
        setTermsChecked(event.target.checked);
        // console.log(event.target.checked)
    };

    const changeFieldText = (event) => {
        const { name, value } = event.target;
        // if (name == 'gfullname') {
        //     const findMember = allOrders.find(el => el.mid === value.toUpperCase());
        //     if (findMember) {
        //         return setFormFields(findMember)
        //     }
        // }
        setFormFields({...formFields, [name]: value})
        localStorage.setItem('formFields', JSON.stringify({...formFields, [name]: value}))
        // console.log(value)
    }

    const changeListField = (event) => {
        const { name, value } = event.target;
        setCakeField({...CakeField, [name]: value, ['c']: formFields.cake_list.length + 1})
        // console.log(CakeField)
    }

    const addToList = () => {

        if (CakeField.cake_type === '' || CakeField.cake_type === 0 || CakeField.qty === '') {
            return infoToast('Oops..! fill in required fields under *Order Details* to proceed')
        }
        // const checkName = formFields.cake_list.find(el => el.cake_type === CakeField.cake_type && el.qty === CakeField.qty && el.flavor === CakeField.flavor)
        // if (checkName) {
        //     infoToast('Item already exists in list')
        // } else {
            formFields.cake_list.push(CakeField)
            setFormFields(formFields)
            defaultCakeField['cake_type'] = CakeField['cake_type']
            defaultCakeField['flavor'] = CakeField['cake_type']
            localStorage.setItem('formFields', JSON.stringify(formFields))
            setCakeField(defaultCakeField)
            // console.log(CakeField)
        // }

    }

    const delName = (item) => {
        // return console.log(item)
        const newList = formFields.cake_list.filter(el => el.c != item.c)
        // return console.log(newList)
        formFields['cake_list'] = newList
        setFormFields(formFields)
        setCakeField(defaultCakeField)
        successToast('Item has been removed from the list')
    }

    const submitPreOrder = async (event) => {
        event.preventDefault()

        if (formFields.cake_list.length == 0) {
            return infoToast('Oops..! Add order details to proceed')
        }

        if (termsChecked == false) {
            setInquirText('x')
            return infoToast('Oops..! Read and accept Terms & Conditions to proceed')
        }

        if (formFields.evt_date === '' || formFields.evt === '') {
            return infoToast('Oops..! Event date & Delivery time required')
        }

        formFields['terms'] = termsChecked;
        formFields['mid'] = 'CS00' + (allOrders.length + 1);

        // return console.log(formFields)

        // Set Terms before db save
        // Save status to local storage
        await addOrder(formFields).then(
            setInquirText('y'),
            sendOrderStatus(1),
            localStorage.removeItem('formFields')
            // setFormFields([])
        );
    }


    useEffect(() => {
        setAllOrders(orders)
        // console.log(orders)
    }, [orders])


    // useEffect(() => {
    //     localStorage.setItem('formFields', JSON.stringify(formFields))
    // }, [formFields])


    useEffect(() => {
        const localStore = localStorage.getItem('formFields');
        if (localStore) {
            setFormFields(JSON.parse(localStore))
            console.log('local Store', localStore)
        }
    }, [])



    return (
        <Card color="transparent" shadow={false}>
            <Typography className="form-header-text" variant="h4" color="blue-gray">
                Pre Order
            </Typography>
            <Typography color="gray" className="mt-1 font-normal text-sm text-gray-500">
                Let us know how you want your cake.
            </Typography>

            <form id='' onSubmit={submitPreOrder} className="mt-8 mb-2 w-full max-w-screen-lg form1">
                <div className="mb-1 flex flex-col gap-5">

                    { inquiryText === 'y' ?
                        <Button type="button" variant='outlined' color='green' size='lg' className="flex text-center text-xs tracking-wider my-2 rounded-md"><FaRegCircleCheck size={16} />&nbsp;Order Successful</Button>
                    : inquiryText === 'x' ?
                        <Button type="button" variant='outlined' color='red' size='lg' className="flex text-center text-xs tracking-wider my-2 rounded-md" fullWidth><IoWarning size={16} />&nbsp;Oops..! Read and accept Terms & Conditions to proceed</Button>
                    :null }

                    <div className="input-div">
                        <Input variant="outlined" name="fullname" value={formFields.fullname} onChange={changeFieldText} type="text" size="lg" label="Fullname / Member ID" placeholder="" required/>
                    </div>

                    <div className="input-div">
                        <Input variant="outlined" name="phone" value={formFields.phone} onChange={changeFieldText} type="number" min={0} size="lg" label="Phone" placeholder="" required/>
                    </div>

                    <div className="input-div">
                        <Input variant="outlined" name="email" value={formFields.email} onChange={changeFieldText} type="email" size="lg" label="Email" placeholder="" required/>
                    </div>



                    <div className="form-top flex flex-col gap-3 border rounded-md px-2 py-4">
                        <p className="brown-p border-b border-orange-700/40 p-2 text-xs font-medium">Order Details</p>

                        <div className="input-div">
                            <select className="mySelect" variant="outlined" name="cake_type" size="lg" onChange={changeListField}>
                                <option value={0}>Select Type</option>
                                <option value="Cupcake">Cupcake</option>
                                <option value="Birthday Cake">Birthday Cake</option>
                                <option value="Anniversary Cake">Anniversary Cake</option>
                                <option value="Celebration CAke">Celebration Cake</option>
                                <option value="Wedding Cake">Wedding Cake</option>
                                <option value="Pastries">Pastries</option>
                                <option value="Custom">Custom</option>
                            </select>
                        </div>

                        <div className="flex">
                            <div className="input-div w-1/2">
                                <Input variant="outlined" name="qty" value={CakeField.qty} onChange={changeListField} type="number" min={1} size="lg" label="Quantity" placeholder="1 or more"/>
                            </div>

                            <div className="input-div mx-2 w-1/3">
                                <select className="mySelect" variant="outlined" name="flavor" size="lg" onChange={changeListField}>
                                    <option value='F1'>Flavor 1</option>
                                </select>
                            </div>
                        </div>

                        <div className="input-div">
                            <Textarea label="Specific Details" name="specific_dets" value={CakeField.specific_dets} onChange={changeListField} />
                        </div>

                        <div className="input-div">
                            <Textarea label="Dietary Restrictions" name="dietary_rests" rows={6} value={CakeField.dietary_rests} onChange={changeListField} />
                        </div>

                        <div className="input-div w-1/2">
                            <Button variant="outlined" size="sm" className="flex mx-6 my-1 rounded-md" onClick={addToList}><BsPlusCircle size={16} />&nbsp; Add to List</Button>
                        </div>

                        <div className="kids-list">

                            { formFields && formFields.cake_list.length > 1 ?
                                <p className="blue-p border-b p-2 text-xs font-medium"> {formFields.cake_list.length} Order Added To List</p>
                            : formFields.cake_list.length === 1 ?
                                <p className="blue-p border-b p-2 text-xs font-medium"> {formFields.cake_list.length} Orders Added To List</p>
                            :<p className="blue-p border-b p-2 text-xs font-medium"> No Order Added To List</p>
                            }

                            { formFields && formFields.cake_list.length > 0 ? formFields.cake_list.map((el, i) => 
                                <div key={i} className="border-b px-4 py-2 text-xs capitalize text-gray-600">{el.cake_type+' / Qty:'+el.qty+' / '+el.flavor}
                                    <FaRegTimesCircle size={16} onClick={() => delName(el)} className="text-red-500 float-right hover:text-gray-600" />
                                    <p className="text-gray-500 pt-2">{el.specific_dets}</p>
                                    <p className="text-orange-700/70">{el.dietary_rests}</p>
                                </div>
                            )
                            :null}
                            
                        </div>
                        
                    </div>



                    <div className="form-top flex flex-col gap-3 border rounded-md px-2 py-4">
                        <p className="brown-p border-b border-orange-700/40 p-2 mb-5 text-xs font-medium">Event Details</p>

                        <div className="flex">
                            <div className="input-div w-1/2">
                                <Input variant="outlined" name="evt_date" value={formFields.evt_date} onChange={changeFieldText} type="date" size="lg" label="Event Date" />
                            </div>

                            <div className="input-div mx-2 w-1/3">
                                <select className="mySelect" onChange={changeFieldText} variant="outlined" name="evt_time" size="lg">
                                    {
                                        formFields.evt_time !== '' ?
                                        <option selected>{formFields.evt_time}</option>
                                        :<option value={0}>Delivery Time</option>
                                    }
                                    <option>9:00 AM</option>
                                    <option>10:00 AM</option>
                                    <option>11:00 AM</option>
                                    <option selected>12:00 PM</option>
                                    <option>1:00 PM</option>
                                    <option>2:00 PM</option>
                                    <option>3:00 PM</option>
                                    <option>4:00 PM</option>
                                    <option>5:00 PM</option>
                                    <option>6:00 PM</option>
                                    <option>7:00 PM</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex gap-10 text-xs uppercase my-2">
                        { formFields.delivery === 'yes' ? 
                        <>
                            <Radio name="deliver" onClick={(handleDelivery)} label="Delivery" color="orange" icon={<FaCheck />}ripple={true} defaultChecked />
                            <Radio name="deliver" onClick={handlePickUp} label="Pick Up" color="orange" icon={<FaCheck />} ripple={false} />
                        </>
                        :
                        <>
                            <Radio name="deliver" onClick={(handleDelivery)} label="Delivery" color="orange" icon={<FaCheck />}ripple={true} />
                            <Radio name="deliver" onClick={handlePickUp} label="Pick Up" color="orange" icon={<FaCheck />} ripple={false} defaultChecked />
                        </>
                        }
                        </div>

                        { formFields.delivery == 'yes' ?
                            <div className="input-div">
                                <Input variant="outlined" name="delivery_add" value={formFields.delivery_add} onChange={changeFieldText} type="text" size="lg" label="Delivery Address" required/>
                            </div>
                        :null }

                        <div className="input-div">
                            <Textarea label="Special Instructions" name="special_inst" value={formFields.special_inst} onChange={changeFieldText} />
                        </div>

                    </div>

                </div>

                <Checkbox
                    type="checkbox"
                    checked={termsChecked} 
                    onChange={handleCheckboxChange}
                    label={
                    <Typography
                        variant="small"
                        color="gray"
                        className="flex items-center font-normal"
                    >
                        I agree to the
                        <a href="/terms"
                            className="font-medium transition-colors text-blue-500 border-b">
                            &nbsp;Terms and Conditions
                        </a>
                    </Typography>
                    }
                    containerProps={{ className: "-ml-2.5" }}
                />

                <Button className="mt-6" type="submit" fullWidth>Submit</Button>

                <Typography color="gray" className="mt-4 text-center font-normal">
                    Already have an account?{" "}
                    <a href="#" className="font-medium text-gray-900">
                    Sign In
                    </a>
                </Typography>
            </form>
        
        </Card>
    );
}