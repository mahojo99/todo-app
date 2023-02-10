import './App.css';
import Todos from './components/Todos';
import Navbar from './components/Navbar';

const todoStart = [
  {
    id: 0,
    title: "Lage middag",
    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
  }
]

function App() {
  return (
    <>
    <Navbar username="mahojo"/>
    <Todos todoStart={todoStart}/>
    </>
  );
}

export default App;
