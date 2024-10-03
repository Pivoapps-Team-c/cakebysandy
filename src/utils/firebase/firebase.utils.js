
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getAuth, createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, signOut, onAuthStateChanged, 
    signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail  
} from "firebase/auth";
import { Toaster, toast } from 'sonner'
import { doc, getDoc , setDoc, getFirestore, collection, where, orderBy, addDoc, getDocs, query, updateDoc, deleteDoc, startAt, endAt } from "firebase/firestore";


// Firebase configuration

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCllYi9OuOeisMJTBJdd9xgjkig0bWFXTY",
  authDomain: "cakebysandy-a4e24.firebaseapp.com",
  projectId: "cakebysandy-a4e24",
  storageBucket: "cakebysandy-a4e24.appspot.com",
  messagingSenderId: "923578592034",
  appId: "1:923578592034:web:5d1f442d407edb1d3d537b"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const imageDb = getStorage(firebaseApp);


export const auth = getAuth();
export const db = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const logGoogleUser = async () => {
    try {
      await signInWithGooglePopup();
    } catch (error) {
      switch (error.code) {
        case ('auth/popup-closed-by-user'):
            infoToast('Login window closed..!');
          break;
      
        default:
            infoToast('An error occured..!')
            console.log('An error occured: '+error.code);
          break;
      }
    }
    // const userDocRef = await createUserDocumentFromAuth();
    // console.log(user);
}

export const createAuth = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);  
}

export const createUserDocumentFromAuth = async (userAuth, additionalinfo = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    // console.log('userDocRef: ', userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    // console.log('userSnapshot: ', userSnapshot);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        // const { email } = userAuth;
        const createdAt = new Date();
        const uid = userAuth.uid;
        const status = 'user';
        const del = 'no';

      try {
        await setDoc(userDocRef, {
          uid, displayName, email, status, del, createdAt, ...additionalinfo
        });
      } catch (error) {
        console.log('An error occured', error.message);
      }
    }
    return await searchUserDoc(userAuth.email)
    return userSnapshot;
}

export const signInAuthWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);  
}

export const signOutUser = async () => await signOut(auth);
export const resetPassword = (email) => sendPasswordResetEmail(auth, email);
export const onAuthStateChangeListener = (callback) => onAuthStateChanged(auth, callback);


export const apiUrl = () => {
    const url = 'http://127.0.0.1:8000/api';
    // const url = 'https://cakebysandydb.cakebysandy.com/api';
    return url;
};





// Inquiry

export const createInquiryDoc = async (docToAdd) => {
    const refValue = collection(db, 'inquiries');
    try {
        await addDoc(refValue, docToAdd);
    } catch (error) {
        console.log('Error occoured at Inquiry: ', error.message);
    }
    
}

export const updateInquiryDoc = async (inqDoc) => {
    const upRefValue = doc(db, 'inquiries', inqDoc.id);
    try {
        await updateDoc(upRefValue, inqDoc);
    } catch (error) {
        console.log('Error occoured at Inquiry: ', error.message);
    }
}

export const getInquiryDocs = async () => {
    const docsReceiver = [];
    const querySnapshot = await getDocs(query(collection(db, 'inquiries'), orderBy("created_at", "desc")));

    const purMap = () => querySnapshot.forEach((doc) => {
        docsReceiver.push({...doc.data(), id: doc.id});
    });
    purMap();
    return docsReceiver;
}


// Clients

export const createOrderDoc = async (docToAdd) => {
    const refValue = collection(db, 'orders');
    try {
        await addDoc(refValue, docToAdd);
    } catch (error) {
        console.log('Error occoured at Orders: ', error.message);
    }
    
}

export const getOrderDocs = async () => {
    const docsReceiver = [];
    const querySnapshot = await getDocs(query(collection(db, 'orders'), orderBy("created_at", "desc")));

    const purMap = () => querySnapshot.forEach((doc) => {
        docsReceiver.push({...doc.data(), id: doc.id});
    });
    purMap();
    return docsReceiver;
}

export const updateOrderDoc = async (client) => {
    const upRefValue = doc(db, 'orders', client.id);
    try {
        await updateDoc(upRefValue, client);
    } catch (error) {
        console.log('Error occoured at Orders: ', error.message);
    }
}


// Pages

export const createPagesDoc = async (docToAdd) => {
    const refValue = collection(db, 'pages');
    const allPages = await delAllPages();

    if (allPages) {
        allPages['del'] = 'yes';
        updatePagesDoc(allPages);
        // console.log('Been through here..! ', allPages)
    }

    try {
        await addDoc(refValue, docToAdd);
    } catch (error) {
        console.log('Error occoured at Pages: ', error.message);
    }
    
}

export const getCurrentPage = async () => {
    const found = [];
    const searchRef = collection(db, "pages");

    const findOtp = await getDocs(query(searchRef, where("del", "==", "no")));
    const mapOtp = () => findOtp.forEach((doc) => {
        found.push({...doc.data(), id: doc.id});
    });
    mapOtp();
    return found[0];
}

export const getPagesDocs = async () => {
    const docsReceiver = [];
    const querySnapshot = await getDocs(query(collection(db, 'pages'), orderBy("created_at", "desc")));

    const purMap = () => querySnapshot.forEach((doc) => {
        docsReceiver.push({...doc.data(), id: doc.id});
    });
    purMap();
    return docsReceiver;
}

export const updatePagesDoc = async (page) => {
    const upRefValue = doc(db, 'pages', page.id);
    try {
        await updateDoc(upRefValue, page);
    } catch (error) {
        console.log('Error occoured at Pages: ', error.message);
    }
}

export const delAllPages = async (search) => {
    // const searchRef = await getDocs(query(collection(db, 'otpgen').where("otp", "==", otp)));

    const found = [];
    const searchRef = collection(db, "pages");

    const findOtp = await getDocs(query(searchRef, where("del", "==", "no")));
    const mapOtp = () => findOtp.forEach((doc) => {
        found.push({...doc.data(), id: doc.id});
    });
    mapOtp();
    return found[0];
}





// Generate OTP

export const OTPGen = async (limit) => {
    const otpRef = collection(db, 'otpgen');

    for (let i = 0; i < limit; i++) {
        var otpp = 'A'+Math.random()*107000;
        // console.log('OTPGen - '+otpp.substring(0, 5));
        console.log(i+' - '+otpp.substring(0, 5));
        try {
            await addDoc(otpRef, { otp: otpp.substring(0, 5), status: 'no'}).then(
                // window.location.reload()
            );
        } catch (error) {
            infoToast('Internet Disconnected');
            console.log('Error occoured: ', error.message);
        }
        
    }
    
}

export const searchOtp = async (otp) => {
    // const otpRef = await getDocs(query(collection(db, 'otpgen').where("otp", "==", otp)));

    const found = [];
    const otpRef = collection(db, "otpgen");

    const findOtp = await getDocs(query(otpRef, where("otp", "==", otp)));
    const mapOtp = () => findOtp.forEach((doc) => {
        found.push({...doc.data(), id: doc.id});
    });
    mapOtp();
    return found[0];
}

export const updateOTPDoc = async (otp) => {
    const upRefValue = doc(db, 'otpgen', otp.id);
    try {
        await updateDoc(upRefValue, otp);
    } catch (error) {
        console.log('Error occoured at OTP: ', error.message);
    }
}



// Users

export const searchUserDoc = async (email) => {
    const found = [];
    const otpRef = collection(db, "users");

    const findOtp = await getDocs(query(otpRef, where("email", "==", email)));
    const mapOtp = () => findOtp.forEach((doc) => {
        found.push({...doc.data()});
    });
    mapOtp();
    // console.log(found[0]);
    return found[0];
}

export const getUsersDocuments = async () => {
    const usersReceiver = [];
    const querySnapshot = await getDocs(query(collection(db, 'users'), orderBy("createdAt", "desc")));

    const usersMap = () => querySnapshot.forEach((doc) => {
        usersReceiver.push({...doc.data()});
    });
    usersMap();
    // console.log(usersReceiver);
    return usersReceiver;
}

export const updateUserDoc = async (user) => {
    const upRefValue = doc(db, 'users', user.uid);
    try {
        await updateDoc(upRefValue, user).then(
            successToast(user.displayName+"'s record temporarily deleted")
        )
    } catch (error) {
        console.log('Error occoured at sales: ', error.message);
    }
}





// Toasts

export const successToast = (message) => {
  toast.success(message, {
    position: 'top-left',
    duration: '5000'
  })
}

export const errorToast = (message) => {
  toast.error(message, {
    position: 'top-left',
    duration: '5000'
  })
}

export const infoToast = (message) => {
  toast.info(message, {
    position: 'top-left',
    duration: '5000'
  })
}