import 'bootstrap/dist/css/bootstrap.css';
import useForm from "./useForm";
import axios from "axios";
function Popup(props){
  const [{ values, loading }, handleChange, handleSubmit] = useForm();


  const submitafter = () => {  
    axios.post("http://localhost:3000/post", values).then(res => {
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
        <h1 id="form-title">ENTER SONG DETAILS</h1>
  <div className="form-group row">
    <label  className="col-sm-1 col-form-label">SONGNAME</label>
    <div className="col-sm-0">
      <input  onChange={handleChange}  type="text" name='songname' className="form-control"  placeholder="SongName"/>
    </div>
  </div>
  <div className="form-group row">
    <label  className="col-sm-1 col-form-label">RELEASE YEAR</label>
    <div className="col-sm-0">
      <input  onChange={handleChange}  type="year" name='date' className="form-control"  placeholder="Year of Release"/>
    </div>
  </div>
  <div className="form-group row">
    <label  className="col-sm-1 col-form-label">ARTIST NAME</label>
    <div className="col-sm-0">
      <input  onChange={handleChange}  type="text" name='artist' className="form-control"  placeholder="Artist Name"/>
  </div>
    <label  className="col-sm-1 col-form-label">DATE OF BIRTH</label>
    <div className="col-sm-0">
      <input  onChange={handleChange}  type="date" name='dateofbirth' className="form-control"  placeholder="enter date of birth of artist" />
  </div>
    <label  className="col-sm-1 col-form-label">ARTIST'S SONGS</label>
    <div className="col-sm-0">
      <input  onChange={handleChange}  type="text" name='artistbio' className="form-control"  placeholder="list some songs of artist" />
    </div>
    <label  className="col-sm-1 col-form-label">ARTWORK</label>
    <div className="col-sm-0">
      <input  onChange={handleChange}  type="url" name='artwork' className="form-control"  placeholder="Artwork URL" />
  </div>
  </div>
  <label  className="col-sm-1 col-form-label">OVER ALL RATING</label>
  <select  onChange={handleChange} className="form-select" name='rating' aria-label="Default select example">
  <option selected>Open this to select rating</option>
  <option value="1">One star</option>
  <option value="2">Two star</option>
  <option value="3">Three star</option>
  <option value="4">Four star</option>
  <option value="5">Five star</option>
</select>
  
  <div className="form-group row">
    <div className="col-sm-0">
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