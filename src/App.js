// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import Movie from './components/Movies';

function App() {
  return (
      <main className='container'>
        <h1>Get Whole information of Movies and Genre</h1>
        <Movie/>
      </main>
  );
}

export default App;
