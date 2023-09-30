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
      <Person name="Tamim Iqbal" job="Batter"></Person>
      <Person name="Mehedi Hasan Miraz" job="All Rounder"></Person>
      <Person name="Musfiqur Rahim" job="Batter & wicket-kipper"></Person>
      <Person name="Mahaduillah Riyad" job="All Rounder"></Person>
      <h5>New Components</h5>
      <p>React Mama Rock Mama</p>
      <Friend name="hemo" phone="0000"></Friend>
      <Friend name="hemonto" phone="014555"></Friend>
      <Friend name="Md Gausul" phone="01788"></Friend>
      <Friend name="md Gausul Islam Hemonto" phone="01785003901"></Friend>
    </div>
  );
}

function Person(props) {
  // console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>{props.job}</p>
    </div>
  )
}
function Friend(props){
  console.log(props);
  return (
    <div className="container">
      <h3>{props.name}</h3>
      <p>{props.phone}</p>
    </div>
  )
}
export default App;
