import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup"

const Todo = (props) => (
  <ListGroup.Item>
                  <p
                    style={{
                      display: "inline-block",
                      textDecoration: props.todo.done ? "line-through" : ""
                    }}
                  >
                    {props.todo.task}
                  </p>
                  <ButtonGroup className="float-right" id={props.id}>
                    <Button variant="secondary" className="dave" onClick={props.handleDone}>
                      {!props.todo.done ? "Finish" : "UNDO Finish"}
                    </Button>
                    <Button variant="secondary" onClick={props.handleRemove}>
                      Remove Task
                    </Button>
                  </ButtonGroup>
                </ListGroup.Item>
)

export default Todo;
