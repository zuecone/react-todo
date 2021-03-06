var React = require('react');
var UUID = require('node-uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');


var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      // todos: [
      //   {
      //     id: UUID(),
      //     text: 'Walk the dog',
      //     completed: false
      //   },{
      //     id: UUID(),
      //     text: 'Clean the yard',
      //     completed: true
      //   },{
      //     id: UUID(),
      //     text: 'Wash your hair',
      //     completed: true
      //   },{
      //     id: UUID(),
      //     text: 'Play games',
      //     completed: false
      //   }
      // ],
      todos: TodoAPI.getTodos(),
      showCompleted: false,
      searchText: ''
    };
  },
  componentDidUpdate: function(){
    TodoAPI.setTodos(this.state.todos);
  },
  handleToggle: function(id){
    //console.log('in the handleToggle function');
    var updatedTodos = this.state.todos.map((todo) => {
      //console.log(todo.text + 'inside the map');
      if(todo.id === id){
        todo.completed = !todo.completed;
        //console.log('currently looking at the unix time', moment().unix());
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }

      return todo;
    });
    this.setState({todos: updatedTodos});
    //console.log(this.state.todos);
  },
  handleAddTodo: function(TodoValue){

   this.setState({
     todos:[
       ...this.state.todos,
       {
         id: UUID(),
         text: TodoValue,
         completed: false,
         createdAt: moment().unix(),
         completedAt: undefined
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
    var {todos,showCompleted,searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos,showCompleted,searchText);

    return(
      <div>
        <h1 class="page-title">Todo App</h1>

        <div class="row">
          <div class="column small-centered small-11 medium-6 large-4">
            <div class="container">
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
              <TodoAdd onSetTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>

    )
  }

});

module.exports = TodoApp;
