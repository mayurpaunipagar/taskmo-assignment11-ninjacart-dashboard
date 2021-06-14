import "./style.css";
import SideBarContent from "../sidebarContent";
export default function MainFrame() {
  return (
    <>
      <div className="main-wrapper">
        <div className="sidebar my-sidebar" id="sidebar" >
            <SideBarContent/>
        </div>
      </div>
    </>
  );
}
