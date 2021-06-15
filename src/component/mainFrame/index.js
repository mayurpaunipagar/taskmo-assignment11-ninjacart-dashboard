import "./style.css";
import SideBarContent from "../sidebarContent";
import QcDetails from "./../qcDetails"
export default function MainFrame() {
  return (
    <>
      <div className="main-wrapper">
        <div className="sidebar my-sidebar" id="sidebar">
          <SideBarContent />
        </div>
        <div class="page-wrapper my-wrapper">
          
              <QcDetails/>
              {/* <div class="row">
                <div class="col-sm-12">
                  <h3 class="page-title">Blank Page</h3>
                  <ul class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="index.html">Dashboard</a>
                    </li>
                    <li class="breadcrumb-item active">Blank Page</li>
                  </ul>
                </div>
              </div> */}
            </div>
          {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
}
