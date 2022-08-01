import 'bootstrap/dist/css/bootstrap.css';
import useForm from "./useForm";
import axios from "axios";
function Popup(props){
  const [{ values, loading }, handleChange, handleSubmit] = useForm();


  const submitafter = () => {  
     //delete by song name
      axios.delete("http://localhost:3000/top10/"+values.songname).then(res => {
        console.log(res);
        window.location.reload();
        
     }
      );
  };
  return(props.trigger)?(
    
    <>
    <div className="popup" >
       <div className='popup-inner'>
       <button onClick={()=>props.setTrigger(false)} className='close-btn'>close window</button>
       <div className="form-everything">
      <form onSubmit={handleSubmit(submitafter)} >
        <div className="form-group" id='form-container'>
        <h1 id="form-title">DELETE BY SONGNAME</h1>
  <div className="form-group row">
    <label  className="col-sm-2 col-form-label">ENTER SONGNAME</label>
    <div className="col-sm-10">
      <input  onChange={handleChange}  type="text" name='songname' className="form-control"  placeholder="SongName"/>
    </div>
  </div>
  <div className="form-group row">
    <div className="col-sm-10">
    <button  onChange={handleChange} className='btn btn-primary form-button'  type="submit" >submit</button>
    </div>
  </div>
</div>
</form>
      </div>
     </div>
     </div>
      </>
    ):(
    <></>
  );
}
export default Popup;