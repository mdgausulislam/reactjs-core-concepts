import logo from './logo.svg';
import './App.css';

const number = 5555;

const singer2 = [
  { name: 'Dr. Mahfuz', job: 'singer' },
  { name: 'Eva Rahman', job: 'singer' },
  { name: 'Agun', job: 'sopno' },
  { name: 'Shuvro', job: 'pathor'}
];

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  const cricketer = ["Tamim Iqbal", "Mehedi Hasan Miraz", "Musfiqur Rahim", "Mahaduillah Riyad", "Mustafizur Rahman", "Taskin Ahmed", "Shoriful Islam"]
  return (
    <div className="App">
      {
        cricketer.map(cricket => <li>Name:  {cricket}</li>)
      }
      {
        cricketer.map(cricket => <Person name={cricket}></Person>)
      }

      {
        singer2.map(singer=><Person name={singer.name}></Person>)
      }
      {/* <Person name={cricketer[0]} job="Batter"></Person>
      <Person name={cricketer[1]} job="All Rounder"></Person>
      <Person name={cricketer[2]} job="Batter & wicket-kipper"></Person>
      <Person name={cricketer[3]} job="All Rounder"></Person> */}
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
function Friend(props) {
  console.log(props);
  return (
    <div className="container">
      <h3>{props.name}</h3>
      <p>{props.phone}</p>
    </div>
  )
}
export default App;
