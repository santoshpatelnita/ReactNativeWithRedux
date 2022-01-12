import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


export default(props) => {


    return (
        <View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>

<TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
    {/* <Text style={{ fontSize:25}}>{props.route.params.itemId}</Text>
    <Text style={{ fontSize:25}}>{props.route.params.otherParam}</Text> */}

<Text style={{ fontSize:25}}>Go To Details...</Text>
</TouchableOpacity>
</View>
    );
  }


  //export default Details;