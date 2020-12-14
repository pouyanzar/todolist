import React,{useState} from 'react'
import Todo from './Todo'
import CreateTodo from './CreateTodo'
import Alert from 'react-bootstrap/Alert'

//This component displays todo items 
export default function TodoList (){
    
    const [todos, setTodos] = useState([])
    const [className, setClassName] = useState(true)

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
            <>
                <Alert className={className ? 'd-block' : 'd-none'}
                    variant="primary">
                    Please click on the plus button below to add your tasks.
                </Alert> 
                <CreateTodo createTodo={createTodo}
                    hideAlert={() => setClassName(false)} />
                {todos.map(
                    item => <Todo 
                                key={item.id} 
                                todo={item}
                                deleteHandler={deleteHandler}
                                editHandler={editHandler}
                                />
                )}     
            </>
        )
    }
