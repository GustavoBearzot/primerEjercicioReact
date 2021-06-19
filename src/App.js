import React from 'react';
import HolamundoId from './components/GreetingComponent/GreetingComponent';
import SoygustavoId from './components/NameComponent/NameComponent';


function App() {

  return (
    <div><HolamundoId hola="World" />
      <SoygustavoId />
    </div>

  )


  /* class App extends React.Component {
          render() {
      return (
        <div><HolamundoId hola="World" /><SoygustavoId /></div>
        )
    }
  } */
}


export default App;
