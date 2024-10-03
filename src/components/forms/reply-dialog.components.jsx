import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { FaReply } from "react-icons/fa6";
import useAuth, { useOrder } from "../../hooks/useAuth";
import axios from "axios";
import { apiUrl } from "../../utils/firebase/firebase.utils";
 
const ReplyDialog = ({ inquiry, onStatusChange }) => {

  const { currentUser } = useAuth()
  const { updateInquiry } = useOrder()
//   const [inquiry, setInquiry] = useState(inquiry);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const updateReply = async (event) => {
    event.preventDefault()
    inquiry['status'] = 'yes'
    inquiry['inq_response'] = event.target.reply_txt.value

    const fwdMail = await axios.put(apiUrl()+'/sendmail/nomail', inquiry)
    if (fwdMail) {
        console.log('Result: ', fwdMail.data.result)
    } else {
        console.log('Mail Error: ', fwdMail.message)
        return
    }
        // onStatusChange(inquiry)
        // handleOpen()

    await updateInquiry(inquiry).then(
        console.log(event.target.reply_txt.value),
        onStatusChange(inquiry),
        handleOpen(),
    )

  }

    // useEffect(()=>{
    //     setInquiry(inquiry)
    // }, [open])
 
  return (
    <>
        {/* <Button onClick={handleOpen}>Message Dialog</Button> */}
        <Button className='reply-btn shadow-none hover:shadow-none text-xs capitalize font-normal' onClick={handleOpen}><FaReply className='float-left mt-0.5' />&nbsp;&nbsp;Reply</Button>
        <Dialog open={open} size="xs" handler={handleOpen}>
            <div className="flex items-center justify-between">
            <DialogHeader className="flex flex-col items-start">
                {" "}
                <Typography className="mb-1" variant="h5">
                Reply to @{inquiry.name}
                </Typography>
            </DialogHeader>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
                onClick={handleOpen}
            >
                <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
                />
            </svg>
            </div>
            <form onSubmit={updateReply}>
                <DialogBody>
                    <div className="grid gap-6">
                        <Input label="From Admin" value={currentUser ? currentUser.displayName :null} readOnly/>
                        <Textarea name="reply_txt" label="Message" required/>
                    </div>
                </DialogBody>
                <DialogFooter className="space-x-2">
                <Button variant="text" color="gray" onClick={handleOpen}>
                    cancel
                </Button>
                <Button type="submit" variant="gradient" color="gray">
                    send message
                </Button>
                </DialogFooter>
            </form>
        </Dialog>
    </>
  );
}

export default ReplyDialog