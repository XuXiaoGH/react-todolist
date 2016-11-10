import React from 'react';
import TodoHeader from './TodoHeader.jsx';
import LocalDb from "localDb";
import TodoAddText from  './TodoAddText.jsx';
import TodoMain from './TodoMain.jsx';
import TodoFooter from './TodoFooter.jsx';

class Todo extends React.Component {

   constructor(props) {
      super(props);
      this.todoDb = new LocalDb("Todo"); //利用localDB半持久化数据
      this.state = {todo: '',todoValue:'',todos : this.todoDb.get('todos') || []};


   }

   /**
    * 新增todo,先放入states中，再放入localdb做存储
    * @param todoItem
    */
   addTodo(todoItem){
      this.state.todos.push(todoItem);  //加入todolist
      this.todoDb.set('todos',this.state.todos);
      this.setState({'todos' : this.state.todos }); // 更新state，重新渲染页面
   }

   /**
    * 删除选择的todo
    * @param index
    */
   delTodo(index){
      this.state.todos.splice(index , 1);
      this.setState({'todos' : this.state.todos });
      this.todoDb.set('todos' , this.state.todos);
   }

   /**
    * 修改完成状态
    * @param index
    * @param isDone
    */
   changeIsDone(index , isDone){
      let todoItem = this.state.todos[index];
      todoItem.isDone = isDone;
      this.setState({'todos' : this.state.todos});
      this.todoDb.set('todos' , this.state.todos);
   }


   /**
    * 渲染页面
    * @returns {XML}
    */
   render() {

       //关于todoFooter下部的统计数目，直接在渲染的时候统计todos数组
       var count = {
           totalNum : this.state.todos.length || 0,
           doneNum : this.state.todos.filter((todo)=>todo.isDone).length || 0
       }


      return (
         <div>
            <TodoHeader />
            <TodoAddText addTodo = {this.addTodo.bind(this)}    />
            <TodoMain todos = {this.state.todos} delTodo = {this.delTodo.bind(this)} changeIsDone = {this.changeIsDone.bind(this)}/>
            <TodoFooter {...count} />
         </div>
      );
   }
}

export default Todo;
