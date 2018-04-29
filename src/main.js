var ReactDOM = require('react-dom');
var React = require('react');
var TasksApp = require('./components/TasksApp.jsx');

ReactDOM.render(
    <TasksApp />,
    document.getElementById('mount-point')
);