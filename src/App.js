// import logo from './logo.svg';
import './App.css';
import Headers from './Header';
import AddTask from './AddTask';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tasklist from './Tasklist';
import ModalBody from 'react-bootstrap/esm/ModalBody';
import MyVerticallyCenteredModal from './Modal';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      
    <Container>
              <Row className="justify-content-md-center">
                  <Col  lg="6">
                        <Headers />
                        <AddTask />
                        <Tasklist/>
                        <MyVerticallyCenteredModal/>
  
                  </Col>
               </Row>
      </Container>

    </div>
  );
}

export default App;
