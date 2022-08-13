import React from "react"
import  Stories from "./Stories"
function Feed(){
    return(
    <div className="flex-grow h-screen pt-6 mr-4 xl:mr-40 overflow-y-auto">
    <Stories />
    </div>)
}

export default Feed;