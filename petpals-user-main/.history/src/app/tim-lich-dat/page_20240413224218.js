import React from "react";
import "./style.scss";

export default function page() {
  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Tìm lịch đặt</p>
      </div>
      <div className="section-heading">TRA CỨU LỊCH ĐẶT</div>
      <form>
        <div className="input-group">
          <label htmlFor="">Mã lịch đặt: </label>
          <input type="text" placeholder="Nhập vào mã lịch đặt..." />
        </div>
      </form>
    </main>
  );
}
