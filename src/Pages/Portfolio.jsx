import { Link } from "react-router-dom";
import Defaultlayout from "../Layout/Defaultlayout";
export default function Portfolio() {

    return (
        <Defaultlayout>
            <div>
            <h1> Portfolio Page</h1>
            <div style={{display: "flex", width:"100%", gap:"20px"}}>
            <Link to={"/"} className='nav Link'>Home</Link>

                <Link to={"/Aboutus"} className='nav Link ' >AboutUs page</Link>
            
            <Link to={"/Partners"} className='nav Link'>Partners page</Link>
            <Link to={"/Portfolio"} className='nav Link'>Portfolio page</Link>
            <Link to={"/Help"} className='nav Link'>Help page</Link>
            <Link to={"/FAQs"} className='nav Link'>FAQs page</Link>
        </div>


        </div>
        </Defaultlayout>
    )
}
