import axios from "axios";
import RichTextEditor from "./RichTextEditor";
import { useEffect, useState } from "react";

const Form = ({ onClose,id }:{onClose: () => void,id?:string}) => {
    const [article,setArticle] = useState("");
    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        const res:any = await axios.put(`http://localhost:3000/hero-stones/${id}`,{
            articleName: "தச்சன் பெயர் தாங்கிய வட்டெழுத்து நடுகல்",
            authorName: "ராமசாமி குமாரவேல்",
            article: article
        })
    }
    useEffect(()=>{
        console.log("Article content:", article);
    },[article])
    return(
        <>
        <div className="fixed inset-0 z-999 bg-black/30 flex w-screen h-screen items-center justify-center">
            <div className="bg-white p-4 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Form Title</h2>
                <RichTextEditor
                onChange={(value)=>{setArticle(value)}}
                />
                <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Close</button>
                <button onClick={handleSubmit} className="mt-4 ml-2 px-4 py-2 bg-green-500 text-white rounded">Submit</button>
                </div>
        </div>
        </>
    )
}

export default Form;