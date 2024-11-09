import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import tw from 'twrnc';

export default function HomeScreen({ navigation }) {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-3xl font-bold mb-6 text-center text-blue-600`}>Home Screen</Text>
      <Button 
              mode="contained" 
              onPress={() => navigation.navigate('Login')}
              style={[tw`mt-4 py-2 bg-blue-600`, { elevation: 5 }]}
              labelStyle={tw`text-lg font-semibold`}
            >
                <Text style={tw`mb-6 text-center text-white`}>
                    Back to Login
                </Text>
            </Button>
    </View>
  );
}
