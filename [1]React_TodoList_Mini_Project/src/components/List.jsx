import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({todo, onUpdate, onDelete}) => {

  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilterData = () => {
    if (search === "") {
      return todo;
    }
    return todo.filter((entryItem) =>
      entryItem.content
        .toLowerCase()
        .includes(search.toLowerCase())
    ); // 소문자로 검색해도 나오도록 설정
  };

  const filteredTodo = getFilterData();
  
  return (
    <div className="List">
      <h4>Todo List🌱</h4>
      <input 
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />

      <div className="TodoWrapper">
        {filteredTodo.map((entryItem) => {
          return (
            <TodoItem 
              key={entryItem.id} 
              {...entryItem} 
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })} 
      </div>
    </div>
  )
};
export default List;