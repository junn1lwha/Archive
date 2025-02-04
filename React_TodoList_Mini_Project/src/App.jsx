import './App.css'
import { useState, useRef, useReducer } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

const tempData = [ 
  /*Data Modeling*/
  
  /*
    {
      id: 0,
      isDone: false,
      content: "React Project id: 0",
      date: new Date().getTime(),
    },
  */
];

function reducer(state, action) {
  switch(action.type) {

    case "CREATE": 
      return [...state, action.data];

    case "UPDATE":
      return state.map((entryTodo) => entryTodo.id === action.targetId
          ? { ...entryTodo, isDone: !entryTodo.isDone}
          : entryTodo
      );

    case "DELETE":
      return state.filter((entryTodo) => entryTodo.id !== action.targetId);

    default:
      return state;
  }
}

function App() {

  const [todo, dispatch] = useReducer(reducer, tempData);
  const idRef = useRef(0);
  
  const onCreate = (content) => {
    dispatch({
      type:"CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };

  const onUpdate = (targetId) => { // update 하고자 하는 target의 id 를 인수로.
    dispatch({
      type: "UPDATE",
      targetId: targetId
    })
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    })
  };

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate} />
      <List todo={todo} onUpdate={onUpdate} onDelete ={onDelete} />
    </div>
  )
}

export default App
