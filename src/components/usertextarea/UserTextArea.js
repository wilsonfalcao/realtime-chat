import React, {useState} from "react";
import {styles} from "./style";
import {View, TextInput, Image } from 'react-native';


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
                        onSubmitEditing={(event)=>{
                            event.nativeEvent.text
                        }}
                        onChange={setText}
                    />
                </View>
            </View>
        </View>
    );
}