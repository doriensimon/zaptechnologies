import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
  } from 'react-pro-sidebar';

export default function SideBar() {
    return (
        <div>
            <ProSidebar id="sidebar" collapsed={true}>
                <SidebarHeader>
                    <p>Zap</p>
                </SidebarHeader>
                <SidebarContent>
                    <Menu>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Pending Requests</MenuItem>
                        <MenuItem>Become a Charger</MenuItem>
                    </Menu>
                </SidebarContent>
            </ProSidebar>   
        </div>
    )
}
