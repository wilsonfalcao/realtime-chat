export const MessageRedux = (state = null, action) =>{

    switch(action.type){
        
        case "@message/GETMESSAGE":
            return action.message;
        case "@message/CLEAR":
            return null;
        default :
            return state;
    }
}