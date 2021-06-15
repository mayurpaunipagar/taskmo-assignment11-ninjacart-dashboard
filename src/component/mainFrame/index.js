import "./style.css";
import SideBarContent from "../sidebarContent";
import QcDetails from "./../qcDetails";
export default function MainFrame({ blur, setBlur }) {
  return (
    <>
      <div className="main-wrapper">
        <div className="sidebar my-sidebar" id="sidebar">
          <SideBarContent />
        </div>
        <div class="page-wrapper my-wrapper">
          <QcDetails blur={blur} setBlur={setBlur} />
        </div>
      </div>
    </>
  );
}
