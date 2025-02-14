import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';
import tw from 'twrnc';
import Navbar from './Navbar';

export default function DashboardScreen() {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>GeoMav</Text>
      </View>

      {/* Dashboard Content */}
      <View style={styles.dashboardContent}>
        {/* Title */}
        <Text style={styles.title}>Employee Dashboard</Text>

        {/* Map Section */}
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 26.8467,
              longitude: 80.9462,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker
              coordinate={{
                latitude: 26.8467,
                longitude: 80.9462,
              }}
              title="Current Location"
            />
          </MapView>
        </View>

         {/* Information Section */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            UID: **** 1234 <Text style={styles.infoDate}>17/09/24</Text>
          </Text>
          <Text style={styles.statusText}>
            Current Status: <Text style={styles.statusValue}>In Campus</Text>
          </Text>
        </View>

        {/* Modern and Sleek Info Section */}
        <View style={styles.sleekContainer}>
          <Text style={styles.attendanceMessage}>
            Your attendance was marked successfully
          </Text>

          {/* Start Button */}
          <Button
            mode="contained"
            style={styles.startButton}
            labelStyle={styles.startButtonLabel}
            onPress={() => console.log('Attendance Begin')}
          >
            Let’s begin!
          </Button>

          {/* Chatbot Query */}
          <TouchableOpacity>
            <Text style={styles.chatQuery}>
              #To raise a query GeoMav AI chatbot
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Navbar */}
      <Navbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    infoContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  infoText: {
    fontSize: 18,
    color: '#1e3a8a', // Blue-700
    marginVertical: 5,
  },
  infoDate: {
    fontWeight: 'bold',
    color: '#111827', // Black
  },
  statusValue: {
    fontWeight: 'bold',
    color: '#059669', // Green-600
  },
  header: {
    height: 70,
    backgroundColor: '#1e40af', // Blue-600
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40, // To make space for the status bar
    elevation: 5, // Adding shadow for modern effect
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  dashboardContent: {
    flex: 1,
    backgroundColor: '#f0f9ff', // Light blue background for content
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1e40af', // Blue-600
    marginTop: 15,
  },
  mapContainer: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    overflow: 'hidden',
    marginVertical: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  map: {
    flex: 1,
  },
  sleekContainer: {
    backgroundColor: '#1e40af', // Sleek blue background
    width: '90%',
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 15,
    elevation: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  attendanceMessage: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: '#ffffff', // White button for contrast
    width: '80%',
    paddingVertical: 12,
    marginVertical: 15,
    borderRadius: 30, // Rounded button
    elevation: 5, // Shadow for button
  },
  startButtonLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e40af', // Blue text on white
  },
  chatQuery: {
    fontSize: 14,
    color: '#ffffff', // White text for consistency
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});