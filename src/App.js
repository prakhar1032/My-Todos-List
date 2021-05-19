import logo from './logo.svg';
import './App.css';
import Header from "./My Components/Header";
import { Todos } from './My Components/Todos';
import { Footer } from "./My Components/Footer";

function App() {
  let myVariable = 330;
  return (
    <>
    <Header title="My Todos List"  searchBar={true}/>
    <Todos/>
    <Footer/>
    </>
  );
}

export default App;
