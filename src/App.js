import './App.css';
import Header from './MyComponents/Header';
import Avatar from './MyComponents/Avatar';
import Armary from './MyComponents/Armary';
function App() {
  let avatar=[
    {
      Name: Batman,
      power: rich,
      cost: 2000,
      FL: "I am Batman"
    },
    {
      Name: Captain-America,
      power: SuperHuman,
      cost: 2000,
      FL: "I can do this all day"
    },
    {
      Name: Hulk,
      power: power,
      cost: 2000,
      FL: "Hulk smash"
    }
  ]
  return (
    <>
    <Header title="MetaStore"/>
    <Avatar avatar={avatar}/>
    <Armary/>
    </>
  );
}

export default App;
