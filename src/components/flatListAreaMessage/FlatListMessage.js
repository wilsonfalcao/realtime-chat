import React from "react";
import { View, Text, Image } from "react-native";

//Estilos e componentes
import {styles} from "./style";

//Componentes de Visualização de posicionamento da mensagem.
const ViewFromMessage = ({item}) =>{

    return(
        <View key={item.msgid} style={{
                width:"100%",
                flexDirection:"row",
                height:"auto",
                paddingHorizontal:10,
                marginBottom:10,
                justifyContent:"flex-end",
            }}
        >
            <View style={{
                    width:"auto",
                    backgroundColor:"rgb(245,245,245)",
                    height:"auto",
                    borderRadius:10,
                    paddingHorizontal:12,
                    justifyContent:"center",
                    marginRight:14,
                }}
            >
                <Text 
                    style={{
                        fontSize:18,
                        color:"rgb(0,0,0)",
                        flexWrap:"wrap",
                        textAlign:"justify",
                    }}
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

const ViewToMessage = ({item}) =>{
    return(
        <View key={item.msgid} style={{
                width:"75%",
                flexDirection:"row",
                height:"auto",
                paddingHorizontal:10,
                marginBottom:10,
            }}
        >
            <View style={styles.imageCircle40}>
                <Image style={styles.imageRadius50} source={{uri:item.profile}} />
            </View>

            <View style={{
                    width:"auto",
                    backgroundColor:"rgb(245,245,245)",
                    height:"auto",
                    borderRadius:10,
                    paddingHorizontal:12,
                    justifyContent:"center",
                }}
            >
                <Text 
                    style={{
                        fontSize:18,
                        color:"rgb(0,0,0)",
                        flexWrap:"wrap",
                        textAlign:"justify",
                        fontWeight:"200",
                    }}
                >
                    {item.body}
                </Text>
            </View>
        </View>
    );
}


export const FlatListMessage = (item,userInform) => {

    if(item.from == userInform.email)
        return(
            <ViewToMessage item={item} />
        );

    return(
        <ViewFromMessage item={item} />
    );
}
