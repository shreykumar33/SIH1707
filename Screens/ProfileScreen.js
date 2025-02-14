import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import tw from 'twrnc';
import Navbar from './Navbar';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>GeoMav</Text>
      </View>

      {/* Profile Picture and Info */}
      <View style={styles.profileContainer}>
        <Image source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg' }} style={styles.profilePic} />
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileRole}>Employee</Text>
      </View>

      {/* Attendance Section */}
      <View style={styles.attendanceSection}>
        <Text style={styles.attendanceText}>Your attendance was marked successfully</Text>
        <Button mode="contained" style={styles.attendanceButton} labelStyle={styles.buttonText}>
          Let's begin!
        </Button>
        <Text style={styles.punchTimeText}>Punched in: 09:24 AM</Text>
      </View>

      {/* Work Logs */}
      <View style={styles.workLogsContainer}>
        <Text style={styles.workLogsTitle}>Recent Work Logs</Text>
        <View style={styles.workLogItem}>
          <Text style={styles.workLogDate}>14/09/24</Text>
          <Text style={styles.workLogDuration}>6.5 hrs</Text>
        </View>
        <View style={styles.workLogItem}>
          <Text style={styles.workLogDate}>13/09/24</Text>
          <Text style={styles.workLogDuration}>8.1 hrs</Text>
        </View>
        <View style={styles.workLogItem}>
          <Text style={styles.workLogDate}>12/09/24</Text>
          <Text style={styles.workLogDuration}>7 hrs</Text>
        </View>
      </View>

      {/* Chatbot Section */}
      <TouchableOpacity style={styles.chatBotContainer}>
        <Text style={styles.chatBotText}>
          # To raise a query, contact GeoMav AI Chatbot
        </Text>
        <MaterialCommunityIcons name="robot" size={30} color="#ffffff" />
      </TouchableOpacity>

      {/* Spacer for content */}
      <View style={styles.contentSpacer} />

      {/* Navbar at the bottom */}
      <Navbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f9fa', // Light gray background
  },
  header: {
    height: 80,
    backgroundColor: '#1e40af', // Blue-600
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    paddingTop: 40, // To make space for the status bar
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#1e40af',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827', // Dark gray
    marginTop: 10,
  },
  profileRole: {
    fontSize: 16,
    color: '#6b7280', // Light gray
    marginTop: 5,
  },
  attendanceSection: {
    backgroundColor: '#1e40af', // Blue-600
    marginTop: 30,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginHorizontal: 15,
    elevation: 5,
    alignItems: 'center',
  },
  attendanceText: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 10,
  },
  attendanceButton: {
    backgroundColor: '#ffffff',
    width: '80%',
    paddingVertical: 12,
    marginVertical: 15,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e40af', // Blue-600
  },
  punchTimeText: {
    fontSize: 14,
    color: '#ffffff',
  },
  workLogsContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  workLogsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e40af', // Blue-600
    marginBottom: 15,
  },
  workLogItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  workLogDate: {
    fontSize: 16,
    color: '#374151', // Dark gray
  },
  workLogDuration: {
    fontSize: 16,
    color: '#059669', // Green-600
  },
  chatBotContainer: {
    backgroundColor: '#1e40af', // Blue-600
    alignItems: 'center',
    paddingVertical: 15,
    marginTop: 20,
    marginHorizontal: 15,
    borderRadius: 15,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  chatBotText: {
    fontSize: 14,
    color: '#ffffff',
    marginRight: 10,
  },
  contentSpacer: {
    flex: 1, // This will take up the remaining space, pushing the navbar to the bottom
  },
});