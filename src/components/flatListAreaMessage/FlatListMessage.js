//Componentes e dependencias de sistema
import React from "react";
import { View, Text, Image } from "react-native";

//Estilos e componentes
import {styles} from "./style";

//Componentes de Visualização de posicionamento da mensagem.
export const ViewToMessage = ({item}) =>{

    return(
        <View key={item.msgid} style={styles.alignBodyMessageTo}
        >
            <View style={styles.bodyMessageTo}
            >
                <Text 
                    style={styles.fontBodyMessage}
                >
                    {item.body}
                </Text>
            </View>
            
            <View style={styles.imageCircle40I}>
                <Image style={styles.imageRadius50} source={{uri:item.profile}} />
            </View>
        </View>
    );

}

export const ViewFromMessage = ({item}) =>{
    return(
        <View key={item.msgid} style={styles.alignBodyMessageFrom}
        >
            <View style={styles.imageCircle40}>
                <Image style={styles.imageRadius50} source={{uri:item.profile}} />
            </View>

            <View style={styles.bodyMessageFrom}
            >
                <Text 
                    style={styles.fontBodyMessage}
                >
                    {item.body}
                </Text>
            </View>
        </View>
    );
}

