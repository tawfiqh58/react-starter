import React, { useContext, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Sidebar from './Sidebar';
import Header from './Header';
import Main from './Main';
import { SidebarContext } from '../context/SidebarContext';

function Layout() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  let location = useLocation();

  useEffect(() => {
    closeSidebar();
  }, [location]);

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
        isSidebarOpen && 'overflow-hidden'
      }`}
    >
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        <Header />
        <Main>
          <Outlet />
        </Main>
      </div>
    </div>
  );
}

export default Layout;
