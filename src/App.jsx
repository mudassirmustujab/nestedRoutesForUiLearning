import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./App.css";
import Main from "./Components/Main";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Categories from "./Components/Categories";
import Add from "./Components/Add";
import NotFound from "./NotFound";
import ViewCategory from "./Components/ViewCategory";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main></Main>}>
        
        <Route index element={<Home></Home>}></Route>
        
        <Route path="categories" element={<Categories></Categories>}>
        <Route index element={<ViewCategory></ViewCategory>} ></Route>
            <Route path="add" element={<Add></Add>} ></Route>
        </Route>

        <Route path="signup" element={<Signup></Signup>} ></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
