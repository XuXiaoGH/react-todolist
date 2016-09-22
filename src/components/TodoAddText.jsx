import React from 'react';
class TodoHeader extends React.Component {

   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="todoHeader">
            <input ref="todoValue" onKeyUp={this.handleKeyUp.bind(this)} className="todoTaskContent" type="text" name="todo" placeholder="请输入你下一步要做的事儿"   onChange={this.changeTodo.bind(this)} />
            <button onClick={this.addText.bind(this)} className="addBtn">Add</button>
         </div>
      );
   }

   /**
    * 响应ADD按钮 ， 将值放入db中
    */
   addText(){
      let todoItem = {
         text : this.state.todo,
         isDone : false
      }
      this.props.addTodo(todoItem);
      React.findDOMNode(this.refs.todoValue).value = '';
   }

   changeTodo(event){
      this.setState({todo:event.target.value})
   }

    /**
     * 响应enter键添加todo
     * @param event
     */
   handleKeyUp(event){
      let code = event.keyCode;
      if(code == 13){
         let todoItem = {
            text : this.state.todo,
            isDone : false
         }
         this.props.addTodo(todoItem);
         React.findDOMNode(this.refs.todoValue).value = '';
      }
   }

}
export default TodoHeader;
