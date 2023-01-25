import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState("code");
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function search() {
        let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
    

   function handleKeywordChange(event) {
      setKeyword(event.target.value);
    }
function load() {
setLoaded(true);
search();
}

if (loaded) {
return (
  <div className="Dictionary">
    <section>
        <h2>What word do you want to look up?</h2>
      <form onSubmit={handleSubmit}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} defaultValue={"code"}/>
        <div className="hint">
            Suggested Words: music, love, flower, cat
        </div>
      </form>
    </section>
      <Results results={results} />
  </div>
);
} else {load(); return "Loading..." }}