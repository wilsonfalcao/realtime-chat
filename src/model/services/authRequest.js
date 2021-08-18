import firebase from "../firebase/index";
import * as Google from "expo-google-app-auth";

const expoAuthenticationGoogle = () =>{

    let userGoogle;

    const signIn = async () => {

        const ANDROID_CLIENT_ID =
            "784612814694-btsuigvk1s88f1pcf418tdb48fqeam0o.apps.googleusercontent.com";
    
        try{
          
            await Google.logInAsync({
                androidClientId: ANDROID_CLIENT_ID,
                scopes: ["profile", "email"]
            })
            .then((result)=>{
    
                if(result.type === "success") {
    
                    userGoogle = result;
        
                    const credential = firebase.firebase.auth.GoogleAuthProvider.credential(
                        result.idToken,
                        result.accessToken,
                    )
        
                    return firebase.firebase.auth().signInWithCredential(credential);
                }else{
                    return Promise.reject();
                }
    
            })

        }catch(e){
            console.log(e);
        }

        return userGoogle;

    }

    const isLoggedIn = async () =>{
        userGoogle =  await firebase.firebase.auth().currentUser();
        return !!user;
    }

    const listeningLogIn = async (callBack) =>{
        firebase.firebase.auth().onAuthStateChanged(callBack);
    }

    const logOut = async () =>{
        await firebase.firebase.auth().signOut();
    }

    return {
        signIn,
        isLoggedIn,
        listeningLogIn,
        logOut,
    }
}

export {
    expoAuthenticationGoogle,
}