
import './App.css';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Skills from './Components/Tecnologies/Skills';
import Work from './Components/Work/Work';

function App() {
  return (
    <div className='flex flex-col' pages={4}>
      <Header/>
      <Work/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
