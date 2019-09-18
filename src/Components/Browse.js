import React, {Component} from 'react';
import store, {UPDATE_PUPPERS} from '../redux/store';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class Browse extends Component {
   constructor() {
      super();
      this.state = {
         puppers: []
      };
   };
   componentDidMount() {
      Axios
         .get('/api/puppers')
         .then(res => {
            store.dispatch(
               {
                  type: UPDATE_PUPPERS,
                  payload: res.data
               }
            )
         })
         .finally(() => {
            this.setState({ puppers: store.getState().puppers })
         })
   }
   render() {

      const {puppers} = this.state;
      // const puppers = store.getState().puppers; // this way to not deal with local state and get directly from redux store. Wouldn't need the .finally in componentDidMount

      const puppersMapped = puppers.map((pupper, i) => {
         return (
            <Link to={`/${pupper.id}`} key={i}>
               <div>
                  <h1>Pupper Name: {pupper.name}</h1>
                  <h2>Pupper Breed: {pupper.breed}</h2>
                  <h3>Pupper Age: {pupper.age}</h3>
               </div>
            </Link>
         )
      })

      return (
         <div id='Browse'>
            <h1 style={{textDecoration: 'underline'}}>Browse Our Latest Puppers!</h1>
            {puppersMapped}
         </div>
      );
   }
}

export default Browse;