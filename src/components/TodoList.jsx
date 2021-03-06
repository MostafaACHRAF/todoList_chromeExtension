import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

    renderTodoItem() {
        return(
            this.props.tasks.map((t, index) => {
                return(
                    <TodoItem id={index} key={index} title={t.title} time={t.time} isCompleted={t.isCompleted} toggleTask={this.props.toggleTask} removeTask={this.props.removeTask} />
                )
            })
        );
    }

    render() {
        return(
            <div>
                <ul className="collapsible" data-collapsible="accordion">{ this.renderTodoItem() }</ul>
            </div>
        );
    }
}

export default TodoList;