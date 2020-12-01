import './App.css';
import {Alert, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoList from './TodoList';
function App() {

  return (
    <Container className="col" align='center'>
      <TodoList />
    </Container>
  );
}

export default App;
