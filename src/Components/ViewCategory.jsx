import { useEffect, useState } from "react";

const ViewCategory = () => {
  const [data, setData] = useState("default value");
  const [isTrue, setisTrue] = useState(false);

  useEffect(() => {

    const incomingData =async ()=>{

       const fetch = await fetch("http://localhost:8000/products")
      const datas =   fetch.then((res) => {
            return res.json();
        })

        datas.then((data) => {setData(data)
        setisTrue(true)});
    }
    incomingData()
  }, []);

  console.log("This is data " + data);
  return (
    <div>
      Inside view Products.
      {isTrue && data.map((elem) => {
        console.log("this is elelm " + elem.title);

        return <div key={elem.id}>{elem.title}</div>;
      })}
    </div>
  );
};

export default ViewCategory;
