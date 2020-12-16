import Sidebar from './Components/Sidebar'

function App() {
  return (
    <div className="App">
     <div className="container">
     <div className="row">
     <div className="col-lg-3">
        
          <Sidebar/>
        
      </div>
        <div className="col-lg-9">
          <div className="app_main">
            Main
          </div>
        </div>
     </div>
     </div>
    </div>
  );
}

export default App;
