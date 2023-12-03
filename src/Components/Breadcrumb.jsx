import { useLocation } from "react-router-dom";

const Breadcrumb = () => {
    const location = useLocation()

    // const fullLink = ""
  const splitted = location.pathname.split("/").filter((elem)=>{
   return elem !== ""
  })
  


    return (
        <div>
            {splitted}
        </div>
    );
}

export default Breadcrumb;
