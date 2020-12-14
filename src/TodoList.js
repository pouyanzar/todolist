import React,{useState} from 'react'
import Todo from './Todo'
import CreateTodo from './CreateTodo'


//This component displays todo items 
export default function TodoList (){
    
    const [todos, setTodos] = useState([])

    /* define deleteHandler function to delete items from state
        by filtering item's id*/
    const deleteHandler = (id) => {
        setTodos(todos.filter(todo => todo.id !== id)) 
    }
             
    /* This function pushes new todo items to state.
        id defined to be the length of state + 1 */
    const createTodo = (desc) => {
        const id = todos.length+1
        setTodos([...todos,{id:id, desc:desc}])
    } 

    const editHandler = (id,desc) => {
           const todo = todos.findIndex((todo) => todo.id === id)
           todos[todo] = {...todos[todo], desc: desc}
           setTodos([...todos])
    }

        return(

            /*Passing all the todo items and deleteHandler function 
                as props to its child Todo component */
            <div>
                <CreateTodo createTodo={createTodo} />
                {todos.map(
                    item => <Todo 
                                key={item.id} 
                                todo={item}
                                deleteHandler={deleteHandler}
                                editHandler={editHandler}
                                />
                )}     
            </div>
        )
    }
