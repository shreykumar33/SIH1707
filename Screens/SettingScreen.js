import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Navbar from './Navbar';  // Import Navbar

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Settings Content */}
      <View style={styles.settingsContainer}>
        <Text style={styles.settingsTitle}>Settings</Text>
        
        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="person" size={24} color="blue" />
          <Text style={styles.settingText}>Edit Profile</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="notifications" size={24} color="blue" />
          <Text style={styles.settingText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="log-out" size={24} color="blue" />
          <Text style={styles.settingText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navbar */}
      <Navbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  settingsContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  settingsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  settingText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#333',
  },
});