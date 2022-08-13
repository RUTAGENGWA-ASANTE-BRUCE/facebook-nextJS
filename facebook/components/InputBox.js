import React,{useRef} from "react"
import {useSession} from "next-auth/react"
import Image from "next/Image"
import {
    VideoCameraIcon,
    CameraIcon,
    EmojiHappyIcon
} from "@heroicons/react/solid"
import {addPost} from "../firebase"
function InputBox(){
    const {data:session}=useSession()
    const sendPost=(e)=>{
        e.preventDefault();
        if(!inputRef.current.value) return;
        const post={
            message:inputRef.current.value,
            name:session.user.name,
            email:session.user.email,
            // timeStamp:firebase.firestore.FieldValue.serverTimestamp()
        }
        
        addPost(post);
        console.log("post",post)
        inputRef.current.value="";
    }
    const inputRef=useRef(null)
    return(
        <div className="bg-white p-2 rounded-2xl p-2 shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-center">
                <Image src={session.user.image} className="rounded-full" width={40} height={40} layout="fixed" />
                <form className="flex flex-1" onSubmit={sendPost}>
                    <input type="text" ref={inputRef} placeholder={`What's on your mind, ${session.user.name}?`}
                    className="rounded-full h-12 bg-gray-100 px-5 outline-none"/>
                </form>
                <button hidden type="submit">Submit</button>
            </div>
            <div className="flex justify-between p-3 border-t">
                <div className="inputIcon">
                    <VideoCameraIcon className="text-red-500 h-7"/>
                    <p className='text-xs  sm:text-sm xl:text-base'>Live Video</p>
                </div>
                <div className="inputIcon">
                    <CameraIcon className="text-green-400 h-7"/>
                    <p className='text-xs  sm:text-sm xl:text-base'>Photo/Video</p>
                </div>
                <div className="inputIcon">
                    <EmojiHappyIcon className="text-yellow-300 h-7"/>
                    <p className='text-xs  sm:text-sm xl:text-base'>Feeling/Activity</p>
                </div>
            </div>
        </div>
    )
}

export default InputBox;