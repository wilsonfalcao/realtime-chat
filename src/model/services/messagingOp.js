//Estrutura do Banco de dados NonSQL
import firebase from "../firebase/index";

import {PacketMessage,CheckDataSendMessage} from "../../controllers/functions/globalFunctions";

export default() => {

    const getMessaginContents = async (CallBack) => {

        firebase.db.collection("message").orderBy("date","desc").where("date",">=",global.initialDate).onSnapshot((Query)=>{
            
            let messageBody = [];
            
            Query.docs.forEach((doc)=>{
          
                messageBody.push({
                  id:doc.id,
                  ...doc.data(),
                });
            });
            CallBack(messageBody);
        });
    }

    const checkMessageRecive = (id) =>{
        return id;
    }

    return [getMessaginContents,checkMessageRecive];
};

const sendMessageToServer = async (item) =>{

    console.log(item);

    let _MessageBody = await PacketMessage(item);
    
    let status = false;
    if(CheckDataSendMessage(_MessageBody))
        status = true;
        await firebase
            .db
            .collection("message")
            .add(_MessageBody)
            .catch((error)=>{
                status = error;
            });
    return status;
}

export{
    sendMessageToServer,
}