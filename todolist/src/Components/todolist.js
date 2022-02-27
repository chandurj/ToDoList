import {Component} from 'react';
class ToDoList extends Component{
    constructor(){
        super()
        this.state ={
            todoList: []
        }
    }
    addToDO = (event) =>{
        event.preventDefault();
        //console.log(event)
        console.log(event.target);
        const data = event.target,
        newToDo = {
            taskTitle: data.taskTitle.value,
            date: data.date.value,
            time: data.time.value
        }
        //console.log(newToDo);
        this.state.todoList.push(newToDo);
        this.setState({
            todoList: this.state.todoList
        })
    }
    deleteTodo = (event) =>{
        alert('');
        this.state.todoList.splice(event.target.value,1);
        this.setState({
            todoList: this.state.todoList
        })
    }
    render(){
        console.log(this.state.todoList)
        return(
            <>
                <h1>ToDoList</h1>
                <form onSubmit={this.addToDO}> 
                    <lable>TaskTitle:</lable>
                    <input type="text" name="taskTitle"  className='form-control'/><br/>
                    <lable>Date:</lable>
                    <input type="date" name="date"  className='form-control' /><br/>
                    <lable>Time:</lable>
                    <input type="time" name="time"  className='form-control'/><br/>
                    <button type='submit' className='btn btn-success'>ADD+</button>
                </form>
                <ul>
                    {
                        this.state.todoList.map((task, index)=>{
                            return(
                                <div>
                                <li key={index}>{task.taskTitle} at {task.date}, {task.time}</li>
                                <button type='button' className='btn btn-danger' onClick={this.deleteTodo} value={index}>Delete</button>
                                </div>
                                
                            )
                            

                        })
                    }
                </ul>
            </>
        )
    }

}
export default ToDoList