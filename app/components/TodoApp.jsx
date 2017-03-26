var React = require('react');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },{
          id: 2,
          text: 'Clean the yard'
        },{
          id: 3,
          text: 'Wash your hair'
        },{
          id: 4,
          text: 'Play games'
        }
      ],
      TodoValue: ''
    };
  },
  handleAddTodo: function(TodoValue){
    console.log(TodoValue);
  },
  render: function(){
    var {todos} = this.state;

    return(
      <div>
        <TodoList todos={todos}/>
        <div class="column small-centered medium-6 large-4">
          <TodoAdd onSetTodo={this.handleAddTodo}/>
        </div>
      </div>

    )
  }

});

module.exports = TodoApp;
