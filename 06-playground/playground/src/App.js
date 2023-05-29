import './App.css';
import Card from './components/Card/Card';

function App() {
  const data = [
    { title: "hello", description: "world", tags: ['#homework', '#testing', '#anotherhashtag'] },
    { title: "Chicken Rice", description: "your favourite grilled chicken recipe", tags: ['🐔 chicken', '🤑 budget', '💪 high protein'] },
    { title: "Beef Bulgogi", description: "sweet, savoury, sliced beef", tags: ['🇰🇷 Korean', '🐮 beef', '🤤 top rated'] }
  ]
  console.log(data)

  return (
    <div className="App">
      <header className="App-header">
        {data.map((item) => {
          return <Card props={ item } />
        })}
      </header>
    </div>
  );
}

export default App;
