import Dictionary from './Dictionary';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <small>
            {" "}
            Coded by{" "}
            <a
              href="www.sebastiancseithel.com"
              taget="_blank"
              rel="noopener norefferer"
            >
              Sebastian Coriander Seithel
            </a>
            and{" "}
            <a
              href="https://github.com/CorianderSeb/dictionary-app"
              target="_blank"
              rel="noopener norefferer"
            >
              open sourced on GitHub.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
