import './App.css';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoList from './TodoList';
function App() {
  return (
    <Container className="col" align='center'>
      <TodoList/>
    </Container>
  );
}

export default App;
