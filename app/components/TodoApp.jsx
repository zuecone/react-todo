var React = require('react');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoSearch = require('TodoSearch');

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
      showCompleted: false,
      searchText: ''
    };
  },
  handleAddTodo: function(TodoValue){
    console.log(TodoValue);
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
          {searchText}

      </div>

    )
  }

});

module.exports = TodoApp;
