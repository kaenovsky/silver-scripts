import './App.css';
import ColorList from './ColorList';
import SlotMachine from './Slot';
import Clicker from './Clicker';
import Toggler from './Toggler';

function App() {
  return (
    <div className="App">
      <h2>Slot machine with props</h2>
      <section className='slots'>
        <SlotMachine val1="🍒" val2="🍒" val3="💀" />
        <SlotMachine val1="🍒" val2="🥑" val3="🍒" />
        <SlotMachine val1="💀" val2="💀" val3="🍒" />
        <SlotMachine val1="🥑" val2="🥑" val3="🥑" />
        <SlotMachine val1="🍒" val2="🍌" val3="🍌" />
        <SlotMachine val1="🍒" val2="🍒" val3="🍒" />
      </section>
      <section>
        <h2>Toggle emoji with useState</h2>
        <Toggler />
        <h2>Color list with props</h2>
        <ColorList colors={["red", "pink", "indigo"]} />
        <ColorList colors={["darkblue", "gold", "teal"]} />
        <h2>Clicker component with props</h2>
        <Clicker message="wohooo!" buttonText="Click here!" />
        <Clicker message="stooop!" buttonText="Dont Click!" />
      </section>
    </div>
  );
}

export default App;