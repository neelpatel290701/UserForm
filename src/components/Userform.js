import React , {useState , useContext} from 'react'
import {useNavigate } from "react-router-dom";
import userContext from '../context/Usercontext';

export default function Userform() {

    const [credential , setCredential] = useState({username : "" ,  email : "" , password: "" , cpassword : "" , address:""})
    const context = useContext(userContext);
    const {addUser} = context ;

    // let history = unstable_HistoryRouter()
    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        await addUser(credential.username , credential.email , credential.address)
        // console.log(credential)
        navigate("/details")

    }

    const onChange =(e)=>{
        // console.log(e.target.value)
        setCredential({...credential , [e.target.name] : [e.target.value]})
}

  return (

    <>
    <div className="container my-4 fs-1" >User Form</div>
    <form>

    <div className="mb-3">
      <label htmlFor="username" className="form-label">User Name :</label>
      <input type="text" className="form-control" id="username" name="username" aria-describedby="usernameHelp"  onChange={onChange}/>
    </div>

    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address :</label>
      <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" onChange={onChange}/>
    </div>

    <div className="mb-3">
      <label htmlFor="Password" className="form-label">Password : </label>
      <input type="password" className="form-control" id="Password" name="password" onChange={onChange}/>
    </div>

    <div className="mb-3">
      <label htmlFor="cPassword" className="form-label"> Confirm Password :     </label>
      <input type="password" className="form-control" id="cPassword" name="cpassword"  onChange={onChange}/>
    </div>

    <div className="form-floating mb-3">
  <textarea className="form-control" placeholder="type address.." id="address" style={{height: '100px'}} name="address"  onChange={onChange}></textarea>
  <label htmlFor="floatingTextarea2">Address</label>
  </div>

   
    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
  </form>
    </>
  )
}
