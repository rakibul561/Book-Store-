import { Outlet } from "react-router-dom";
import Nav from "../component/Nav";


const MainLaout = () => {
    return (
        <div className="ml-20 mr-20 mt-10 space-y-8">
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