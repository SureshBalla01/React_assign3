import './App.css';
import './Components/LoginFunctionalComponent';
import './Components/LoginComponent.css';
import './Components/LoginWithClassComponent';
import'./Components/TableComponent';
import'./Components/TableWithClassComponent';
import LoginFunctionalComponent from './Components/LoginFunctionalComponent';
import LoginWithClassComponent from './Components/LoginWithClassComponent';
import TableComponent from './Components/TableComponent';
import TableWithClassComponent from './Components/TableWithClassComponent';
function App() {
  var books = [
    {
    Id:"B-001",
    Name:"A",
    Author:"anitkar",
    Publication:"World-pub"
   },
   {
    Id:"B-002",
    Name:"A",
    Author:"anitkar",
    Publication:"World-pub"
   },
   {
    Id:"B-003",
    Name:"A",
    Author:"anitkar",
    Publication:"World-pub"
   },
   {
    Id:"B-004",
    Name:"A",
    Author:"anitkar",
    Publication:"World-pub"
   }];
  return (
    
    <div className="App">
       <LoginFunctionalComponent></LoginFunctionalComponent>
       <LoginWithClassComponent></LoginWithClassComponent>
       <TableComponent></TableComponent>
       <TableWithClassComponent></TableWithClassComponent>
    </div>
  );
 
}

export default App;
