import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from "../firebase/index";
import {useState,useEffect} from "react";

export default function useMessage (){

    const [message,setMessage] = useState([]);

    const [value, loading, error] = useCollection(
        firebase.db.collection("message"),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    useEffect(()=>{
        
        let  newMessages = [];

        value.docs.forEach((doc)=>{

            newMessages.push({
                ...doc.data(),
            })
        });

        setMessage(newMessages);

    },[value])

    return [message,loading,error];

}