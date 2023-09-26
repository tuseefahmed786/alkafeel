import logo from './logo.svg';
import './App.css';
import "./style/allmediaquery.css"
import Topnavbar from "./components/topnavbar/topnavbar"
import Main from "./components/mainhero/main"
function App() {
  return (
  <> 
  <div className='app-wrapper'>
  <Topnavbar/>
  <Main/>
  </div>
  </>
  );
}

export default App;
