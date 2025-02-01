import React from 'react';
import { View, Text, Button, Linking } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to My Mobile App</Text>
      <Button
        title="Visit GitHub Repo"
        onPress={() => Linking.openURL('https://github.com/lovetechcyber/hngtask-0.git')}
      />

      <Button
      title="Visit GitHub Repo"
      onPress={() => Linking.openURL('https://hng.tech/react-native')}
    />
    </View>
  );
};

export default App;
