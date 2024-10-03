import { Children, createContext, useEffect, useState } from "react";
import { createOrderDoc, createInquiryDoc, getOrderDocs, getInquiryDocs, successToast, updateOrderDoc, getCurrentPage, createPagesDoc, delAllPages, updatePagesDoc, updateInquiryDoc } from "../utils/firebase/firebase.utils";


export const OrderContext = createContext({
    inquiries: [],
    addInquiry: () => {},
    getInquiry: () => {},
    updateInquiry: () => {},
    orders: [],
    addOrder: () => {},
    getOrders: () => {},
    updateOrder: () => {},
    curPage: null,
    addPage: () => {},
    getCurPage: () => {},
});


export const OrderProvider = ({children}) => {
  const [ orders, setClients ] = useState([]);
  const [ inquiries, setInquiries ] = useState([]);
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
    // console.log(pageMap)
  }


  useEffect(() => {
    getInquiry();
    getOrders();
    getCurPage();
  }, [])




  const value = { 
    inquiries, addInquiry, updateInquiry,
    orders, addOrder, getOrders, updateOrder,
    curPage, addPage, getCurPage
  };
  return (<OrderContext.Provider value={value}>{children}</OrderContext.Provider>)
}