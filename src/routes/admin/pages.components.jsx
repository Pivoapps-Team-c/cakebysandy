

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
import { BsPlusCircle } from "react-icons/bs";
import { FaCheck, FaRegCircleCheck, FaTimeline } from "react-icons/fa6";
import { FaRegTimesCircle, FaTimes, FaTimesCircle } from "react-icons/fa";
import React, { useContext, useEffect, useId, useRef, useState } from "react";
import { IoWarning } from "react-icons/io5";
import Page1Home from './page1-home.components';
import { successToast } from '../../utils/firebase/firebase.utils';
import ReactQuill from 'react-quill';
import 'quill/dist/quill.snow.css'; // Add css for snow theme
import { OrderContext } from '../../context/order.context';

const PagesEdit = () => {


  const lc = useId();
  // console.log('Started')
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
      created_at: new Date(),
      updated_at: null,
  }
  
  const { curPage, addPage, getCurPage } = useContext(OrderContext)
  const [ formFields, setFormFields ] = useState(defaultValues);
  const [termsContent, setTermsContent] = useState('');
  const [privacyContent, setPrivacyContent] = useState('');
  const quillRef = useRef(null);

  const handleTermsChange = (content) => {
    setTermsContent(content);
    console.log(content)
  };

  const handlePrivacyChange = (content) => {
    setPrivacyContent(content);
    console.log(content)
  };

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
    // await addPage(formFields, msg).then(
    //   setFormFields(curPage),
    //   // getCurPage(),
    //   setOpen(ct)
    // )
    formFields['subtitle1'] = 27;
    setFormFields([formFields])
  }

  useEffect(() => {
    if (curPage) {
      setFormFields(curPage)
    }
    console.log('curPage: ', curPage)
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
        </div>
    </div>

    {/* <Page1Home /> */}
    </>
  )
}

export default PagesEdit