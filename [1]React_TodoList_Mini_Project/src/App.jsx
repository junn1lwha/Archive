import './App.css'
import { useState, useRef } from 'react'
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

function App() {
  
  const [todo, setTodo] = useState(tempData);
  const idRef = useRef(0);
  
  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    }
    setTodo([...todo, newTodo])
  };

  const onUpdate = (targetId) => { // update 하고자 하는 target의 id 를 인수로.
    setTodo(todo.map((entryTodo) => 
      entryTodo.id === targetId
        ? { ...entryTodo, isDone: !entryTodo.isDone}
        : entryTodo
      )
    );
  };
  const onDelete = (targetId) => {
    setTodo(todo.filter((entryTodo) => entryTodo.id !== targetId))
  }

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate} />
      <List todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )

}

export default App
