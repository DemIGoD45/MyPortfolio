
import './App.css';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav'

function App() {
  return (
    <div className='flex flex-col'>
      <Nav/>
      <Home/>
    </div>
  );
}

export default App;
