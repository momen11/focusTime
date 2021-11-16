//import * as React from 'react';
import React, { useState } from 'react';
import { Text, View, StyleSheet,Platform } from 'react-native';
import Constants from 'expo-constants';
import {Focus} from './src/features/focus/Focus';
import {colors} from "./src/features/utils/color";
import {Timer} from "./src/features/timer/timer";
import{fontSizes,spacing} from "./src/features/utils/size";
export default function App() {
  const [focusSubject, setFocusSubject] = useState("gardening");
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject={focusSubject}/>
       // <Text> Here is where im going to build a timer</Text>
      ) : (
       <Focus addSubject={setFocusSubject}/>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
backgroundColor:colors.darkBlue,
    paddingTop:Platform.OS==='ios'?spacing.md:spacing.lg,
  },
});
