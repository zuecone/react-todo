var React = require('react');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoSearch = require('TodoSearch');
var UUID = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: UUID(),
          text: 'Walk the dog'
        },{
          id: UUID(),
          text: 'Clean the yard'
        },{
          id: UUID(),
          text: 'Wash your hair'
        },{
          id: UUID(),
          text: 'Play games'
        }
      ],
      showCompleted: false,
      searchText: ''
    };
  },
  handleAddTodo: function(TodoValue){
   this.setState({
     todos:[
       ...this.state.todos,
       {
         id: UUID(),
         text: TodoValue
       }
     ]
   });
  },
  handleSearch: function(showCompleted,searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
    //console.log(searchText);
  },
  render: function(){
    var {todos,searchText} = this.state;

    return(
      <div class="column small-centered medium-6 large-4">
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <TodoAdd onSetTodo={this.handleAddTodo}/>
      </div>

    )
  }

});

module.exports = TodoApp;
