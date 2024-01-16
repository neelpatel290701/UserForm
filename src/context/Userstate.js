import React from 'react'
import Usercontext from "./Usercontext";
import { useState } from "react";


export default function Userstate(props) {

    const name = "neel patel";
    const [credential , setCredential] = useState({username : "" ,  email : "" , address: ""})

    const addUser = async (username, email , address) => {
        
        setCredential({username : username , email : email , address : address});
        // console.log(username)

      };

  return (
        <Usercontext.Provider value={{name , addUser , credential }}>
                {props.children}
        </Usercontext.Provider>
  )
}
