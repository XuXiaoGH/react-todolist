import React from 'react';
import TodoItem from './TodoItem.jsx';
/**
 * 用于显示主体todolist
 */
class TodoMain extends React.Component {

   constructor(props) {
      super(props);
   }
    //循环遍历todos，{..this.props} 这个写法还不是很清楚，不过功能是把整个props往下传递
   render() {
      return (
         <ul className="todoList">
            {this.props.todos.map(
                (todo, index) => {
                   return <TodoItem text={todo.text} isDone={todo.isDone} index = {index}  {...this.props}/>
                })}
         </ul>
      );
   }

}
export default TodoMain;
