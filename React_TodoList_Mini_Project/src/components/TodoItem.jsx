import "./TodoItem.css";
const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {

  const onChangeCheckBox = () => {
    onUpdate(id);
  } 
  const onClickButton = () => {
    onDelete(id);
  }
  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckBox}
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>

      <div className="date">{new Date(date).toLocaleDateString()}</div>

      <button onClick={onClickButton}>
        삭제
      </button>
      
    </div>
  )
}
export default TodoItem;