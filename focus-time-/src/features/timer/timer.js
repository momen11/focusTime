import React,{useState} from "react";
import {Text,View,StyleSheet} from "react-native";
import {colors} from "../utils/color";
import{fontSizes,spacing} from "../utils/size";
import {Countdown} from "../../component/Countdown";
import {RoundedButton} from "../../component/RoundedButton";
export const Timer=({focusSubject})=>{
  const [isStarted,setIsStarted]=useState(false);
  return(
  <View style={styles.container}>
  <View style={styles.Countdown}>
     <Countdown isPaused ={!isStarted} />
  </View>
    <View style={{paddingTop:spacing.xxl}}>
  
        <Text style={styles.title}> Focusing on:</Text>
         <Text style={styles.task}>{focusSubject}</Text>
    </View>
    <View style={styles.buttonWrapper}>
    { isStarted ?(
       <RoundedButton title="pause"  onPress={() => setIsStarted(false)} />
    
    ):(
   <RoundedButton title="start"  onPress={() => setIsStarted(true)}/>
   
    )}
    </View>
  </View>
  );


};
const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  title:{
    color:colors.white,
    textAlign:'center'
  },
   task:{
    color:colors.white,
    textAlign:'center',
    fontWeight:'bold',
  },
  Countdown:{
    flex:0.5,
    alignContent:'center',
    justifyContent:'center',
  },
buttonWrapper:{
  flex:0.3,
  padding:15,
  justifyContent:'center',
  alignItems:'center',
}

});
