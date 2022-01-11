import { DashHead } from "../component/style";
import {MyButton} from "../component/index";
import { Header } from "../module/index";
import { Counter ,Timer} from "../component/index";

const Dashboard = () =>{
    return(
        <>
        <Header/>
        <DashHead>Welcome to dashboards</DashHead>
        <MyButton name=" My Button" class="variant" />
        <Counter/>
        <Timer/>
        </>
        
    )
}

export default Dashboard;