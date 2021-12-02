import logo from './logo.svg';
import './App.css';


function App(props) {
  const hlArray = props.highlights.response;
  console.log(hlArray);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Highlight Kings</h1>
        {hlArray.map(highLight => (
        <div className="highlights">
          <p>{highLight.title}</p>    
          <a href={highLight.matchviewUrl} target="_blank" rel="noreferrer">
            <img src={highLight.thumbnail} 
            alt="highlight"
            height='150'
            width='150'/>
            </a><br/>
        </div>
        )
        )}
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.g
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

        </a>
      </header>
    </div>
  );
}

export default App;
