import React from 'react';
import './App.css';
import './Edit.css';
import PostForm from './PostForm';
import PostFeed from './PostFeed';
import PostEdit from './PostEdit';
import { Route, BrowserRouter  as Router ,Switch  } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const USER_POST ='USER_POST';

// Postaction
export const userAction =() => ({type:USER_POST})


// Postreducer

const postReducer =(state,actions) =>{

console.log(actions)

switch (actions.type) {
  case USER_POST:
return state = ""
  default:
  return state = "No selected"
}
}


let store =createStore(postReducer);


class App extends React.Component<{}> {
  render() {

    return (
        <Provider store={store}>
      <Router>
      <div className='App'>
      <Switch>
            <Route exact path='/newpost' component={PostForm} />
            <Route exact path='/editpost' component={PostEdit} />
            <Route  path='/' component={PostFeed} />
          </Switch>
          </div>
</Router>
  </Provider>
   );

  }

}

export default App;
