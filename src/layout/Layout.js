import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import './Layout.css';

const Layout = () => {
    return (
        <>
            <Sidebar />
            <section id="content">
                <Navbar />
                <main>
                    <Outlet />
                </main>
            </section>
        </>
    )
};

export default Layout;