import {  doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { firestore } from "./firebase";


const Detail = () => {

console.log("Detail 1");
//initialisation variables :

        let {id} = useParams() ;

        const [video, setVideo] = useState([]);
            
        const [Loading, setLoading] = useState(false) ;

//

const GetOneVideo = async (VideoId) => { 
    
//début du chargement 
setLoading(true);

//

console.log("getOneVideo");

const rqVideo = doc(firestore, "videos", VideoId) ;

const snapVideo = await getDoc(rqVideo);

console.log(rqVideo);

console.log(snapVideo);


 }

        
        
        // const GetOneVideo = async () => {
        
        // setLoading(true);
        // const rqVideo = doc(firestore, "videos", idVideo) ;
        
        // const snapVideo = await getDoc(rqVideo);
        // console.log(snapVideo);
     
        
        // if(snapVideo.exists){
        
        // setVideo(snapVideo.dat());
            
        //         }
        // setLoading(false)
        
                // }
        
            
    useEffect( ()=> {

        GetOneVideo(id);

    })


  return (
    <div>Detail</div>
  )
}

export default Detail