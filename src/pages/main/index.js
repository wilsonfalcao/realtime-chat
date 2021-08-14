//Componentes, hooks e manipularadores react
import React from "react";
import { View } from 'react-native';

//Estilos e componentes
import {styles} from "./style";
import UserTextArea from "../../components/usertextarea/UserTextArea";
import MessageArea from "../../components/messagearea/MessageArea";

export default function Main({navigation}) {

  return (
    <View style={styles.container}>
      <View style={styles.marginTop30}>
        <MessageArea />
        <UserTextArea />
      </View>
    </View>
  );
}