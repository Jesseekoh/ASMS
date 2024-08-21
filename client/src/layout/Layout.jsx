import { Outlet } from 'react-router-dom';
import NavbarWithSideBar from '../components/Navbar/NavbarWithSideBar';
import { Suspense } from 'react';

const Layout = () => {
    return (
        <>
            <NavbarWithSideBar />
            <main className="pl-52 mr-10 mt-24">
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
};

export default Layout;
