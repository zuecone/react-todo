var React = require('react')
var expect = require('expect');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');


describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch with entered input text', () => {
    var searchText = 'dog'
     var spy = expect.createSpy();
     var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

     todoSearch.refs.searchText.value = searchText;
     TestUtils.Simulate.change(todoSearch.refs.searchText);

     expect(spy).toHaveBeenCalledWith(false,'dog');
  });


  it('should call onSearch with proper checked value', () => {
    var searchCheck = true
     var spy = expect.createSpy();
     var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
     
     todoSearch.refs.showCompleted.checked = searchCheck;
     TestUtils.Simulate.change(todoSearch.refs.showCompleted);

     expect(spy).toHaveBeenCalledWith(true,'');
  });
});
