import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,
   Text, 
   View,
  SafeAreaView,
  TextInput,
  StatusBar,
  Button
   } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden/>
      <Text Style = {{fontSize: 14 , color : 0000}}>
        Email
        <TextInput 
	Style={styles.input}
	Placeholder='your@address.net'
/>
<Text Style = {{fontSize: 14 , color : 0000}}>
Password
<TextInput 
	Style={styles.input}
	Placeholder='password'
/>
<Button title='SignIN' onPress={() => console.log (“Button tapped ”)}/> 
</SafeAreaView>
);
Input : {
Width : “70%”,
BackgroundColor: “ffff”,
Padding: 15,
margineBottom: 10,
}
}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
