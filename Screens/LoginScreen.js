import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, Text, useTheme } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

export default function LoginScreen({ navigation }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();

  const handleSubmit = () => {
    // Handle login or registration logic here
    // console.log(isLogin ? 'Logging in...' : 'Registering...', { email, password, name });
      return navigation.navigate('Home')
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-100`}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={tw`flex-1`}
      >
        <ScrollView contentContainerStyle={tw`flex-grow justify-center p-6`}>
          <View style={tw`bg-white p-8 rounded-2xl shadow-md`}>
            <Text style={tw`text-3xl font-bold mb-6 text-center text-blue-600`}>
              {isLogin ? 'Login' : 'Create Account'}
            </Text>
            
            {!isLogin && (
              <TextInput
                label="Full Name"
                value={name}
                onChangeText={setName}
                mode="outlined"
                left={<TextInput.Icon icon="account" />}
                style={tw`mb-4`}
              />
            )}
            
            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              mode="outlined"
              keyboardType="email-address"
              left={<TextInput.Icon icon="email" />}
              style={tw`mb-4`}
            />
            
            <TextInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              mode="outlined"
              secureTextEntry={!showPassword}
              right={
                <TextInput.Icon 
                  icon={showPassword ? "eye-off" : "eye"} 
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
              left={<TextInput.Icon icon="lock" />}
              style={tw`mb-6`}
            />
            
            <Button 
              mode="contained" 
              onPress={handleSubmit}
              style={[tw`mt-4 py-2 bg-blue-600`, { elevation: 5 }]}
              labelStyle={tw`text-lg font-semibold`}
            >
              {isLogin ? 'Login' : 'Register'}
            </Button>
            
            <View style={tw`flex-row items-center justify-center mt-6`}>
              <Text style={tw`mr-2`}>
                {isLogin ? "Don't have an account?" : "Already have an account?"}
              </Text>
              <Button 
                mode="text" 
                onPress={() => setIsLogin(!isLogin)}
                labelStyle={tw`text-blue-600 font-semibold`}
                
              >
                {isLogin ? 'Register' : 'Login'}
              </Button>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}