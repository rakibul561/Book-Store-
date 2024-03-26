import { Outlet } from "react-router-dom";
import Nav from "../component/Nav";


const MainLaout = () => {
    return (
        <div>
            <div className="h-16">
                <Nav></Nav>
            </div>
                 <div className='min-h-[calc(100vh-166px)]'>
                 <Outlet></Outlet>
                 </div>
        </div>
    );
};

export default MainLaout;