import React, { Component } from 'react'
import {Button, Image, Form, Col, Container} from 'react-bootstrap'

class CreateTodo extends Component {

    constructor(props){
        super(props)
        this.state={
            className: "d-none",
            value: '',
        }
        this.showTodo = this.showTodo.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
    }
/* This function shows the form for adding todo items by changing the 
 display property of the form */
    showTodo = () => {
        this.setState({className: "d-block"})
    }

    changeHandler = (e) => {
        this.setState({value: e.target.value})
    }
    submitHandler = (e) => {
        e.preventDefault();
        if(this.state.value !== '')
        {
            this.props.createTodo(this.state.value)
            this.setState({showForm:false,value:''})
        }
        else{
            
            alert("Please enter a task");
            
        }  
    }

      

    render() {
        return (
            <Container className="mt-5">
                    <Image src="https://img.icons8.com/cute-clipart/64/000000/plus.png"
                        onClick={() => this.showTodo()}/>
                <Form size='sm' 
                    className={`${this.state.className} mt-3`}
                    onSubmit={this.submitHandler}>
                    <Form.Row className="justify-content-center">
                        <Col xl={6} lg={6} md={8} sm={6} xs={12} align="right">
                            <Form.Control type="text" placeholder='What to do?'
                                        value={this.state.value}
                                        onChange={this.changeHandler}/>
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
}

export default CreateTodo
