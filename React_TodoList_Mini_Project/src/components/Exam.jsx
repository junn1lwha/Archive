import { useReducer } from "react";

function reducer(state, action) {
  // -> 상태를 실제로 변환시키는 변환기 역할
  console.log(state, action);
  
  switch(action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE": 
      return state - action.data;
    default:
      return state;
  }
}
const Exam = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  // dispatch : 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  const onClickPlusButton = (e) => {
    // 인수: 상태가 어떻게 변화되길 원하는지
    // -> action 객체 
    dispatch({
      type : "INCREASE", // 상태를 어떻게 변화시킬지 원하는지
      data : 1,
      
    });
  }
  const onClickMinusButton = (e) => {
    // 인수: 상태가 어떻게 변화되길 원하는지
    // -> action 객체 
    dispatch({
      type : "DECREASE", // 상태를 어떻게 변화시킬지 원하는지
      data : 1,
    });
  }

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlusButton}>+</button>
      <button onClick={onClickMinusButton}>-</button>
    </div>
  )
}

export default Exam;