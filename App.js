
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { View, ActivityIndicator } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';

import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';

function Root() {
  const auth = useSelector(state => state.auth);
  return auth.user ? <HomeScreen /> : <LoginScreen />;
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<View style={{flex:1,justifyContent:'center',alignItems:'center'}}><ActivityIndicator size="large" /></View>} persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
}
