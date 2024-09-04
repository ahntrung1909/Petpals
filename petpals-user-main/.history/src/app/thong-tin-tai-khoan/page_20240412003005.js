import "./style.scss";
import React from "react";

export default function page() {
  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Thông tin tài khoản</p>
      </div>
      <section className="information-section">
        <div className="section-left">
          <div className="user">
            <img src="/img/user_avatar" alt="" />
          </div>
        </div>
        <div className="section-right"></div>
      </section>
    </main>
  );
}
