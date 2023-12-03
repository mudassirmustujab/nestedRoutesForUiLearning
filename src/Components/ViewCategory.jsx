import { useEffect, useState } from "react";

const ViewCategory = () => {
  const [data, setData] = useState();
const [isTrue, setisTrue] = useState(false);
  useEffect(() => {
    const incomingData = async () => {

      let fetchs = await fetch("http://localhost:8000/products")
      let datas = await fetchs.then((res) => {
        return res.json();
      })

      datas.then((data) => {
        setData(data);
        setisTrue(true)
      })
      .catch((err)=>{
        console.log("Inside .catch" +err);
      })
      
    };
    incomingData()
  }, [data]);

  console.log("This is data " + data);
  return (
    <>
      {isTrue && data.map((elem) => {
          console.log("this is elelm " + elem.title);
          
          return <div key={elem.id}>{elem.title}</div>;
        })}
        </>
  )
};

export default ViewCategory;
