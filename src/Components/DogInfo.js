import React from 'react';

function DogInfo(props) {

   return (
      <div id='DogInfo'>
         <h1>{props.match.params.dogId}</h1>
      </div>
   );
}

export default DogInfo;