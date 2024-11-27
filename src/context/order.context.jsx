import { Children, createContext, useEffect, useState } from "react";
import { createOrderDoc, createInquiryDoc, getOrderDocs, getInquiryDocs, successToast, updateOrderDoc, getCurrentPage, createPagesDoc, delAllPages, updatePagesDoc, updateInquiryDoc, createGalleryDoc, updateGalleryDoc, getGalleryDocs } from "../utils/firebase/firebase.utils";


export const OrderContext = createContext({
    inquiries: [],
    addInquiry: () => {},
    getInquiry: () => {},
    updateInquiry: () => {},
    orders: [],
    addOrder: () => {},
    getOrders: () => {},
    updateOrder: () => {},
    gallery: [],
    addToGal: () => {},
    getAllGal: () => {},
    updateGal: () => {},
    curPage: null,
    addPage: () => {},
    getCurPage: () => {},
});


export const OrderProvider = ({children}) => {
  const [ orders, setClients ] = useState([]);
  const [ inquiries, setInquiries ] = useState([]);
  const [ gallery, setGallery ] = useState([]);
  const [ curPage, setCurPage ] = useState();


  // Inquiry

  const addInquiry = async (docToAdd) => {
    await createInquiryDoc(docToAdd).then(
      // getInquiry(),
      successToast('Inquiry Submited. Our team will reach out to you in 24hrs'),
      // console.log('Inquiry Submited. Our team will reach out to you in 24hrs')
    );
  }

  const updateInquiry = async (docToAdd) => {
    await updateInquiryDoc(docToAdd).then(
      // getInquiry(),
      successToast('Reply Sent.'),
      // console.log('Inquiry Submited. Our team will reach out to you in 24hrs')
    );
  }

  const getInquiry = async () => {
    const inquiryMap = await getInquiryDocs();
    setInquiries(inquiryMap);
  }




  // Gallery

  const addToGal = async (docToAdd) => {
    await createGalleryDoc(docToAdd).then(
      // getInquiry(),
      successToast('Image(s) Upload Successful'),
      // console.log('Inquiry Submited. Our team will reach out to you in 24hrs')
    );
  }

  const updateGallery = async (docToAdd) => {
    await updateGalleryDoc(docToAdd).then(
      // getInquiry(),
      successToast('Gallery Update Successful.'),
      // console.log('Inquiry Submited. Our team will reach out to you in 24hrs')
    );
  }

  const getGallery = async () => {
    const galleryMap = await getGalleryDocs();
    setGallery(galleryMap);
  }




  // Client

  const addOrder = async (docToAdd) => {
    await createOrderDoc(docToAdd).then(
      getOrders(),
      successToast('Order successful. Our team will get back to you in less than 24 hours'),
    );
  }

  const getOrders = async () => {
    const clientMap = await getOrderDocs();
    setClients(clientMap);
    // console.log(clientMap)
  }

  const updateOrder = async (docToUpdate, msg) => {
    await updateOrderDoc(docToUpdate).then(
      getOrders(),
      successToast(msg)
    );
  }


  // Pages

  const addPage = async (docToAdd, msg) => {

    // const allPages = await delAllPages();
    // return console.log(allPages);

    // if (allPages) {
    //     allPages['del'] = 'yes';
    //     updatePagesDoc(allPages);
    //     console.log('Been through here..! ', allPages)
    // }

    await createPagesDoc(docToAdd).then(
      getCurPage(),
      successToast(msg),
    );
  }

  const getCurPage = async () => {
    const pageMap = await getCurrentPage();
    setCurPage(pageMap);
    console.log("---")
    console.log(pageMap)
    console.log("----")
  }


  useEffect(() => {
    getInquiry();
    getOrders();
    getCurPage();
    getGallery();
  }, [])




  const value = { 
    inquiries, addInquiry, updateInquiry,
    orders, addOrder, getOrders, updateOrder,
    curPage, addPage, getCurPage,
    gallery, addToGal, getGallery, updateGallery
  };
  return (<OrderContext.Provider value={value}>{children}</OrderContext.Provider>)
}