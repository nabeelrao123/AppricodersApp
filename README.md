
# appricodersApp

This is a minimal Expo React Native app demonstrating:
- Authentication state with Redux Toolkit
- Persistence across cold restarts using redux-persist + AsyncStorage
- Mock login (any non-empty email + password accepted)
- Logout clears persisted state

## How to run

1. Install Expo CLI (if you don't have it):
   ```bash
   npm install -g expo-cli
   ```
2. Extract the project and install dependencies:
   ```bash
   cd appricodersApp
   npm install
   ```
3. Run the app:
   ```bash
   expo start
   ```
   Use a simulator or Expo Go on your phone.
