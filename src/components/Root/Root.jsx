import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className="text-center mt-20">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;