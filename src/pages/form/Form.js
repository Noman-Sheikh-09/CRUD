import React from "react";
import  formStyle from'./FormStyle'
export default function Form() {
  return (
          <div>
      <input type="fname" placeholder="First Name" className='dataIn'/>
      <input type="lname" placeholder="Last Name" className='dataIn'/>
      <input type="email" placeholder="Email Address" className='dataIn' />
    </div>
  );
}
