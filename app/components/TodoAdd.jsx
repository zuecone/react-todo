var React = require('react');


var TodoAdd = React.createClass({
  onSubmit: function(e){
    e.preventDefault(); // stops page reload.
    var todoText = this.refs.TodoItem.value;

    if (todoText.length > 0){
      this.refs.TodoItem.value = '';
      this.props.onSetTodo(todoText);
    }else{
      this.refs.TodoItem.focus();
    }
  },
  render: function(){
    return(
      <div>
        <form ref="form" onSubmit={this.onSubmit} class="countdown-form">

            <input type="text" ref="TodoItem" placeholder="What do you need to do?" class="" />
            <button class="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = TodoAdd;
