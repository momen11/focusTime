import React,{useState, useEffect} from "react";
import {Text, View,StyleSheet,ComponentProvider} from "react-native";
import {fontSizes,spacing} from "../features/utils/size";
import {colors} from "../features/utils/color";

const minutesToMillis =(min)=>min*1000*60;

const formatTime  = (time) => time < 10 ? time : time;

export const Countdown = ({
  minutes = 20,
 isPaused,
})=>{
  const interval=React.useRef(null);
const countDown =() => {
  setMillis((time)=>
  {
    if(time===0){
      return time;

    }
    const timeeLeft = time-1000;
    return timeeLeft;
  })
}

useEffect(()=>{
if(isPaused){
  return;
}

  interval.current=setInterval(countDown,1000);
  return()=>clearInterval(interval.current)
}, [isPaused])

  const[millis,setMillis] = useState(minutesToMillis(minutes));
  const minute = Math.floor(millis/1000/60)%60;
  const seconds = Math.floor(millis/1000)%60;
  return(
    <Text style={styles.text}>{formatTime(minute)}:{formatTime(seconds)}</Text>
  )
}

const styles = StyleSheet.create({
  text:{
    fontSize:fontSizes.xxxl,
    fontWeight:'bold',
    color:colors.white,
    padding:spacing.lg,
    backgroundColor:'rgba(94,132,226,0.3)',
  }
})