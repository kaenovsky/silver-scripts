import './App.css';
import ColorList from './ColorList';
import SlotMachine from './Slot';
import Clicker from './Clicker';
import Toggler from './Toggler';
import ColorBoxes from './ColorBoxes';
import ScoreKeeper from './ScoreKeeper';
import EmojiClicker from './EmojiClicker';

const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];

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
        <h2>Boxes that changes color (props + useState)</h2>
        <ColorBoxes colors={colors} />
        <h2>Score keeper with useState</h2>
        <ScoreKeeper />
        <h2>Add emojis to Array with useState</h2>
        <EmojiClicker />
      </section>
    </div>
  );
}

export default App;