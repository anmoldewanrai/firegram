import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {

  const [images, setImages] = useState([]);

  useEffect(() =>{
    const unsub = projectFirestore.collection(collection)
    .orderBy('createdAt', 'desc')
    .onSnapshot( snapshot =>{
      let firestoreImages = [];
      snapshot.docs.forEach(doc =>{
        firestoreImages.push({...doc.data(), id: doc.id});
      })
      setImages(firestoreImages);
    });

    return () => unsub();
  }, [collection]);

  return {images};
}
 
export default useFirestore;