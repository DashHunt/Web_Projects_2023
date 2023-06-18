import React from "react";
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarSubMenu,
  CDBSidebarFooter,
  CDBBadge,
  CDBContainer,
} from "cdbreact";

import { MdPets } from "react-icons/md";

const Sidebar = (props) => {
  return (
    <div className="d-flex">
      <div className='vh-100 shadow'>
        <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
          <CDBSidebarHeader>
            <div
              style={{ display: "flex", alignItems: "center", verticalAlign: 'middle' }}
            >
              <MdPets style={{height: 40, width: 40, color: 'blue'}}></MdPets>
              <h5 className="ms-3 fw-bolder mt-3">ADMIN</h5>
            </div>
          </CDBSidebarHeader>
          <CDBSidebarContent>
            <CDBSidebarMenu>
              <CDBSidebarMenuItem icon="user" iconSize="lg" textFontSize='20px' iconClassName="text-primary">Users</CDBSidebarMenuItem>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default Sidebar;
