import React from "react";

//function component는 뭔가를 return 함.
//class component는 class지만 react component로 부터 확장되고 render method를 가질 수 있음.
//react는 자동적으로 class component의 render method를 실행함.
class App extends React.Component {
  state = {
    count: 0,
  };

  // same as function() {}
  add = () => {
    this.setState(current => ({ count: current.count + 1 })); //setState()는 state의 값을 변경할 수 있고, 동시에 render도 새로 호출한다.
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };

  componentDidMount() {
    //render 후
    console.log("Component rendered");
  }

  componentDidUpdate() {
    //render 후 업데이트가 일어날 시
    console.log("I just updated");
  }

  componentWillUnmount() {
    //component를 떠날 때
    console.log("GoodBye.");
  }

  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The Number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
