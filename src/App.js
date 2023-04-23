import List from "./List"
var items=[
  {
    "text":"one"
  },
  {
    "text":"two"
  },
  {
    "text":"three"
  }
]
function App() {
  return (
    <div className="App">
      <List items={items}/>
     
    </div>
  );
}

export default App;
