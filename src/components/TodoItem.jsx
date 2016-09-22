import React from 'react';
/**
 * 单个todo组件
 */
class TodoItem extends React.Component {

   constructor(props) {
      super(props);
   }

   render() {
       //已完成中划线
      let doneStyle = this.props.isDone? {textDecoration:'line-through',color:'navajowhite'} : {textDecoration:'none'};

      return (
          <li onMouseOver={this.handlerMouseOver.bind(this)} onMouseOut={this.handlerMouseOut.bind(this)}>
             <input type="checkbox" onChange={this.handleCheckBox.bind(this)} />
             <span style={doneStyle}>{this.props.text} </span>
             <button className="del" ref="deleteBtn" onClick={this.handleDelete.bind(this)}>删除</button>
          </li>
      );
   }

    /**
     * 显示删除
     */
   handlerMouseOver(){
      React.findDOMNode(this.refs.deleteBtn).style.display = "inline";
   }

    /**
     * 鼠标移出
     */
   handlerMouseOut(){
      React.findDOMNode(this.refs.deleteBtn).style.display = "none";
   }

   /**
    * 删除单个todo
    */
   handleDelete(){
      console.log(this.props.index);
      this.props.delTodo(this.props.index);
   }

   /**
    * 选择完成该todo
    */
   handleCheckBox(){
      let isDone = !this.props.isDone;
      this.props.changeIsDone(this.props.index , isDone);
   }


}
export default TodoItem;
