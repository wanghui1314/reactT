import './App.css'
import {Switch,Route,Redirect} from 'react-router-dom'
import Index from './components/Index/Index'
import Login from './components/Login/Login'
import Food from './components/Food/Food'
import FoodDetail from './components/FoodDetail/FoodDetail'
import Movie from './components/Movie/Movie'
import MovieDetail from './components/MovieDetail/MovieDetail'
import Myroute from './components/Myroute/Myroute'
function App() {
  // let name='123'
  return (
    <div className="App">
        <Switch>
            <Route path='/login' component={Login}></Route>
            <Myroute path='/index' component={Index}></Myroute>
            <Myroute path='/food' component={Food}></Myroute>
            <Myroute path='/foodDetail/:id' component={FoodDetail}></Myroute>
            <Myroute path='/movie' component={Movie}></Myroute>
            <Myroute path='/movieDetail/:id' component={MovieDetail}></Myroute>
            <Redirect to='/login'></Redirect>
        </Switch>
    </div>
  );
}

export default App;
