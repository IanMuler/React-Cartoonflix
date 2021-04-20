/*-----------------get API------------------*/

const API = "https://raw.githubusercontent.com/IanMuler/React-Cartoonflix/main/src/API.json"
export const [media, setMedia] = useState([]);

useEffect(() => {
   fetch(API)
     .then(response => response.json())
     .then(data => setMedia(data))
 }, [] )

/*-------------------------------------------------*/