import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalState from '../Context/GlobalState';
import SelfLearn from './SelfLearn';

const App = () => {
  return ( 
    <div>
      <BrowserRouter>
        <GlobalState>
          <SelfLearn/>
        </GlobalState>
      </BrowserRouter>
    </div>
   );
}
 
export default App;