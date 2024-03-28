import { Outlet } from "react-router-dom";
import Header from "../components/common/Header.jsx/Header";
import Footer from "../components/common/Footer/Footer";

function MainLayout(){
    return (<div>
        <Header/>
            <Outlet/>
        <Footer />
        </div>)
} 

export default MainLayout;