
import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../slices/authSlice';
import { persistor } from '../store';

export default function HomeScreen() {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const onLogout = async () => {
    dispatch(logout());
    try {
      await persistor.purge();
    } catch (e) {
      console.warn('Failed to purge persist store', e);
    }
    Alert.alert('Logged out', 'You have been logged out.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome{user && user.email ? `, ${user.email}` : ''}!</Text>
      <Text style={{marginBottom:20}}>This is the Home screen. Close the app completely and reopen — if logged in, you will return here automatically.</Text>
      <Button title="Logout" onPress={onLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,justifyContent:'center',alignItems:'center',padding:16,backgroundColor:'#fff'},
  welcome:{fontSize:22,marginBottom:8}
});
