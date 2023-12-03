import { Outlet } from "react-router-dom";

const Cat = () => {
    return (
        <div>
           <h1 className=" ">Products</h1> 
            <Outlet></Outlet>
        </div>
    );
}

export default Cat;
