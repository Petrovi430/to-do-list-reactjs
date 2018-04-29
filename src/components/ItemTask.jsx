var React = require('react');

require('./ItemTask.css');

var ItemTask = React.createClass({
    render: function() {
        var style;
        if(this.props.completed){
            style = "task-completed";
        }else{
            style = "task";
        };
        return (
            <div className="task-item">
                <div className={style} onClick={this.props.onCompleted}>
                    {this.props.children}
                </div>
                <span className="delete-task" onClick={this.props.onDelete}>x</span>
            </div>
        );
    }
});

module.exports = ItemTask;
