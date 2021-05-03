import * as React from 'react';
import {Button, View, Text, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// @ts-ignore

export function HomeScreen({ navigation }) {

    function _logOut(){
        console.log('deco');
        navigation.navigate('Login');

    }


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
        <Text>Test</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
        <Button
            title="Déconnexion"
            onPress={() => _logOut()}
        />

    </View>
  );
}
