import { Children, createContext, useEffect, useState } from "react";
import { createOrderDoc, createInquiryDoc, getOrderDocs, getInquiryDocs, successToast, updateOrderDoc } from "../utils/firebase/firebase.utils";


export const OrderContext = createContext({
    inquiries: [],
    addInquiry: () => {},
    getInquiry: () => {},
    orders: [],
    addOrder: () => {},
    getOrders: () => {},
    updateOrder: () => {},
});


export const OrderProvider = ({children}) => {
  const [ orders, setClients ] = useState([]);
  const [ inquiries, setInquiries ] = useState([]);


  // Inquiry

  const addInquiry = async (docToAdd) => {
    await createInquiryDoc(docToAdd).then(
      // getInquiry(),
      successToast('Inquiry Submited. Our team will reach out to you in 24hrs'),
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

  const updateOrder = async (docToUpdate) => {
    await updateOrderDoc(docToUpdate).then(
      getOrders(),
      successToast('Update successful')
    );
  }

  useEffect(() => {
    getInquiry();
    getOrders();
  }, [])




  const value = { 
    inquiries, addInquiry, 
    orders, addOrder, getOrders, updateOrder
  };
  return (<OrderContext.Provider value={value}>{children}</OrderContext.Provider>)
}