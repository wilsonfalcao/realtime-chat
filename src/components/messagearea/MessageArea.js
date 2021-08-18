import React, {useState,useEffect, useRef} from "react";
import {View,FlatList,} from "react-native";

//Estilos e Componentes 
import {styles} from "./style";
import {FlatListMessage} from "../flatListAreaMessage/FlatListMessage";

//Camada model e serviços
import messagingOp from "../../model/services/messagingOp";


export default function MessageArea(props){

    const [getMessaginContents] = messagingOp();
    const [message,setMessage] = useState(null);
    const {userInform} = props;

    useEffect(()=>{
        getMessaginContents(setMessage);
    },[])

    return(
        <View style={styles.areaMessage}>
            <FlatList
                data={message}
                inverted={-1}
                renderItem={({item})=>(FlatListMessage(item,userInform))}
                contentContainerStyle={styles.flatListContainer}
                keyExtractor={(_,index)=>index.toString()}
                style={{marginBottom:70}}
            />
        </View>
    );
}