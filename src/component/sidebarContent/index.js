import { useHistory } from "react-router";
import "./style.css";
export default function SideBarContent() {
  const history = useHistory();
  return (
    <>
      <div className={`sidebarHome`}>
        <img
          src={window.location.origin + "/taskmoLogo.svg"}
          alt={"logo"}
          className="logoImg"
          onClick={()=>{
            history.push("/main/redo");
          }}
        />
        <div className="QCText">Quality Check</div>
        <div className="dbText">Dashboard</div>
        <div
          className="homeText homeHover"
          onClick={() => {
            history.push("/dashboard");
          }}
        >
          Home
        </div>
      </div>
    </>
  );
}
