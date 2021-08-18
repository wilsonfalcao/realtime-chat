import {StyleSheet} from "react-native";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent:"center",
      alignItems:"center",
    },
    buttonFont:{
      color:"rgb(255,255,255)",
      fontWeight:"300",
      fontSize:24,
    },
    buttonStyle:{
      paddingHorizontal:50,
      paddingVertical:12,
      borderRadius:30,
      justifyContent:"center",
      alignItems:"center",
  },
  buttonAlert:{
    backgroundColor:"red",
  },
  buttonSucess:{
    backgroundColor:"green",
  },
});
  