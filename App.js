import React from 'react';
import Navigator from './src/setup/routes';
import store from './src/store';
import {Provider} from 'react-redux';

class App extends React.Component {

  render() {
    return (
    	<Provider store={store}>
      		<Navigator />
      	</Provider>
    );
  }
}

export default App;