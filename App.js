import React from 'react';

import { View, Text, StyleSheet } from 'react-native'

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MyReducers } from './src/TestRedux/MyReducers';
import FetchValue from './src/TestRedux/FetchValue';

const store = createStore(MyReducers);

const App = () => {
return(   
     <View>
     <Provider store={store}>
         <FetchValue />
     </Provider>
     </View>
    )
}

export default App;


const styles = StyleSheet.create({

  viewstyle : { justifyContent:'center', alignItems:'center', flex:1}
})