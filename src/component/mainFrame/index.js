import "./style.css";
import SideBarContent from "../sidebarContent";
import QcDetails from "./../qcDetails";
export default function MainFrame({
  blur,
  setBlur,
  setImagePreview,
  setQcDoneMessage,
}) {
  return (
    <>
      <div className="main-wrapper">
        <div className="sidebar my-sidebar" id="sidebar">
          <SideBarContent />
        </div>
        <div className={`page-wrapper my-wrapper ${blur ? "myBlur" : ""}`}>
          <QcDetails
            blur={blur}
            setBlur={setBlur}
            setImagePreview={setImagePreview}
            setQcDoneMessage={setQcDoneMessage}
          />
        </div>
      </div>
    </>
  );
}
