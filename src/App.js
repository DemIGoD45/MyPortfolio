
import './App.css';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav'
import Work from './Components/Work/Work';

function App() {
  return (
    <div className='flex flex-col' pages={4}>
      <Nav/>
      <Home/>
      <Work/>
    </div>
  );
}

export default App;
