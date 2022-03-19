import React, { useState } from "react";
import Button from "../../components/button/Button";
import "./HomeStyle";
import Form from '../../pages/form/Form'
export default function Home() {
  const [data, setData] = useState(false)
 
  return (
    <div>
   
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Employee List</h1>
      <Button
        text="Add Employee"
        color="white"
        bgColor="Dodgerblue"
        alignText="center"
        border="1px solid Dodgerblue"
        borderRadius="2px"
        marginLeft="100px"
        padding="5px 15px"
        size="20px"
        onClick={()=>callBack(true)}
      />
       {
         data?
         <Form /> : null
       }
      <div
        className="container-fluid "
        style={{ marginTop: "100px", width: "90%" }}
      >
        <div className="row">
          {/* style={{marginLeft:'200px', marginTop:'100px'}} */}

          <table style={{ border: "1px solid black" }}>
            <tr style={{ border: "1px solid black" }}>
              <th> Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email ID</th>
              <th>Actions</th>
            </tr>
            <tr>
              <td>umar</td>
              <td>khan</td>
              <td>........@gmail.com</td>
              <td style={{ display: "flex" }}>
                <Button
                  text="Update"
                  color="white"
                  bgColor="MediumSeaGreen"
                  alignText="center"
                  border="1px solid MediumSeaGreen"
                  borderRadius="2px"
                  padding = '5px 10px'
                  size="10px"
                 
                />
                <Button
                  text="Delete"
                  color="white"
                  bgColor="Tomato"
                  alignText="center"
                  border="1px solid Tomato"
                  borderRadius="2px"
                  padding = '5px 10px'
                  marginLeft='5px'
                  size="10px"
                />
                <Button
                  text="View"
                  color="white"
                  bgColor="MediumSeaGreen"
                  alignText="center"
                  border="1px solid MediumSeaGreen"
                  borderRadius="2px"
                  padding = '5px 10px'
                  marginLeft='5px'
                  size="10px"
                />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
