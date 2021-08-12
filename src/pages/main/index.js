//Componentes, hooks e manipularadores react
import React,{useEffect} from "react";
import {Text, View } from 'react-native';
import { useState } from "react";

//Estilos e componentes
import {styles} from "./style";
import UserTextArea from "../../components/usertextarea/UserTextArea";

//Camada de Serviços
import messagingOp from "../../model/services/messagingOp";

export default function Main({navigation}) {

  const [getMessaginContents] = messagingOp();
  const [message,setMessage] = useState(null);

  useEffect(()=>{
      getMessaginContents(setMessage);
    },[]
  );

  return (
    <View style={styles.container}>
      <View style={styles.marginTop30}>
        <UserTextArea />
      </View>
    </View>
  );
}