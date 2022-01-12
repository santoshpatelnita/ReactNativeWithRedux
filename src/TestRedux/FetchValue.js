import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { useSelector, useDispatch} from 'react-redux';

export default FetchValue = () => {

    const data = useSelector(state => state);

     const dispatch = useDispatch();

    return (
      <View>
          <Text style={{ fontSize:30}}>{data.name}</Text>

          <TouchableOpacity onPress={() => dispatch({type:'A', payload:'Naman'})}>
          <Text style={{ fontSize:30}}>From A</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => dispatch({type:'B', payload:'Rishab'})}>
          <Text style={{ fontSize:30}}>From B</Text>
          </TouchableOpacity>
      </View>
    )
}