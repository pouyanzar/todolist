import React, {useState} from 'react'
import {Button, Image, Form, Col, Container} from 'react-bootstrap'

export default function CreateTodo({createTodo, hideAlert}) {

    const [className, setClassName] = useState('d-none');
    const [value, setValue] = useState('');
    
    
/* This function shows the form for adding todo items by changing the 
 display property of the form */
    const showTodo = () => {
        setClassName("d-block")
    }

   const changeHandler = (e) => {
        setValue(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if(value !== '')
        {
            createTodo(value);
            setValue('');
        }
        else{
            
            alert("Please enter a task");
            
        }  
    }
   
        return (
            <Container className="mt-5">
                    <Image src="https://img.icons8.com/cute-clipart/64/000000/plus.png"
                        onClick={() => {showTodo()
                                        hideAlert()
                                    }}/>
                <Form size='sm' 
                    className={`${className} mt-3`}
                    onSubmit={submitHandler}>
                    <Form.Row className="justify-content-center">
                        <Col xl={6} lg={6} md={8} sm={6} xs={12} align="right">
                            <Form.Control type="text" placeholder='What to do?'
                                        value={value}
                                        onChange={changeHandler}/>
                        </Col>
                        <Col xl={2} lg={2} md={3} sm={3} xs={12}  align="left" className="col-addItem">
                            <Button type="submit" 
                                    variant="success">Add Item</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Container>
        )
    
}