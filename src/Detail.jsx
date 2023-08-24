import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "./firebase";

const Detail = () => {
  console.log("Detail 1");
  //initialisation variables :

  let { id } = useParams();

  console.log("id :", id);

  const [video, setVideo] = useState([]);

  const [Loading, setLoading] = useState(false);

  //

  const GetOneVideo = async (VideoId) => {
    //début du chargement
    setLoading(true);

    //

    console.log("getOneVideo");

    const rqVideo = doc(firestore, "videos", VideoId);

    const snapVideo = await getDoc(rqVideo);

    // console.log(rqVideo);

    console.log(snapVideo);

    if (snapVideo.exists) {
      setVideo(snapVideo.data());
    }
    setLoading(false);
  };

  useEffect(() => {
    GetOneVideo(id);
  }, []);

  return (
  <div>
  

  <div className="lg:w-1/4 p-4 w-1/2">
        <a className="block relative h-100 rounded overflow-hidden">
          <img alt={video.image} className="object-cover object-center w-full h-full block" src={video.image}/>
        </a>
        <div className="mt-4">
        <h2 className="text-gray-900 title-font text-lg font-medium">{video.titre}</h2>
          <h3 className="text-gray-700 text title-font mb-3">{video.description}</h3>

          <p  className="mt-1">$18.40</p>
        </div>
      </div>
  
  {/* Detail :{Loading ? "chargement" : video.titre} */}
  
  
  </div>
  
  );
};

export default Detail;
