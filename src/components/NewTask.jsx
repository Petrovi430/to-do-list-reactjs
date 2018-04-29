var React = require('react');

require('./NewTask.css');

var NewTask = React.createClass({
    getInitialState: function() {
        return {
            newTask: ''
        }
    },
    handleTextChange: function(event) {
        this.setState({newTask : event.target.value});
    },
    handleTaskAdd: function(event) {
        if(event.key == 'Enter'){
            var newTask = {
                task: this.state.newTask,
                id: Date.now(),
                completed: false
            };
            this.props.onTaskAdd(newTask);
            this.setState({newTask : ''});
            event.target.value = '';
        }
        
    },
    render: function() {
        return (
            <input type="text" placeholder="What you need to do?" onChange={this.handleTextChange} onKeyPress={this.handleTaskAdd}/>
        );
    }
});

module.exports = NewTask;
