import 'bootstrap/dist/css/bootstrap.css';
import {useState , useEffect} from 'react';
import axios from 'axios';

function Library2(){
  const url = 'http://localhost:3000/top10'

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(url).then(json => setData(json.data))
  }, [])

  const renderTable = () => {
    return data.map(user => {
      return (
        <tr>
          <td>{user.artist}</td>
          <td>{user.artistdate}</td>
          <td>{user.artistbio}</td> 
        </tr>
      )
    })
  }


  return(
    <>
      <div className="container-fluid" id='library-container2'>
        <h1 className='text-white top10-songs'>Top 10 Artists</h1>
        <table className="table table-borderless  top-table">
          <thead>
            <tr>
              <th scope="col">Artists</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Songs</th>
            </tr>
          </thead>
          <tbody>
            {renderTable()}
          </tbody>
        </table>

      </div>
    </>
  );
}
export default Library2;