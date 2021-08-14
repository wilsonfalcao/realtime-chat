import React, {useState,useEffect} from "react";
import {View,Text, FlatList,Image} from "react-native";

//Estilos e Componentes 
import {styles} from "./style";
import {FlatListMessage} from "../flatListAreaMessage/FlatListMessage";

//Camada model e serviços
import messagingOp from "../../model/services/messagingOp";


export default function MessageArea(){

    const [getMessaginContents] = messagingOp();
    const [message,setMessage] = useState(null);

    useEffect(()=>{
        getMessaginContents(setMessage);
    },[])

    return(
        <View style={styles.areaMessage}>
            <FlatList
                data={message}
                renderItem={({item})=>(FlatListMessage(item))}
                contentContainerStyle={styles.flatListContainer}
                keyExtractor={(_,index)=>index.toString()}
            />
        </View>
    );
}