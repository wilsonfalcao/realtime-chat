import React, {useState} from "react";
import {View,Text, FlatList,Image} from "react-native";

//Estilos e Componentes 
import {styles} from "./style";

const renderText = ({item}) =>{

    if(item.from != "wilson.falcao1@gmail.com")
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

    return(
        <View key={item.msgid} style={{
                width:"100%",
                flexDirection:"row",
                height:"auto",
                paddingHorizontal:10,
                marginBottom:10,
            }}
        >
            <View style={{
                    width:"83%",
                    backgroundColor:"grey",
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

const messageT = [
    {
        msig:"e1edcdec76347eec64c3d1360b6cbfff4759d3788b7be4acbc3fb14213107cd3",
        body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        from:"wilson.falcao1@gmail.com",
        to:"wilson.falcao1@hotmail.com",
        date:"1628616436",
        state:"false",
        profile:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        msig:"e1edcdec76347eec64c3d1360b6cbfff4759d3788b7be4acbc3fb14213107cd5",
        body:"Buon giorno! Come vá?",
        from:"wilson.falcao1@hotmail.com",
        to:"wilson.falcao1@gmail.com",
        date:"1628616446",
        state:"false",
        profile:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },

]

export default function MessageArea(){
    return(
        <View style={styles.areaMessage}>
            <FlatList
                data={messageT}
                renderItem={renderText}
                contentContainerStyle={styles.flatListContainer}
                keyExtractor={(_,index)=>index.toString()}
            />
        </View>
    );
}