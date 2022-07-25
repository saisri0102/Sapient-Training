import React from 'react';
import withStyles from "../../withstyle";
import  Sidebarlinks  from '../../molecules/Sidebarlink/Sidebarlink';
import {SidebarStyle} from './Sidebar.style'
import Sidenav from '../../molecules/Sidenav/Sidenav';

const Sidebar = ({className}) => {
    return (
  
            <aside className={`${className}`}>
                <Sidenav heading="Browse">
                    <Sidebarlinks type="fas faHome" text="Dashboard" className="active" />
                    <Sidebarlinks type="fas faFileAlt" text="Audits"/>
                    <Sidebarlinks type="fas faSignal" text="Reports"/>
                    <Sidebarlinks type="fas faSignal" text="Tasks"/>
                    <Sidebarlinks type="fas faSignal" text="Connections"/>
                    <Sidebarlinks type="fas faSignal" text="Activities"/>
                </Sidenav>
                <Sidenav heading="More">
                    <Sidebarlinks type="fas faFileAlt" text="Help Center"/>
                    <Sidebarlinks type="fas faSignal" text="Cookies"/>
                    <Sidebarlinks type="fas faSignal" text="About Us"/>
                    <Sidebarlinks type="fas faSignal" text="Contact Us"/>
                    <Sidebarlinks type="fas faSignal" text="Privacy Policy"/>
                    <Sidebarlinks type="fas faSignal" text="Terms &amp; Conditions"/>
                </Sidenav>
            </aside>
      
    );
}

export default withStyles(Sidebar, SidebarStyle);
export {Sidebar as SidebarNotStyled}