import './App.css';
import Navi from './components/Nav';
import Home from './components/Home';
import Library from './components/Library';
import Foo from './components/Foo';
import Library2 from './components/Library2';

function App() {
  return (
    <div className="App">
       <Navi/>
      <Home/>
      <Library/>
      <Library2/>
       <Foo/> 
    </div>
  );
}
export default App;
