import React, {useEffect} from "react";
import {View, FlatList} from "react-native";
import {useSelector} from "react-redux";

//Estilos e Componentes 
import {styles} from "./style";
import {ViewFromMessage,ViewToMessage} from "../flatListAreaMessage/FlatListMessage";

//Camada model e serviços
import messagingOp from "../../model/services/messagingOp";


export default function MessageArea(){

    const [getMessaginContents] = messagingOp();
    const message = useSelector(state=>state.MessageRedux);
    const UseForm = useSelector(state=>state.UseRedux);

    const FlatListMessage = ({item}) => {

        if(item.from == UseForm.email){
            return(
                <ViewFromMessage item={item} />
            );
        }
    
        return(
            <ViewToMessage item={item} />
        );
    }

    useEffect(()=>{

        getMessaginContents();

    },[]);

    return(
        <View style={styles.areaMessage}>
            <FlatList
                data={message}
                inverted={-1}
                renderItem={FlatListMessage}
                contentContainerStyle={styles.flatListContainer}
                keyExtractor={(_,index)=>index.toString()}
                style={{marginBottom:70}}
            />
        </View>
    );
}