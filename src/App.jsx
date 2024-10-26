import Main from './components/main.jsx';
import Card from './components/Card.jsx';
import Grid from './components/Grid.jsx';
function App() {

  return (
    <>
    <Main></Main>
    <img src="/wave.svg" alt="" />
    <div style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '1000px',
          padding: '0 1rem 1rem 1rem',
          width: '90%'
      }} className='col'>
      <div style={{
        color: '#151418',
        fontSize: '28px',
        fontWeight: '700',
        }}>Project
      </div>
      </div>
      <Grid/>
      <footer>
            ``
      </footer>
    </>

  )
}

export default App
