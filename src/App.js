import './App.css';
import { words } from './words';

function App() {
  function renderJapanese(jpn) {
    if (typeof jpn === 'string' || jpn instanceof String) {
      return <ruby className='japanese-translation'>{jpn}<rt>　</rt></ruby>;
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
      <div className='col-6 col-md-4 col-lg-3 col-xl-3 py-2'>
        <div className='japanese-card card text-center'>
          <div className='card-body'>
            <h3 className='card-title'>
              {/* <ruby>{word[0][0]}<rt>{word[0][1]}</rt></ruby> */}
              {renderJapanese(word.japanese)}
            </h3>
            <p class='card-text english-text'>{word.english}</p>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <div className="App">
      <div className='container py-4'>
        <h2 className='section-title'>Hiragana 1</h2>
        <div className='row japan-row py-2'>
          {renderWords('Hiragana 1')}
        </div>
        <hr />
        <h2 className='section-title blue'>Hiragana 2</h2>
        <div className='row japan-row py-2'>
          {renderWords('Hiragana 2')}
        </div>
        <hr/>
        <h2 className='section-title red'>Hiragana 3</h2>
        <div className='row japan-row py-2'>
          {renderWords('Hiragana 3')}
        </div>
        <hr/>
        <h2 className='section-title purple'>Hiragana 4</h2>
        <div className='row japan-row py-2'>
          {renderWords('Hiragana 4')}
        </div>
        <hr/>
        <h2 className='section-title yellow'>Greetings</h2>
        <div className='row japan-row py-2'>
          {renderWords('Greetings')}
        </div>
      </div>
    </div>
  );
}

export default App;
