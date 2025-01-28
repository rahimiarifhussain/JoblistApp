import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const Dashbord = () => {
    return<>
        <Navbar />
        <Outlet />
        <ToastContainer />
        {/* <Footer /> */}
    </>
}

export default Dashbord;