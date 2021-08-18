import {StyleSheet} from "react-native";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      resizeMode: 'cover',
      backgroundColor: 'rgb(255,255,255)',
    },
    marginTop30:{
      marginTop:60,
      flex:1,
      flexDirection:"column",
    },
    styleMessageArea:{
      height:"100%",
    },
    styleSendArea:{
      width:"100%",
      position:"absolute",
      zIndex:999,
      bottom:0,
    },
});
  