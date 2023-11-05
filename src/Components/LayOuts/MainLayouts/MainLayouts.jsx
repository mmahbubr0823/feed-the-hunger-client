import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const MainLayouts = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-8 md:px-10 lg:px-12 py-2">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster></Toaster>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default MainLayouts;