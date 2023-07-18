import React, { useContext } from 'react';

import SidebarContent from './Content';

import { SidebarContext } from '../../context/SidebarContext';

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);

  return (
    <>
      {/* Desktop */}
      <aside className="z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block">
        <SidebarContent />
      </aside>

      {/* Mobile */}
      {isSidebarOpen && (
        <aside className="fixed inset-y-0 z-50 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 lg:hidden">
          <SidebarContent />
        </aside>
      )}
    </>
  );
}

export default Sidebar;
