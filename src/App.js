import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [listMotivator, setListMotivator] = useState("");

  useEffect(() => {
    todos.length && checkIfAllDone(todos, "done")
      ? setListMotivator("OMFG YOU'RE ALL DONE!")
      : todos.length
      ? setListMotivator("Tasks that need completed")
      : setListMotivator("Let's add some stuff to do.");
  }, [todos]);

  const checkIfAllDone = (array, property) => {
    for (let i = 0; i < array.length; i++) {
      if (!array[i].done) {
        return false;
      }
    }
    return true;
  };

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleNewTodo = e => {
    e.preventDefault();
    const input = document.getElementById("inputValue");
    const todo = {
      task: inputValue,
      done: false
    };
    if (!inputValue) {
      return;
    }
    setTodos([...todos, todo]);
    input.value = "";
    setInputValue(input.value);
  };

  const handleDone = e => {
    e.preventDefault();
    const { id } = e.target.parentElement;
    todos[id].done = !todos[id].done;
    setTodos([...todos]);
  };

  const handleRemove = e => {
    e.preventDefault();
    const { id } = e.target.parentElement;
    todos.splice(id, 1);
    setTodos([...todos]);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>TODO App</h1>
          <hr />
          <Form onSubmit={handleNewTodo}>
            <Form.Group>
              <Form.Control
                id="inputValue"
                type="text"
                placeholder="enter a todo here please"
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add TODO
            </Button>
          </Form>
          <hr />
          <p>{listMotivator}</p>
          <ListGroup as="ul">
            {todos &&
              todos.map((todo, i) => (
                <Todo
                  todo={todo}
                  id={i}
                  key={todo.task + i}
                  handleRemove={handleRemove}
                  handleDone={handleDone}
                />
              ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
