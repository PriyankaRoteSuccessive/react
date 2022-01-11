import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Dashboard,AboutUs } from "./page/index";

const Router = (props) =>{
    console.log("my data is",props.persondata)
    return(
        <>
        <BrowserRouter>
       
        <Routes>
            <Route path="" element={<Dashboard/>} />
        </Routes>
        <Routes>
            <Route path="/about"  element={<AboutUs data={props.persondata} />} />
        </Routes>
        </BrowserRouter>

        </>
        
    )
}

export default Router;
