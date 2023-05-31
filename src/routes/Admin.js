import React, { useState } from "react";
import { authService } from "fb_info";
import LoginForm from "components/LoginForm";
import EditPartner from "components/EditPartner";
import "css/admin.css";
import background_gray from "img/picture/background_gray.png";

const Admin = ({ userObj }) => {
  const [tab, setTab] = useState("partner");
  const onLogOutClick = () => {
    authService.signOut();
  };
  const changeTab = (tab) => setTab(tab);
  return (
    <div className="container">
      <img
        src={background_gray}
        alt="background"
        className="backgroundimg_full"
      />
      <p className="title">Admin</p>
      {userObj && (
        <div>
          <p className="adm-logout" onClick={onLogOutClick}>
            Logout
          </p>
        </div>
      )}
      {!userObj ? (
        <div className="admin-flex">
          <div className="admin-left">
            <p
              onClick={() => changeTab("partner")}
              className={tab === "partner" ? "active" : "nonactive"}
            >
              협력
            </p>
          </div>
          <div className="admin-right">
            <hr />
            {tab === "partner" && <EditPartner userObj={userObj} />}
          </div>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default Admin;
