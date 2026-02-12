import "./App.css"
const App = () => {
  return (
    <div>
      <h1>Counter</h1>
      <div>
        <button>+</button>
        <button style={{margin: "0 20px"}}>Reset</button>
        <button>-</button>
      </div>
      <div style={{margin: "10px 0"}}>
        <input type="text"
        className="input-box"
        />
        <button style={{margin:"0 8px"}}>set</button>
      </div>
    </div>
  )
}

export default App