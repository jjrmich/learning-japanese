import './App.css';
import { words } from './words';

function App() {
  function renderJapanese(jpn) {
    if (typeof jpn === 'string' || jpn instanceof String) {
      return jpn;
    }
    else {
      const result = [];
      jpn.forEach(val => {
        if (typeof val === 'string' || val instanceof String) {
          result.push(val);
        }
        else {
          // handle ruby characters
            result.push(<ruby>{val[0]}<rt>{val[1]}</rt></ruby>);
        }
      })
      return result;
    }
  }

  function renderWords(section) {
    return words[section].map(word => (
      <div className='col-sm-4 col-md-2 gy-3'>
        <div className='japanese-card card text-center'>
          <div className='card-body'>
            <h3 className='card-title'>
              {/* <ruby>{word[0][0]}<rt>{word[0][1]}</rt></ruby> */}
              {renderJapanese(word.japanese)}
            </h3>
            <p class='card-text'>{word.english}</p>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <div className="App">
      <div className='container py-4'>
        <div className='row mb-5'>
          {renderWords('Hiragana 1')}
        </div>
        <div className='row'>
          {renderWords('Hiragana 2')}
        </div>
      </div>
    </div>
  );
}

export default App;
