import Navbar from './modules/Navbar';
import Home from './modules/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './modules/Create';
import BlogDetails from './modules/BlogDetails';
import NotFound from './modules/NotFound';


function AppRouter(){


  return(
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>        
  );
};

export default AppRouter;