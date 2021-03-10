import React from "react"
import PropTypes from "prop-types"

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image:
      "http://m.gochoochongak.com/web/product/big/201810/1cf1eb74d9cbb972ee0fd10d7f25e49c.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "ramen",
    image:
      "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/03/a0003253/img/ko/a0003253_parts_5ce7b2d079944.jpg?20210108193549&q=80&rw=686&rh=490",
    rating: 4.9,
  },
  {
    id: 3,
    name: "samgiopsal",
    image:
      "https://newsimg.hankookilbo.com/cms/articlerelease/2020/06/11/202006111362061920_7.jpg",
    rating: 4.8,
  },
  {
    id: 4,
    name: "chukumi",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2019/03/05/52d2be99c015378a75c9db81362422c71.jpg",
    rating: 4.7,
  },
]

// function renderFood(dish) {
//   console.log(dish);
//   return <Food name={dish.name} pic={dish.image} />
// }

//component 생성
function Food({ name, pic, rating }) {
  //props.fav == { fav }
  //console.log(prop.fav);
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={pic} alt={name} />
    </div>
  )
}

//전달 받아야하는 prop을 체크할 수 있음 (type, required)
Food.propTypes = {
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  rating: PropTypes.number,
}

// <Food /> -> JSX  JSX는 react의 개념으로 javascript + HTML임
// component는 대문자로 시작해야하고, component로 정보를 보낼 수 있음 (ex. fav="kimchi")
function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          pic={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  )
}

export default App
