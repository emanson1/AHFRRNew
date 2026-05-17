import React from "react";
import Cards, { Card } from "react-swipe-card";

// 左にスワイプした時に表示する要素
const CustomAlertLeft = () => <span>ごめんあそばせ</span>;

// 右にスワイプした時に表示する要素
const CustomAlertRight = () => <span>よろこんで</span>;

// 全てのカードをスワイプした後の処理
const showEndMessage = () => {
  alert("いいねはありません");
};

// 左にスワイプした時の処理
const handleSwipeLeft = () => {
  return;
};

// 右にスワイプした時の処理
const handleSwipeRight = () => {
  alert("マッチしました！");
};

const CardBoard = props => {
  return (
    <Cards
      alertRight={<CustomAlertRight />}
      alertLeft={<CustomAlertLeft />}
      onEnd={showEndMessage}
      className="cards"
    >
      {props.userList.map((item, i) => {
        return (
          <Card
            key={i}
            onSwipeLeft={handleSwipeLeft}
            onSwipeRight={handleSwipeRight}
          >
            <div className="card__img">
              <img src={item.img} alt="" />
            </div>
            <div className="card__info">
              <div className="card__name">{item.name}</div>
              <div className="card__age">{item.age}歳</div>
            </div>
          </Card>
        );
      })}
    </Cards>
  );
};

export default CardBoard;
