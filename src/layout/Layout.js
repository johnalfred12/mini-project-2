import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";

const Layout = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <Page>
                <Outlet />
            </Page>
        </>
    )
};

export default Layout;