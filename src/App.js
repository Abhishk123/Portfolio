import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import {BrowserRouter as Router,Redirect,Route, Switch} from 'react-router-dom'
import About from './Components/About'
import Projects from './Components/Projects';
import Resume from './Components/Resume';

function App() {
  return (
    <Router>
    <div className="App">
     <div className="container">
     <div className="row">
     <div className="col-lg-3">
        
          <Sidebar/>
        
      </div>
        <div className="col-lg-9">
          <div className="app_main">
            <Navbar/>
            <Switch>
            <Route path='/' exact>
               <About/>
            </Route>
            <Route path='/projects' component={Projects} />
            <Route path='/resume' component={Resume}/>

            <Route>
              <Redirect to='/'/>
            </Route>
            </Switch>
            
          </div>
        </div>
     </div>
     </div>
    </div>
    </Router>
  );
}

export default App;
