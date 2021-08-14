import React, {useState} from "react";
import {styles} from "./style";
import {View, TextInput, Image } from 'react-native';

//Camada de serviços
import {sendMessageToServer} from "../../model/services/messagingOp";


export default function UserTextArea(){

    const [text, setText] = useState(null);

    return(
        <View style={styles.areaInputSendText}>
            <View style={styles.areaInputDirectionPadding}>
                <View style={styles.imageCircle40}>
                    <Image style={styles.imageRadius50}
                        source={{uri:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",}}
                    />
                </View>
                <View style={styles.areaInputStyles}>
                    <TextInput
                        multiline={true}
                        placeholder="Envie seu comentário..."
                        placeholderTextColor="rgb(255,255,255)" 
                        style={styles.inputStyle}
                        autoFocus={true}
                        onSubmitEditing={async (event)=>{
                            let status  = await sendMessageToServer({
                                to:"wilson.falcao1@gmail.com",
                                from:"wilson.falcao1@hotmail.com",
                                date:Date.now(),
                                body:event.nativeEvent.text,
                                profile:"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
                                msgid:0,
                                state:false,
                            });
                            if(status) setText("");
                        }}
                        onChangeText={setText}
                        value={text}
                    />
                </View>
            </View>
        </View>
    );
}