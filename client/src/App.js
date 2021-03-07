import Snackbar from '@material-ui/core/Snackbar';
import './App.css';
import Issues from './components/Issues';
import { useError } from './hooks'

function App() {
  const [error, setError] = useError()
  return (
    <div className="App">
      <h1>Issue tracker</h1>
      <Issues />
      {error && <Snackbar
        autoHideDuration={5000}
        open={Boolean(error)}
        onClose={() => setError()}
        message={error.message}
      />}
    </div>
  );
}

export default App;
