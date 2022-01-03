import { collection } from "@firebase/firestore";
import { useState,useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection)=>{
    const [docs,setDocs] = useState([]);

    useEffect(()=>{
        const unsub=projectFirestore.collection(collection)
        .orderBy('createdAt','desc')
        .onSnapshot((snap) =>{   // this function callbacks initially and every time when collection get changed
            let documents=[];
            snap.forEach(doc=>{
                documents.push({...doc.data(),id: doc.id})
            });
            
            setDocs(documents);
        });
        return () => unsub();
    },[collection])
    return {docs}
}
export default useFirestore;