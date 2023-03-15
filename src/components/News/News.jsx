import React from "react";
import "./News.scss";

export default function News() {
  const News = [
    {
      img: "../../../public/img/background/news.png",
      date: "August 26, 2020",
      title: "WE DONATE ONE WEEKS SUPPLY",
      content:
        "We care about New Zealand children, and we want to support our community by providing our children in need with necessary vitamins to improve....",
    },
    {
      img: "../../../public/img/background/news.png",
      date: "August 26, 2020",
      title: "WE DONATE ONE WEEKS SUPPLY",
      content:
        "We care about New Zealand children, and we want to support our community by providing our children in need with necessary vitamins to improve....",
    },
    {
      img: "../../../public/img/background/news.png",
      date: "August 26, 2020",
      title: "WE DONATE ONE WEEKS SUPPLY",
      content:
        "We care about New Zealand children, and we want to support our community by providing our children in need with necessary vitamins to improve....",
    },
  ];
  return (
    <>
      <div className="latest-news">
        <h2>LATEST NEWS</h2>
      </div>
      <div className="container-news">
        {News.map((val, ind) => {
          return (
            <>
              <div className="container-news-basis">
                <div className="img-news">
                  <img src={val.img} />
                </div>
                <h6>{val.date}</h6>
                <h3>{val.title}</h3>
                <p>{val.content}</p>
                <button>READ MORE</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
