import React from "react";
import "./style.scss";

export default function page() {
  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Dịch vụ</p>
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Phẫu thuật ngoại khoa</p>
      </div>
      <section className="service-section">
        <div className="section-heading">DỊCH VỤ PHẪU THUẬT NGOẠI KHOA</div>
        <div className="introduce-service">
          <div className="service-img">
            <img src="/img/service-img/phau-thuat-ngoai-khoa.jpg" alt="" />
          </div>
          <div className="information-table">
            <div className="information-heading">
              <h2>THÔNG TIN LIÊN HỆ</h2>
              <p>Liên hệ với chúng tôi để được hỗ trợ một cách sớm nhất nhé!</p>
            </div>
            <div className="table">
              <div className="row">
                <div className="heading">Địa Chỉ:</div>
                <div className="content">
                  Số 96 Định Công, Hoàng Mai, Hà Nội
                </div>
              </div>
              <div className="row">
                <div className="heading">Hotline:</div>
                <div className="content">0977354956</div>
              </div>
              <div className="row">
                <div className="heading">Email:</div>
                <div className="content">petpals@gmail.com</div>
              </div>
              <div className="row">
                <div className="heading">Website:</div>
                <div className="content">www.petpals.com</div>
              </div>
              <div className="row">
                <div className="heading">Fanpage:</div>
                <div className="content">fb.com/Petpals</div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-content">
          <p>
            Tại Petpals, chúng tôi hiểu rằng các vấn đề phẫu thuật đòi hỏi sự
            chuyên môn và kỹ năng cao. Với đội ngũ bác sĩ thú y giàu kinh nghiệm
            và trang bị hiện đại, chúng tôi tự hào cung cấp dịch vụ phẫu thuật
            chuyên khoa đa dạng để giúp thú cưng của bạn vượt qua các vấn đề sức
            khỏe.
          </p>
          <p>
            <b>Dịch vụ phẫu thuật của chúng tôi bao gồm:</b>
          </p>

          <div>
            <ul>
              <li>
                Chó 2 tháng tuổi: Tiêm vaccine tổng hợp 5 bệnh như Bệnh Care,
                Bệnh  Parvo, Bệnh viêm gan truyền nhiễm, Bệnh ho cũi chó và Bệnh
                phó cúm.
              </li>
              <li>
                Sau mũi 1 21 ngày: Tiêm mũi 2 vaccine tổng hợp 7 bệnh, bao gồm
                cả Bệnh Leptospirosis và Bệnh Corona.
              </li>
              <li>
                Sau mũi 2 28 ngày: Tiêm mũi 3 vaccine tổng hợp 7 bệnh để đảm bảo
                sự bảo vệ toàn diện cho chó yêu quý của bạn.
              </li>
              <li>
                Chó 3 tháng tuổi trở lên: Tiêm 1 mũi vaccine phòng bệnh dại.
              </li>
              <li>
                Chó đã chích ngừa đầy đủ cũng cần tiêm nhắc lại định kỳ hàng
                năm: 1 mũi vaccine tổng hợp 7 bệnh và 1 mũi vaccine phòng bệnh
                dại.
              </li>
            </ul>
          </div>

          <p>
            Tại Petpals, chúng tôi đặt sự an toàn và chăm sóc tối đa cho thú
            cưng lên hàng đầu. Với đội ngũ bác sĩ thú y giàu kinh nghiệm và nhân
            viên chăm sóc đáng tin cậy, chúng tôi đảm bảo quá trình phẫu thuật
            được tiến hành một cách cẩn thận và chuyên nghiệp. Chúng tôi nhận
            thức rằng đôi khi thú cưng của bạn cần đến các phẫu thuật chuyên
            khoa để khắc phục vấn đề sức khỏe. Vì vậy, bạn có thể yên tâm, tại
            Petpals, chúng tôi cam kết thú cưng của bạn sẽ được phẫu thuật trong
            những trường hợp cần thiết, với sự chuyên nghiệp và tận tâm.
          </p>
        </div>
      </section>
    </main>
  );
}
