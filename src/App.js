import './App.css';
import LatestHighlights from './js/latestHighlightsView';


function App(props) {
  const hlArray = props.highlights.response;
  return (
    LatestHighlights(hlArray)
  );
}

export default App;
