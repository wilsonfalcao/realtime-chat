import firebase from "../firebase/index";

export default() => {

    const getMessaginContents = async (CallBack) => {

        firebase.db.collection("message").onSnapshot((Query)=>{
            
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