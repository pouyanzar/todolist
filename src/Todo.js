import React,{Component} from 'react'
import {Card, Form, Image, Button, Col, Row} from 'react-bootstrap'
/*This component create individual todo item from the props coming
 from its parent, TodoList component*/
class Todo extends Component{

    constructor(props){
        super(props)
        this.state={
            toggle: false,
            value: this.props.todo.desc,
            cardClicked: false,
        }

        this.submitHandler = this.submitHandler.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
        this.toggleForm = this.toggleForm.bind(this)
        this.done = this.done.bind(this)        
    } 

    submitHandler = (e) => {
        e.preventDefault();
        this.props.editHandler(this.props.todo.id,this.state.value)
        this.setState({toggle: false})
    }
    changeHandler = (e) => {
        this.setState({value:e.target.value})
    }

    toggleForm = () => {
        this.setState({toggle:!this.state.toggle, value: this.state.value})
    }

    done = () => {
        this.setState({cardClicked: !this.state.cardClicked})
    }
    
    render(){
        const todo = this.props.todo
        const deleteHandler = this.props.deleteHandler

        return(
            /* Building individual todo item and assigning the values 
            based on props */
            <Card bg="warning" id={todo.id} className="mt-3 col-todo" >
                <Card.Body>
                    <Row>
                        <Col align="left">
                            <Card.Title style={{textDecoration: this.state.cardClicked?
                                                "line-through" :
                                                "none"}}>
                            <Image onClick={this.done}
                                   src={this.state.cardClicked?
                                        "https://img.icons8.com/doodle/20/000000/checkmark.png":
                                        "https://img.icons8.com/color/20/000000/circled.png"}
                                    className="m-1"/>
                            {todo.desc}
                            
                        </Card.Title>
                            <Form className={this.state.toggle? "d-block" : "d-none"}
                                onSubmit={this.submitHandler}>
                                <Form.Row align="center">
                                    <Col xl={10} lg={10} md={10} sm={10}>
                                        <Form.Control type="text" 
                                                    value={this.state.value} 
                                                    onChange={this.changeHandler}/>
                                    </Col>
                                    <Col xl={2} lg={2} md={2} sm={2} xs={12}>
                                        <Button className="todo__form--submit"
                                                type="submit"
                                                variant="success"
                                                onClick={this.toggleForm}>Change</Button>
                                    </Col>
                                </Form.Row>       
                            </Form>

                        </Col>
                        <Col align='right' xl={2} lg={2} md={3} sm={4} xs={12} className="col-editDel">
                            {/*
                            
                            */}
                            
                            <Image onClick={() => this.toggleForm()}
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
}

export default Todo;