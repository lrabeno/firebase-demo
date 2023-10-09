import './App.css';
import { Auth } from './components/auth';
import { Movies } from './components/movies';

function App() {
  return (
    <div className="App">
      <p>Louis page</p>
      <Auth />
      <Movies />
    </div>
  );
}

export default App;
