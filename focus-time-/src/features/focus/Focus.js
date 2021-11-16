//import * as React from 'react';
import React,{useState} from 'react';
import { Text, View, StyleSheet,Platform } from 'react-native';
import {TextInput} from "react-native-paper";
import {RoundedButton} from "../../component/RoundedButton";
import{fontSizes,spacing} from "../utils/size";
import {colors} from "../utils/color";
export const Focus = ({addSubject})=> {
  const [tmpItem, setTmpItem]=useState(null)
  return (
    <View style={styles.container}>
     <View style={styles.titleContainer}>
        <Text style={styles.title}> what would you like to focus on?</Text>
        <View style={styles.inputContainer}>
      <TextInput style={{flex:1,marginRight:spacing.md}}
      onSubmitEditing={({nativeEvent})=>{setTmpItem(nativeEvent.text)}}/>
      <RoundedButton size={50}title="+" onPress={()=>{addSubject(tmpItem)}}/>
    </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:0,
},
titleContainer:{
  flex:1,
  padding:spacing.md//Platform.OS==='android' ? 16:50,
  //justifyContent:'center',
},
title:{
  color:colors.white,
  fontWeight:'bold',
  fontSize:fontSizes.lg,
},
inputContainer:{
  paddingTop:spacing.md,
flexDirection:'row',
alignItems:"center",








}
});
