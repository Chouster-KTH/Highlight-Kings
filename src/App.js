import logo from './logo.svg';
import './App.css';


function App(props) {
  const hlArray = props.highlights.response;
  console.log(hlArray);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Highlight Kings {hlArray[1].title}</h1>
        <div className="highlights">
          <a href={hlArray[0].matchviewUrl} target="_blank" rel="noreferrer">
            <img src={hlArray[0].thumbnail} 
            alt="highlight"
            height='150'
            width='150'/>
            </a><br/>
            <p>{hlArray[0].title}</p>
            
        </div>
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
