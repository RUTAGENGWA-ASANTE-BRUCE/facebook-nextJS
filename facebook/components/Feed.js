import React from "react"
import  Stories from "./Stories"
import InputBox from "./InputBox"
function Feed(){
    return(
    <div className="flex-grow h-screen pt-6 mr-4 xl:mr-40 overflow-y-auto">
    <Stories />
    <InputBox />
    </div>)
}

export default Feed;