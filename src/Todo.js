import React,{useState} from 'react'
import {Card, Form, Image, Button, Col, Row} from 'react-bootstrap'
/*This component create individual todo item from the props coming
 from its parent, TodoList component*/
export default function Todo ({todo, editHandler, deleteHandler}){

    const [toggle,setToggle] = useState(false);
    const [value, setValue] = useState(todo.desc);
    const [cardClicked, setCardClicked] = useState(false);
    

    const submitHandler = (e) => {
        e.preventDefault();
        editHandler(todo.id,value)
        setToggle(false)
    }
    const changeHandler = (e) => {
        setValue(e.target.value)
    }

    const toggleForm = () => {
        setToggle(!toggle)
        setValue(value)
    }

    const done = () => {
        setCardClicked(!cardClicked)
    }
    
        return(
            /* Building individual todo item and assigning the values 
            based on props */
            <Card bg="warning" id={todo.id} className="mt-3 col-todo" >
                <Card.Body>
                    <Row>
                        <Col align="left">
                            <Card.Title style={{textDecoration: cardClicked?
                                                "line-through" :
                                                "none"}}>
                            <Image onClick={done}
                                   src={cardClicked?
                                        "https://img.icons8.com/doodle/20/000000/checkmark.png":
                                        "https://img.icons8.com/color/20/000000/circled.png"}
                                    className="m-1"/>
                            {todo.desc}
                            
                        </Card.Title>
                            <Form className={toggle? "d-block" : "d-none"}
                                onSubmit={submitHandler}>
                                <Form.Row align="center">
                                    <Col xl={10} lg={10} md={10} sm={10}>
                                        <Form.Control type="text" 
                                                    value={value} 
                                                    onChange={changeHandler}/>
                                    </Col>
                                    <Col xl={2} lg={2} md={2} sm={2} xs={12}>
                                        <Button className="todo__form--submit"
                                                type="submit"
                                                variant="success"
                                                onClick={() => toggleForm()}>Change</Button>
                                    </Col>
                                </Form.Row>       
                            </Form>

                        </Col>
                        <Col align='right' xl={2} lg={2} md={3} sm={4} xs={12} className="col-editDel">
                            {/*
                            
                            */}
                            
                            <Image onClick={() => toggleForm()}
                            src="https://img.icons8.com/cotton/24/000000/edit--v1.png" />

                            {/* add deleteHandler to button to delete item 
                                from state (by filtering) by passing the item id to its  
                                parent TodoList component*/}
                            <Image  src="https://img.icons8.com/doodle/24/000000/delete-sign.png"
                                    onClick={() => deleteHandler(todo.id)}/>
                        </Col>
                        
                    </Row>
                </Card.Body>            
            </Card>
        )
    
}

