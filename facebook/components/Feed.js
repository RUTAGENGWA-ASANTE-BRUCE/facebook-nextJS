import React from "react"
import  Stories from "./Stories"
import InputBox from "./InputBox"
import Posts from "./Posts"
function Feed(){
    return(
    <div className="flex-grow h-screen pt-6 mr-4 xl:mr-40 overflow-y-auto">
    <Stories />
    <InputBox />
    <Posts />
    </div>)
}

export default Feed;