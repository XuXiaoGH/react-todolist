import React from 'react';
/**
 * 底部组件
 */
class TodoFooter extends React.Component {

   constructor(props) {
      super(props);
   }

   render() {
      return (
        <div>
            <span className="footer"> 已完成 {this.props.doneNum}/ 总数 {this.props.totalNum}</span>
        </div>
      );
   }
}
export default TodoFooter;
