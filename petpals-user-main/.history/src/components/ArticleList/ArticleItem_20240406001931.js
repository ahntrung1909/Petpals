import Link from "next/link";
export const ArticleItem = () => {
  return (
    <div className="article-item">
      <div className="article-img">
        <img src="/img/articles/article-1.jpg" alt="" />
      </div>
      <div className="article-introduce">
        <div className="article-date">
          <img src="/icon/mdi_calendar.svg" alt="" />
          <p>20/04/2024</p>
        </div>
        <div className="article-author">
          <span>Đăng bởi: </span>Bùi Quang Trưởng
        </div>
      </div>
      <div className="article-content">
        <h3>Bật mí cho bạn cách chăm sóc mèo con chu đáo nhất</h3>
        <p>
          Quá trình nuôi cũng như là chăm sóc thú cưng là quá trình diễn ra
          trong cả một thời gian dài. Và quá trình nuôi mèo con với nh...
        </p>
      </div>
      <Link href="#" className="watch-detail">{`Xem chi tiết >>`}</Link>
    </div>
  );
};
