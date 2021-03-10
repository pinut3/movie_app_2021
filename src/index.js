import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // './' -> 같은 디렉토리에 있다는 뜻

//component는 HTML을 반환하는 함수. react는 모두 component로 이루어져 있음.
ReactDOM.render(<App />, document.getElementById('potato'));
