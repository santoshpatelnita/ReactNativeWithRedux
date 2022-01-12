import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';

export default({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>

        <TouchableOpacity onPress={() => props.navigation.navigate('Details')}>
            <Text>Go To Details...</Text>
        </TouchableOpacity>
      </View>
    );
  }

  //export default Home;