import './App.css';
import Issues from './components/Issues';
import { useError } from './hooks'
import Snackbar from '@material-ui/core/Snackbar';

function App() {
  const error = useError()
  return (
    <div className="App">
      <h1>Issue tracker:</h1>
      <Issues />
      {error && <Snackbar
        open={Boolean(error)}
        autoHideDuration={6000}
        message={error.message}
      />}
    </div>
  );
}

export default App;
