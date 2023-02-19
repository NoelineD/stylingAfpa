import logo from './logo.svg';
import './App.css';
import Alert from './Components/Alert/Alert';
import CartSuccess from './Components/CartSuccess/CartSuccess'; 

 

function App() { 

  return( 

    <div className="wrapper"> 

      <Alert title="Items Not Added" type="error"> 

        <div>Your items are out of stock.</div> 

      </Alert> 

      <CartSuccess /> 

    </div> 

  ) 

} 

export default App;
