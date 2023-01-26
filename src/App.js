import Dictionary from './Dictionary';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-header">
          <h1>Dictionary</h1>
        </div>
        <main>
          <Dictionary defaultKeyword="code" />
        </main>
        <footer>
          <small>
            {" "}
            Coded by{" "}
            <a
              href="https://www.sebastiancseithel.com"
              taget="_blank"
              rel="noopener noreferrer"
            >
              Sebastian Coriander Seithel
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/CorianderSeb/dictionary-app"
              target="_blank"
              rel="noopener noreferrer"
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
