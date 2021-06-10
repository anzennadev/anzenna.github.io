import logo from './crop_center_image.png';
import './App.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">


        <span className="font-link">
          <img src={logo} className="App-logo" alt="logo" />
          <br/> 
          <br/> 
          <Card text="dark" style={{ width: '72rem' }}>
            <Card.Header>about</Card.Header>
            <Card.Body>
              <Card.Text>
              安全な (anzen'na) is Japanese for <code>secure</code>. We are a smart contract security auditing firm based in United States. 
              </Card.Text>
              <Button variant="info" size="lg" href="mailto:contact@anzenna.co">Request an audit</Button>
            </Card.Body>
          </Card>
        </span>
      </header>

    </div>
  );
}

export default App;
