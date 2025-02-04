import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

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
  // search 바에 무엇인가 검색한다고 해서 실제로 todo data 가 실제로 추가되거나, 완료되는 것이 아니라서 불필요한 리렌더링 발생
      

  const {totalCount, doneCount, notDoneCount} = useMemo(()=>{
    console.log("getAnalyzedData 호출!");
    const totalCount = todo.length;
    const doneCount = todo.filter((entryTodo) => entryTodo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo])
  // 의존성배열: deps
  // deps 에 포함된 값이 변경되었을 때만 첫번째 인수로 전달한 콜백함수를 다시 실행
  // 해당 콜백함수가 반환하는 값을 useMemo 는 그대로 다시 반환을 해줌

  return (
    <div className="List">
      <h4>Todo List🌱</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
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