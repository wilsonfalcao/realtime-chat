import * as Crypto from 'expo-crypto';


const CheckDataSendMessage = (item) =>{

    if( 
        item.body == null ||
        item.date == null || 
        item.to == null ||
        item.msgid == null ||
        item.profile == null ||
        item.state != false
    )
        return false;
    
    return true;

}

async function PacketMessage (MessagePacked) {

    const CreateBodyToSha256 = () =>{
        const separator = " || ";
        var body = "";
        return body.concat(
            MessagePacked.body,
            separator,
            MessagePacked.from,
            separator,
            MessagePacked.to,
            separator,
            MessagePacked.date
        );
    }

    let MessageID = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        CreateBodyToSha256()
    );

    MessagePacked.msgid = MessageID;

    return MessagePacked;
}



export{

    CheckDataSendMessage,
    PacketMessage,

}