    import { DashAnchor,DashUl,DashLi } from "../component/style";

const header = () =>{
    return(
        <div>
            <DashUl>
                <DashLi><a href="./">Dashboard</a></DashLi>
                <DashLi><a href="/contact" >Contact</a></DashLi>
                <DashLi><a href= "/about" >About us</a></DashLi>
            </DashUl>

        </div>
    )
}

export default header;