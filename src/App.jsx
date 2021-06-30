import {Route} from 'solid-app-router'
import {Portal} from 'solid-js/web'
import './App.css'

const App = () => (
  <div>
    <Route></Route>

    <Portal mount={document.head}>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"/>
    </Portal>
  </div>
)

export default App