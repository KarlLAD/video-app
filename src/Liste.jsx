// import React from 'react'
import { useEffect, useState } from 'react';
import Loading from './common/Loading';
import { firestore } from './firebase'; // paramètre du fichier firebase
import { query, collection, getDocs } from 'firebase/firestore'; // gestion de la base de donnée

import Video from './common/Video';






const Liste = () => {

    // 
    const [ videos, setVideos] = useState([]) ;
    const [isLoading, setIsLoading ] = useState(false);

    console.log("Liste 1");

    const getAllVideo = async () => {

        //début du chargement

        setIsLoading(true);

        console.log("getAllVideo :");

            const rqVideo = query(collection(firestore, "videos"));

            const snapVideo = await getDocs(rqVideo);
        console.log( "snapVideo", snapVideo);

        if (!snapVideo.empty) { 
            console.log("ok: video existe");
             const tempData = snapVideo.docs.map( (dataVideo) => {
                 
                return { id:dataVideo.id, ...dataVideo.data()} ;
                
             }) ;
             console.log(tempData);


             // mise à jour de la listes des videos
             setVideos(tempData) ;

             // fin du chargement 
             setIsLoading(false) ;
            
        }


                            } ;
    
    useEffect( () => {

        console.log("useEffect");
        getAllVideo();


                  } , []


            );
    
  return (
    <div>Liste des videos : &emsp; &emsp; &emsp;


 
{ isLoading? <Loading />:
            videos.map(itemVideo=><Video key={itemVideo.id}
                                                                data={itemVideo} />)
          }



  
 
<br/>


       <a href='./Detail'> Detail</a> 
       {/* si on a des donnée on les récupère pour afficher  */}

   
    
    </div>
  )
}

export default Liste