import 'bootstrap/dist/css/bootstrap.css';
import {useState , useEffect} from 'react';
import axios from 'axios';
import Popup from  './Popup';
import Edit from './Edit';
import  Delete from './Delete';
import { BsStar } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { AiFillFileAdd } from "react-icons/ai";
function Library(){
const [buttonadd,setButtonadd]=useState(false);
const [buttonedit,setButtonedit]=useState(false);
const [buttondelete,setButtondelete]=useState(false);



//fetching data from api(top 10)

const url = 'http://localhost:3000/top10'

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(url).then(json => setData(json.data))
  }, [])

//this will render music cards of 10 songs
  const renderTable = () => {
    return data.map(user => {
      return (
        <div className="card">
    <img src={user.artwork} className="card-image" alt='artwork'/>
    <div className="card-body">
      <h5 className="card-title">Song: <strong>{user.songname}</strong></h5>
      <p className="card-text">Artist: {user.artist}</p>
      <p className="card-text"><small className="text">Rating :{user.rating}<BsStar className='star'/></small></p>
    </div>
  </div>
      )
    })
  }
  
  return(
    <>
      <div className="container-fluid" id='library-container'>
        <h1 className='text-white top10-songs'>Top 10 Songs</h1>
        <div className='button-container'>
      <button onClick={()=>setButtonadd(true)} type="button" className="btn  btn-success button-add"><AiFillFileAdd/>Add</button>
      <button onClick={()=>setButtonedit(true)} type="button" className="btn btn-primary edit-button">
      <FaEdit/>Edit
      </button>
      <button  onClick={()=>setButtondelete(true)} type="button" className="btn btn-danger delete-button">
      <AiFillDelete/>Delete
      </button>
      </div>
        <div className="card-group">
  {renderTable()}
         </div>
    
      </div>
      <Popup trigger={buttonadd} setTrigger={setButtonadd}>
        <h3>my popup</h3>
      </Popup>
      <Edit trigger={buttonedit} setTrigger={setButtonedit}>
        <h3>my popup</h3>
      </Edit>
      <Delete trigger={buttondelete} setTrigger={setButtondelete}>
        <h3>my popup</h3>
      </Delete>
    </>
  );
}

export default Library;

