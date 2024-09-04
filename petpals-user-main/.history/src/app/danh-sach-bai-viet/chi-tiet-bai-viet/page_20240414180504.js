import React from "react";
import "./style.scss";

export default function page() {
  return (
    <main>
      <div className="breadcrumb">
        <img src="/icon/ic_baseline-home.svg" alt="" />
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Danh sách bài viết</p>
        <img src="/icon/iconamoon_arrow-right-2.svg" alt="" />
        <p>Chi tiết bài viết</p>
      </div>
      <div className="article-section">
        <div className="article-section-left">
          <h1 className="article-title">
            Bật mí cho bạn cách chăm sóc mèo con chu đáo nhất
          </h1>
          <div className="article-author-time">
            <div className="article-item">
              <img src="/icon/ph_user.svg" alt="" />
              <p>Tác giả: Bùi Quang Trưởng</p>
            </div>
            <div className="article-item">
              <img src="/icon/clarity_date-line.svg" alt="" />
              <p>11/05/2024</p>
            </div>
          </div>
          <div className="menu">
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <img src="/icon/hamberger.svg" alt="" style={{ width: "14px" }} />
              <p style={{ fontSize: "16px", fontWeight: "500" }}>
                MỤC LỤC BÀI VIẾT
              </p>
            </div>
            <p style={{ fontWeight: "500", margin: "20px 0" }}>
              Cách chăm sóc mèo con chu đáo nhất cho người nuôi
            </p>
            <ul style={{ listStyle: "inside" }}>
              <li>
                <a href="#">Giữ ấm cho mèo con</a>
              </li>
              <li>
                <a href="#">Xây dựng chế độ dinh dưỡng phù hợp</a>
              </li>
              <li>
                <a href="#">Cho mèo con uống sữa như thế nào ?</a>
              </li>
              <li>
                <a href="#">Mèo con khi cai sữa cần chăm sóc như thế nào ?</a>
              </li>
              <li>
                <a href="#">Cách vệ sinh mèo con sao cho đúng</a>
              </li>
              <li>
                <a href="#">Tắm cho mèo con</a>
              </li>
              <li>
                <a href="#">Cho mèo con làm quen người</a>
              </li>
            </ul>
          </div>
          <div className="content">
            <h2>Cách chăm sóc mèo con chu đáo nhất</h2>
            <h3>Giữ ấm mèo con</h3>
            <p>
              Đặc biệt với những mèo con ở giai đoạn dưới 6 tháng tuổi, người
              nuôi cần phải đặc biệt chú ý giữ ấm cho mèo. Để thân nhiệt của mèo
              không bị hạ đột ngột, bạn nên dùng nước ấm hay túi chườm nóng để
              đặt bên cạnh nơi mèo con nằm. 
            </p>
            <img src="/img/article-detail/img-1.png" alt="" />
            <p>
              Thế nhưng nhiệt độ nơi mèo con nằm cũng không được quá nóng bức
              hay là quá lạnh. Bạn nên duy trì mức nhiệt độ là 38 đến 39 độ C
              trong khoảng thời gian mèo đạt 4 đến 6 tuần tuổi. 
            </p>
            <p>
              Khi mèo con đủ 4 tuần tuổi, bạn có thể cho chúng ở những nơi mát
              mẻ, tự chúng tìm nơi ấm áp để nằm. Bạn hoàn toàn có thể ghép nhiều
              mèo con ở với cùng nhau để chúng tự sưởi ấm cho nhau. 
            </p>
            <p>
              Còn nếu bạn giữ ấm cho chúng ở trong lồng thì nên lót khăn dưới
              đáy và quây vải xung quanh để tránh bị gió lùa. 
            </p>
            <h2>Xây dựng chế độ dinh dưỡng phù hợp</h2>
            <p>
              Với việc có được chế độ dinh dưỡng phù hợp, mèo con sẽ được phát
              triển khỏe mạnh, tăng cân nhanh. Bạn nên cân mèo con thường xuyên
              để biết được cân nặng của chúng, từ đó sắp xếp lượng thức ăn mỗi
              bữa sao cho phù hợp nhất. 
            </p>
            <p>
              Còn với những bé mèo con mới đẻ, do đã quen ngậm vú mẹ nên mỗi
              lần cho mèo con uống sữa thì bạn chỉ nên cho uống một lượng sữa
              nhỏ, sẽ phù hợp với hệ thống đường tiêu hóa của chúng. Nếu mèo
              chậm lớn thì nên tăng lượng sữa cho mỗi lần uống lên. 
            </p>
            <img src="/img/article-detail/img-1.png" alt="" />
            <h2>Mèo con khi cai sữa cần chăm sóc như nào?</h2>
            <p>
              Khi mèo con bắt đầu cắn núm vú mạnh hơn, chứng tỏ bạn đã có thể
              cai sữa cho chúng được rồi đó. Thế nhưng thời gian đầu cai, bạn
              vẫn nên cho mèo con bú bình để đảm bảo chúng được cung cấp đủ
              lượng dinh dưỡng cần thiết cho việc phát triển.
            </p>
            <p>
              Tập cho mèo con cai sữa bằng cách cho chúng liếm thìa hoặc là ngón
              tay, giúp dễ dàng hơn trong quá trình cho mèo ăn bằng thìa. 
            </p>
            <p>
              Bạn nên tập cho chúng ăn thức ăn khô hoặc cháo, và khi chúng đã
              quen với loại thức ăn này thì giảm lượng sữa lại rồi cai sữa hoàn
              toàn cho chúng.
            </p>
            <img src="/img/article-detail/img-1.png" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
}
