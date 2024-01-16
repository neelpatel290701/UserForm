import React from 'react';
import { useContext } from 'react';
import userContext from '../context/Usercontext';

export default function Userdetails() {

  const context = useContext(userContext);
  const { credential } = context;

  return (
    <div className='container my-5'>
        
      <table className='table my-4'>
        <tbody>
          <tr>
            <td className='fw-bold'>User Name:</td>
            <td>{credential.username}</td>
          </tr>

          <tr>
            <td className='fw-bold'>Email:</td>
            <td>{credential.email}</td>
          </tr>

          <tr>
            <td className='fw-bold'>Address:</td>
            <td>{credential.address}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
