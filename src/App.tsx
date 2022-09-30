import './App.css';
import Checky from './components/Checky/Checky';
import Select from './components/Select/Select';

type ReactComponent = JSX.Element;

const App: React.FC = (): ReactComponent => (
  <div className='App'>
    <header className='App-header' role={'banner'}>
      <h1>Learning React Testing Library</h1>
    </header>
    <section>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '80%',
          height: '75px',
          margin: '0 auto',
          border: '1px solid #eb1010',
          background: '#cdcdcd',
          padding: '20px 0',
        }}
      >
        <Select />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '80%',
          height: '75px',
          margin: '0 auto',
          border: '1px solid #3e32ac',
          background: '#ebd2d2',
          padding: '20px 0',
        }}
      >
        <Checky />
      </div>
    </section>
  </div>
);

export default App;
