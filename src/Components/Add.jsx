import { useEffect,useState } from "react";

const Add = () => {

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [post, setpost] = useState(false);

    useEffect(()=>{
        
        let inpObj = {
         title:title,
         description:description
         }
        fetch("http://localhost:8000/products",{
            method:"POST",
            body:JSON.stringify( inpObj),
            headers:{
                "Content-Type":"application/json"
            }
        })
    },[post])
    return (
        <div>

<input type="text" placeholder="title" onChange={(e)=> setTitle( e.target.value)}/>
<input type="text" name="" id="" placeholder="description" onChange={(e)=> setDescription(e.target.value)}/>
<button onClick={()=> setpost((prev)=> !prev)}>post</button>
        </div>
    );
}

export default Add;
