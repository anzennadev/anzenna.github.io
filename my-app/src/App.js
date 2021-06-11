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
        
              <Button variant="info" size="lg" href="mailto:contact@anzenna.co">Request an audit</Button>

        </span>
      </header>

    </div>
  );
}

export default App;
