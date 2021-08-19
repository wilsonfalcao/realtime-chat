import firebase from "../firebase/index";
import * as Google from "expo-google-app-auth";
import {useDispatch} from "react-redux";


const expoAuthenticationGoogle = () =>{

    const dispatch = useDispatch();

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
    
                    dispatch({
                        type:"@user/LOGIN",
                        user:result.user
                    });
        
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

    }

    const isLoggedIn = async () =>{
        userGoogle =  await firebase.firebase.auth().currentUser();
        return !!userGoogle;
    }

    const listeningLogIn = async () =>{
        firebase.firebase.auth().onAuthStateChanged(user=>{
            dispatch({
                type:"@user/CHANGEUSER",
                user:user,
            })
        });
    }

    const logOut = async () =>{
        await firebase.firebase.auth().signOut();
        dispatch({
            type:"@user/LOGOUT",
        });
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