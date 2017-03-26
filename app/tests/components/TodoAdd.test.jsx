var React = require('react')
var expect = require('expect');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoAdd = require('TodoAdd');


describe('TodoAdd', () => {
  it('should exist', () => {
    expect(TodoAdd).toExist();
  });

  it('should call onSetTodo prop with valid data', () => {
    var todoText = 'Check mail';
     var spy = expect.createSpy();
     var addTodo = TestUtils.renderIntoDocument(<TodoAdd onSetTodo={spy}/>);
     var $el = $(ReactDOM.findDOMNode(addTodo));

     addTodo.refs.TodoItem.value = todoText;
     TestUtils.Simulate.submit($el.find('form')[0]);

     expect(spy).toHaveBeenCalledWith(todoText);
  });


  it('should not call onSetTodo prop with when invalid input', () => {
    var todoText = '';
     var spy = expect.createSpy();
     var addTodo = TestUtils.renderIntoDocument(<TodoAdd onSetTodo={spy}/>);
     var $el = $(ReactDOM.findDOMNode(addTodo));

     addTodo.refs.TodoItem.value = todoText;
     TestUtils.Simulate.submit($el.find('form')[0]);

     expect(spy).toNotHaveBeenCalled();
  });
});
