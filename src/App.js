import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer = { name: 'Dr. Mahfuz', job: 'singer' };
const singer2 = { name: 'Eva Rahman', job: 'singer' };

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h5>New Components</h5>
      <p>React Mama Rock Mama</p>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person() {
  return (
    <div className="person">
      <h1>Tamim Iqbal</h1>
      <p>Profession: Cricketer</p>
    </div>
  )
}
function Friend(){
  return (
    <div className="container">
      <h3>Name: Honey</h3>
      <p>job: Misty</p>
    </div>
  )
}

export default App;
