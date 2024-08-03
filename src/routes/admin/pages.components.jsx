

import AdmiSubHeader from '../../components/subheader/admi-subheader.components'
import { AdmiMenu } from './admi-menu.components'
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
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { BsCheckCircle, BsPlusCircle, BsUpload } from "react-icons/bs";
import { FaCheck, FaRegCircleCheck, FaTimeline } from "react-icons/fa6";
import { FaRegSave, FaRegTimesCircle, FaTimes, FaTimesCircle } from "react-icons/fa";
import React, { useContext, useEffect, useId, useRef, useState } from "react";
import { IoWarning } from "react-icons/io5";
import Page1Home from './page1-home.components';
import { imageDb, successToast } from '../../utils/firebase/firebase.utils';
import ReactQuill from 'react-quill';
import 'quill/dist/quill.snow.css'; // Add css for snow theme
import { OrderContext } from '../../context/order.context';
import { PiBuildingsBold, PiGearFine } from 'react-icons/pi';
import { MdOutlineMail, MdShortText } from 'react-icons/md';
import { TbCurrentLocation, TbGlobe } from 'react-icons/tb';
import { TiPhoneOutline } from 'react-icons/ti';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from "uuid";

const PagesEdit = () => {


  const lc = useId();
  // console.log('Started')
  const defaultCompanyValues = {
    companyDisplayName: '',
    companyName: '',
    slogan: '',
    address1: '',
    address2: '',
    phone: '',
    email: '',
    country: '',
    ig: '',
    fb: '',
    tw: '',
    tq: '',
    yt: '',
    logo: 'No file uploaded',
    createdAt: new Date()
  }
  const defaultValues = {
    title: 'Deliciously Baked, Lovingly Made',
    subtitle1: "Handcrafted cakes and pastries that bring joy to every occasion, ",
    subtitle2: "made with the finest ingredients and a touch of love.",
    cat1: 'Category One',
    cat1_desc: 'Short description from category one',
    cat2: 'Category Two',
    cat2_desc: 'Short description from category two',
    cat3: 'Category Three',
    cat3_desc: 'Short description from category three',
    about_img_url: 'https://img.freepik.com/premium-photo/portrait-smiling-female-baker-leaning-stack-bread_604472-24133.jpg',
    about_name: 'Patric Ola Yawson',
    about_title: 'Our Chief',
    about_text: "Discover the range of delights that Sandy's Cake offers. From decadent cakes to mouthwatering pastries, our creations are crafted with passion and precision. Whether for a special celebration or a sweet craving, Discover the range of delights that Sandy's Cake offers. From decadent cakes to mouthwatering pastries, our creations are crafted with passion and precision. Whether for a special celebration or a sweet craving, we have the perfect treat to make your day extraordinary. Explore our menu, book your custom order, and enjoy the finest baked goods made with love and the best ingredients.",
    more_sandy: "Discover the range of delights that Sandy's Cake offers. From decadent cakes to mouthwatering pastries, our creations are crafted with passion and precision. Whether for a special celebration or a sweet craving, we have the perfect treat to make your day extraordinary. Explore our menu, book your custom order, and enjoy the finest baked goods made with love and the best ingredients.",
    del: 'no',
    company: defaultCompanyValues,
    created_at: new Date(),
    updated_at: null,
  }


  const { curPage, addPage, getCurPage } = useContext(OrderContext)
  const [ formFields, setFormFields ] = useState(defaultValues);
  const [ companyFields, setCompanyFields ] = useState(defaultCompanyValues);
  const [termsContent, setTermsContent] = useState('');
  const [privacyContent, setPrivacyContent] = useState('');
  const quillRef = useRef(null);
  const [img, setImg] = useState('')
  const [imgUrl, setImgUrl] = useState([])
  
  const { companyDisplayName, companyName, slogan, address1, address2, phone, email, country, logo } = companyFields;

  
  const handleLogoUpload = (event) =>{
    // const { name, value } = event.target;
    if(img !==null){
      const imgRef = ref(imageDb,`files/${v4()}`)
      uploadBytes(imgRef,img).then(val=>{
        console.log(val)
        getDownloadURL(val.ref).then(url=>{
          setImgUrl(data=>[...data,url])
          setFormFields({...formFields, ['logo']:url})
        })
      })
    }
  }

  const handleTermsChange = (content) => {
    setTermsContent(content);
    console.log(content)
  };

  const handlePrivacyChange = (content) => {
    setPrivacyContent(content);
    console.log(content)
  };


  const handleCompanyChange = (event) => {
    const { name, value } = event.target;
    setCompanyFields({...companyFields, [name]:value});
    console.log(value);
  }


  const handleUpdateCompany = async (event) => {
    event.preventDefault();

    if (window.confirm("ClicK `OK` to confirm update")) { 
      // return console.log(1243567);
      formFields['company'] = companyFields
      setFormFields(formFields)
      updateHomepage('Company details updated', 4)
    }
  }

  // useEffect(() => {
  //   // You can access the underlying Quill instance with quillRef.current.getEditor()
  //   const quillInstance = quillRef.current.getEditor();
  //   console.log('Quill instance:', quillInstance);
  // }, []);


  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const changeFieldText = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value})
    localStorage.setItem('formFields', JSON.stringify({...formFields, [name]: value}))
    // console.log(value)
  }

  const updateHomepage = async (msg, ct) => {
    // return console.log(1243567);
    formFields['company'] = companyFields
    await addPage(formFields, msg).then(
      setFormFields(curPage),
      // getCurPage(),
      setOpen(ct)
    )
    // formFields['subtitle1'] = 27;
    // setFormFields([formFields])
  }

  useEffect(() => {
    if (curPage) {
      setFormFields(curPage)
      setCompanyFields(curPage.company)
    }
    // console.log('curPage: ', curPage)
  }, [curPage]);


  return (
    <>
    <AdmiSubHeader h2='Pages' h6='Update web pages here' />
    <AdmiMenu />

    {/* <div className="content-wrapper2 inquiry-list">
        <p className='text-red-500 text-xs text-center m-5 uppercase tracking-wider border border-red-200 rounded-md bg-red-50/50 p-5'>Oops..! Contact administrator to proceed</p>
    </div> */}

    <div className="inquiry-list">
      <div className="accordion-container">
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            <h1>Homepage</h1><br />
            <h3>Click to Reveal/Hide</h3>
          </AccordionHeader>
          <AccordionBody>
            <form id='' className="m-auto w-full max-w-screen-lg">
              <div className="mb-1 flex flex-col gap-5">
                <p className="brown-p border-b border-orange-700/40 p-2 text-xs font-medium">Header</p>

                {/* { inquiryText === 'y' ?
                    <Button type="button" variant='outlined' color='green' size='lg' className="flex text-center text-xs tracking-wider my-2 rounded-md"><FaRegCircleCheck size={16} />&nbsp;Order Successful</Button>
                : inquiryText === 'x' ?
                    <Button type="button" variant='outlined' color='red' size='lg' className="flex text-center text-xs tracking-wider my-2 rounded-md" fullWidth><IoWarning size={16} />&nbsp;Oops..! Read and accept Terms & Conditions to proceed</Button>
                :null } */}

                <div className="input-div">
                    <Input variant="outlined" name="title" value={formFields.title} onChange={changeFieldText} type="text" size="lg" label="Title" maxLength={40} required/>
                </div>

                <div className="input-div">
                    <Input variant="outlined" name="subtitle1" value={formFields.subtitle1} onChange={changeFieldText} type="text" size="lg" label="Subtitle 1" maxLength={65} required/>
                </div>

                <div className="input-div">
                    <Input variant="outlined" name="subtitle2" value={formFields.subtitle2} onChange={changeFieldText} type="text" size="lg" label="Subtitle 2" maxLength={55}/>
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
                    <Textarea label="More from Sandy's" name="more_sandy" value={formFields.more_sandy} onChange={changeFieldText} maxLength={390} required/>
                </div>

                <div className="input-div">
                    <Button type="button" onClick={()=>updateHomepage("Homepage update successful", 1)} className="rounded-md">Update Homepage</Button>
                </div>
              </div>
            </form>
          </AccordionBody>
        </Accordion>
        
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            <h1>About</h1>
          </AccordionHeader>
          <AccordionBody>
            <form id='' className="m-auto w-full max-w-screen-lg">
              <div className="mb-1 flex flex-col gap-5">
                <div className="input-div">
                  <Input variant="outlined" name="about_img_url" value={formFields.about_img_url} onChange={changeFieldText} type="text" size="lg" label="About Image Url" required/>
                </div>

                <div className="input-div">
                  <Input variant="outlined" name="about_name" value={formFields.about_name} onChange={changeFieldText} type="text" size="lg" label="Title / Name" maxLength={20} required/>
                </div>

                <div className="input-div">
                  <Input variant="outlined" name="about_title" value={formFields.about_title} onChange={changeFieldText} type="text" size="lg" label="Subtitle / Position" maxLength={17} required/>
                </div>

                <div className="input-div">
                  <Textarea label="About Text" rows={7} name="about_text" value={formFields.about_text} onChange={changeFieldText} required/>
                </div>

                <div className="input-div">
                    <Button type="button" onClick={()=>updateHomepage("About update successful", 2)} className="rounded-md">Update About</Button>
                </div>
              </div>
            </form>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            <h1>Documents</h1>
          </AccordionHeader>
          <AccordionBody>

            <div>
              <p className="brown-p border-b border-orange-700/40 p-2 mb-2 text-xs font-medium">Terms & Conditions</p>
              <ReactQuill value={termsContent} onChange={handleTermsChange} />
              
              <p className="brown-p border-b border-orange-700/40 p-2 mt-10 mb-2 text-xs font-medium">Privacy Policy</p>
              <ReactQuill value={privacyContent} onChange={handlePrivacyChange} />
            </div>

          </AccordionBody>
        </Accordion>

        <Accordion open={open === 4}>
          <AccordionHeader onClick={() => handleOpen(4)}>
            <h1>Company Details</h1>
          </AccordionHeader>
          <AccordionBody>

            {/* <div className='flex'>
              <PiGearFine size='30' />
            </div> */}

            <form id='' className="m-auto w-full max-w-screen-lg">
              <div className="mb-1 flex flex-col gap-5">
                <div className=''>
                  <Input onChange={handleCompanyChange} value={companyDisplayName} className='w-full' name='companyDisplayName' type='text' size='lg' label='Company Display Name' maxLength='12' required/>
                </div>

                <div className=''>
                  <Input onChange={handleCompanyChange} value={companyName} className='w-full' name='companyName' type='text' size='lg' label='Company Name' required/>
                </div>
                
                <div className=''>
                  <Input onChange={handleCompanyChange} value={slogan} className='w-full' name='slogan' type='text' size='lg' label='Slogan' required/>
                </div>
                
                <div className=''>
                  <Input onChange={handleCompanyChange} value={address1} className='w-full' name='address1' type='text' size='lg' label='Address (Line 1)' required/>
                </div>
                
                <div className=''>
                  <Input onChange={handleCompanyChange} value={address2} className='w-full' name='address2' type='text' size='lg' label='Address (Line 2)' required/>
                </div>
                
                <div className=''>
                  <Input onChange={handleCompanyChange} value={phone} className='w-full' name='phone' type='text' maxLength={24} size='lg' label='Phone' required/>
                </div>
                
                <div className=''>
                  <Input onChange={handleCompanyChange} value={email} className='w-full' name='email' type='email' min='0' size='lg' label='Email' required/>
                </div>
                
                <div className=''>
                  <Input onChange={handleCompanyChange} value={country} className='w-full' name='country' type='text' size='lg' label='Country' required/>
                </div>
                
                <div className=''>
                  {/* <div className='flex'>
                    <Input className='text-xs rounded-md' inIcon={<BsUpload />} type="file" label='Upload Logo'/>
                    <Button type='submit' className='float-right m-2' size='sm' variant="outlined">&nbsp;<MdOutlineMarkEmailUnread size='18' className='float-left mr-2'/> Send Code &nbsp;</Button>
                  </div> */}

                  <div className="relative flex w-full">
                    <Input type="file" 
                      label="Upload Logo"
                      // value={logo}
                      // onChange={onChange}
                      className="pr-20" 
                      onChange={(e)=>setImg(e.target.files[0])}
                      containerProps={{
                        className: "min-w-0",
                      }}
                    />
                    <Button
                      size="sm"
                      variant="outlined"
                      color={logo ? "gray" : "blue-gray"}
                      disabled={!logo}
                      onClick={handleLogoUpload}
                      className="!absolute right-1 top-1 rounded">
                      <BsUpload size='14' className='float-left mr-2'/> 
                      Upload
                    </Button>
                  </div>
                  <div>
                    <img className='w-8 mx-2' src={logo} alt="" />
                  </div>
                </div>
                
                {/* <div className=' my-2'>
                  <img className='w-8 h-8 mx-2' src={logo} alt="Company Logo" />
                  <h4 className='blue-head text-xs'><Link to={logo}>{logo}</Link></h4>
                </div>

                <hr className="my-2 border-blue-gray-50" /> */}

                <div className=''>
                  { formFields.company
                  ?<Button className='myBtn float-right' type='button' onClick={handleUpdateCompany}>&nbsp;&nbsp;<FaRegSave size='18' className='float-left'/>&nbsp;&nbsp;<span>Update Company Details</span>&nbsp;&nbsp;</Button>
                  :<Button className='myBtn float-right' type='button' onClick={()=>updateHomepage("Company details updated", 4)}>&nbsp;&nbsp;<BsCheckCircle size='18' className='float-left'/>&nbsp;&nbsp;<span>Save Company Details</span>&nbsp;&nbsp;</Button>
                  }
                </div>
              </div>
            </form>

          </AccordionBody>
        </Accordion>
      </div>
    </div>

    {/* <Page1Home /> */}
    </>
  )
}

export default PagesEdit