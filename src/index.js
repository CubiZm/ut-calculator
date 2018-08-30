// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

const state = {
  a: 2,
  b: -1,
  c: 0
};

function createAction(something) {
  return {
    type: 'JOPA',
    payload: {c: Math.random()}
  }
}

function createAction2(something) {
  return {
    type: 'JOPA2',
    payload: {a: something}
  }
}

function createAction3(something) {
  return {
    type: 'JOPA3',
    payload: {c: something}
  }
}

function reducer(state, action) {
  if(action.type === 'JOPA') {
   return {
     ...state,
     a: state.a + action.payload.a,
     b: state.b - 1
   }
  }
  
  if(action.type === 'JOPA2') {
    return {
      ...state,
      a: state.a * state.a
    }
  }
  
  if (action.type === 'JOPA3') {
    switch (action.payload.c) {
      case 10:
        return {
          ...state,
          c: 'a'
        };
    
      case 20:
        return {
          ...state,
          c: 'b'
        };
    
      default:
        return {
          ...state,
          c: 'c'
        }
    }
  }
  //   if(action.payload.c === 10) {
  //     return {
  //       ...state,
  //       c: 'a'
  //     }
  //   }
  //   if(action.payload.c === 20) {
  //     return {
  //       ...state,
  //       c: 'b'
  //     }
  //   }
  //     return {
  //       ...state,
  //       c: 'c'
  //     }
  // }
}

console.log(reducer(state, createAction3(10)));
console.log(reducer(state, createAction3(20)));
console.log(reducer(state, createAction3(22)));

