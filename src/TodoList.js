import React,{Component} from 'react'
import Todo from './Todo'
import CreateTodo from './CreateTodo'

//This component displays todo items 
class TodoList extends Component{
    constructor(props){
        super(props)
    //the state stores todo items
    this.state = {
                    todos:[],
                 }
            this.deleteHandler = this.deleteHandler.bind(this)
            this.createTodo = this.createTodo.bind(this)
            this.editHandler = this.editHandler.bind(this)
    }

    /* define deleteHandler function to delete items from state
        by filtering item's id*/
        deleteHandler = (id) => {
            const todos = this.state.todos.filter(todo => todo.id !== id)
            this.setState({todos:todos}) 
        }
        
        
        
    /* This function pushes new todo items to state.
        id defined to be the length of state + 1 */
       createTodo = (desc) => {
           const todos = this.state.todos
           const id = todos.length+1
           this.desc = desc
           todos.push({id:id, desc:desc})
           this.setState({todos:todos})
       } 

       editHandler = (id,desc) => {
           const todos = [...this.state.todos]
           const todo = todos.findIndex((todo) => todo.id === id)
           console.log(todos[todo])
           todos[todo] = {...todos[todo], desc: desc}
           this.setState({todos: todos})
       }

    render(){
        return(

            /*Passing all the todo items and deleteHandler function 
                as props to its child Todo component */
            <div>
                <CreateTodo createTodo={this.createTodo}/>
                {this.state.todos.map(
                    item => <Todo todo={item}
                                key={item.index} 
                                deleteHandler={this.deleteHandler}
                                editHandler={this.editHandler}
                                />
                )}     
            </div>
        )
    }
}
export default TodoList;