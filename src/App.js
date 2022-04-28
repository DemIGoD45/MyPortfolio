
import './App.css';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav'
import Skills from './Components/Tecnologies/Skills';
import Work from './Components/Work/Work';

function App() {
  return (
    <div className='flex flex-col' pages={4}>
      <Nav/>
      <Home/>
      <Work/>
      <Skills/>
    </div>
  );
}

export default App;
