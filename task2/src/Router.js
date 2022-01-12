import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Login ,Data} from "./component";

const Router =()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Data" element={<Data/>}/>
            </Routes>
        </BrowserRouter>
        
    );
}
export default Router;