import { useState,useEffect } from "react";
const UseFetchPost = (url,details) => {
 const [data, setdata] = useState();

 console.log(details,url);
 useEffect(() => {
  
 console.log("useFetchPost ran");
  
   
   fetch(url,details)
   
   .then((res)=>{
    return res
   })
   .then((data)=>{
    console.log(data);
    setdata( data) 
   })

  }, [details,url]);
  return {data};
}

export default UseFetchPost;
