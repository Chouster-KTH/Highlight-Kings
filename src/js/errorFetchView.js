import '../css/error.css'
import {Link} from 'react-router-dom';

function ErrorFetch(){
  return (<div className="error">
    <h2>Something went wrong</h2>
    <div>Page is currently under heavy load, wait a minute before trying again</div> 
    <Link to="/">Return home</Link>
  </div>);
}

export default ErrorFetch;