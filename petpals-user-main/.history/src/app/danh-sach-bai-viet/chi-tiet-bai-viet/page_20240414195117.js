import React from "react";
import "./style.scss";
import TinyArticle from "@/components/TinyArticle/TinyArticle";

const listArticle = [
  {
    img: "/img/articles/article-8.jpg",
    date: "11/09/2023",
    author: "Bùi Quang Trưởng",
    title: "Cách dạy chó đi vệ sinh đúng chỗ",
    detail:
      "Chó từ lâu đã là vật nuôi thân quan và trở thành một người bạn thân thiết trong đời sống của loài người chúng ta. Trải qua hàng ngàn năm sinh sống...",
    link: "#",
  },
  {
    img: "/img/articles/article-9.jpg",
    date: "11/09/2023",
    author: "Bùi Quang Trưởng",
    title: "Chia sẻ cho bạn 10 lệnh huấn luyện chó hiệu quả nhất ",
    detail:
      "Nếu bạn có một chú cún cưng, ngoài việc quan tâm chăm sóc về dinh dưỡng ra thì cần phải lưu tâm trong quá trình huấn luyê...",
    link: "#",
  },
  {
    img: "/img/articles/article-10.jpg",
    date: "10/08/2023",
    author: "Bùi Quang Trưởng",
    title:
      "Nguyên tắc bảo vệ sức khỏe thú cưng toàn diện SEN nào cũng cần biết",
    detail:
      "Nuôi dưỡng, chăm sóc thú cưng là việc không hề đơn giản! Nếu bạn dành rất nhiều tình yêu cho thú cưng vậy thì đừng quên ...",
    link: "#",
  },

  {
    img: "/img/articles/article-16.jpg",
    date: "10/05/2023",
    author: "Bùi Quang Trưởng",
    title: "Lý giải nguyên nhân tại sao chó bỏ ăn",
    detail:
      "Chó là vật nuôi được nhiều gia đình chọn lựa. Nó được coi như một thành viên trong nhà nên khi chó bỏ ăn, không ít gia đình lo lắng, muốn đưa chó đi...",
    link: "#",
  },
  {
    img: "/img/articles/article-18.jpg",
    date: "10/03/2023",
    author: "Bùi Quang Trưởng",
    title: "Mèo Bị Co Giật: Nguyên Nhân, Triệu Chứng và Cách Điều Trị",
    detail:
      "Mèo bị co giật không chỉ là một biểu hiện đáng lo ngại, mà còn là một dấu hiệu cảnh báo về sức khỏe thú cưng của bạn...",
    link: "#",
  },
  {
    img: "/img/articles/article-11.jpg",
    date: "06/03/2023",
    author: "Bùi Quang Trưởng",
    title: "Mèo chửa mấy tháng thì đẻ và những lưu ý khi chăm sóc chúng",
    detail:
      "Mèo là thú cưng yêu thích của nhiều người. Khi mèo mang thai, hầu hết chúng đều có thể tự sinh con mà không cần có sự can...",
    link: "#",
  },
];

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
                <a href="#title-1">Giữ ấm cho mèo con</a>
              </li>
              <li>
                <a href="#title-2">Xây dựng chế độ dinh dưỡng phù hợp</a>
              </li>
              <li>
                <a href="#title-3">Cho mèo con uống sữa như thế nào ?</a>
              </li>
              <li>
                <a href="#title-4">
                  Mèo con khi cai sữa cần chăm sóc như thế nào ?
                </a>
              </li>
              <li>
                <a href="#title-5">Cách vệ sinh mèo con sao cho đúng</a>
              </li>
              <li>
                <a href="#title-6">Tắm cho mèo con</a>
              </li>
              <li>
                <a href="#title-7">Cho mèo con làm quen người</a>
              </li>
            </ul>
          </div>
          <div className="content">
            <h2>Cách chăm sóc mèo con chu đáo nhất</h2>
            <h3 id="title-1">Giữ ấm mèo con</h3>
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
            <h2 id="title-2">Xây dựng chế độ dinh dưỡng phù hợp</h2>
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
            <img src="/img/article-detail/img-2.png" alt="" />
            <h2 id="title-3">Cho mèo con uống sữa như thế nào?</h2>
            <p>
              Khi cho mèo con uống sữa, cơ thể của chúng cần được giữ ấm nhằm
              tránh ảnh hưởng đến quá trình tiêu hóa sữa.
            </p>
            <p>
              Lượng sữa mỗi lần cho uống cũng cần phải phù hợp, không nên cho
              uống quá nhiều vì có thể bị sặc, sữa tràn vào trong phổi gây nguy
              hiểm tính mạng. Khi uống, chai sữa cũng cần được làm nóng, để
              nhiệt độ sữa khoảng 38 độ C.
            </p>
            <p>
              Tư thế uống không nên làm đó là nằm ngửa, vì khiến mèo con dễ bị
              sặc sữa. Tốt nhất là nên để chúng nằm sấp xuống, và chuẩn bị 1 tấm
              vải để lót dưới bụng cho mèo. Khi mà mèo động đậy tai thì chứng tỏ
              chúng đã no bụng rồi. 
            </p>
            <h2 id="title-3">Mèo con khi cai sữa cần chăm sóc như nào?</h2>
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
            <img src="/img/article-detail/img-3.png" alt="" />
            <h2 id="title-4">Cách vệ sinh mèo con sao cho đúng</h2>
            <p>
              Nếu mèo con ở với mẹ thì chúng sẽ được mèo mẹ vệ sinh và chăm sóc.
              Nhưng nếu bạn là người thực hiện công việc này thì chúng sẽ cần
              phải có sự giúp đỡ để đi vệ sinh. 
            </p>
            <p>
              Để kích thích mèo con đi vệ sinh, bạn nên xoa nhẹ vào bụng chúng
              hoặc bộ phận sinh dục trước và sau khi mèo ăn xong bằng một chút
              bông nhúng với nước ấm. 
            </p>
            <p>
              Không chỉ dừng lại ở việc kích thích bài tiết ở mèo con, mà cách
              này còn giúp loại bổ những chất bẩn dính trên cơ thể chúng và giữ
              ấm. Lưu ý là mỗi ngày nên cho chúng đi đại tiện một lần. 
            </p>
            <h2 id="title-5">Tắm cho mèo con </h2>
            <p>
              Bạn cần tắm cho mèo con bằng nước ấm, khi tắm xong thì dùng khăn
              khô để lau, và sấy thật khô các ngóc ngách, giúp chúng không bị
              lạnh. Trong quá trình tắm cần loại bỏ thức ăn thừa hay phân dính
              trên cơ thể, tránh tạo điều kiện để vi khuẩn phát triển. 
            </p>
            <h2 id="title-6">Cho mèo làm quen với con người </h2>
            <p>
              Nên cho mèo làm quen với thành viên trong gia đình chủ nuôi, tạo
              mối liên kết và sự gần gũi. Ngoài ra cần cho mèo con tiếp xúc với
              những con mèo khác để chúng bớt nhút nhát, mạnh dạn hơn. 
            </p>
          </div>
        </div>
        <div className="article-section-right">
          <div className="right-heading">BÀI VIẾT LIÊN QUAN</div>
          <div className="list-article">
            {listArticle.map((article) => {
              return <TinyArticle article={article} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
