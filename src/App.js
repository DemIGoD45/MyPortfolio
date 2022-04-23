
import './App.css';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav'

function App() {
  return (
    <div className='flex flex-col' pages={4}>
      <Nav/>
      <Home/>
    </div>
  );
}

export default App;
