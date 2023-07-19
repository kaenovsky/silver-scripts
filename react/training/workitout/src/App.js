import './App.css';
// import ColorList from './ColorList';
import SlotMachine from './Slot';
import Clicker from './Clicker';

function App() {
  return (
    <div className="App">
      <SlotMachine val1="🍒" val2="🍒" val3="💀" />
      <SlotMachine val1="🍒" val2="🥑" val3="🍒" />
      <SlotMachine val1="💀" val2="💀" val3="🍒" />
      <SlotMachine val1="🥑" val2="🥑" val3="🥑" />
      <SlotMachine val1="🍒" val2="🍌" val3="🍌" />
      <SlotMachine val1="🍒" val2="🍒" val3="🍒" />
      {/* <ColorList colors={["red", "pink", "indigo"]} />
      <ColorList colors={["darkblue", "gold", "teal"]} /> */}
      <Clicker message="wohooo!" buttonText="Click here!" />
      <Clicker message="stooop!" buttonText="Dont Click!" />
    </div>
  );
}

export default App;