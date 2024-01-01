import React from 'react'
import "../App.css"
import { MdClose } from 'react-icons/md'

const Formtable = ({handleSubmit,handleOnChange,handleclose,rest}) => {
  return (
    <div className="addContainer">
            <form onSubmit={handleSubmit}>
            <div className="close-btn" onClick={handleclose}><MdClose/></div>
              <label htmlFor="name">Vendor_Name : </label>
              <input type="text" id="name" name="name" onChange={handleOnChange} value={rest.Vendor_name}/>

              <label>Bank_Name : </label>
              <input type="text"  onChange={handleOnChange} value={rest.Bank_name}/>

              <label>Account_no : </label>
              <input type="number"  onChange={handleOnChange} value={rest.Account_no}/>
              
              
              <label htmlFor="name">Address_Line1 : </label>
              <input type="text" id="name" name="name" onChange={handleOnChange} value={rest.Address_Line1}/>

              <label htmlFor="name">Address_Line2 : </label>
              <input type="text" id="name" name="name" onChange={handleOnChange} value={rest.Address_Line2}/>

              <label>Zip_Code : </label>
              <input type="text" id="name" name="name" onChange={handleOnChange} value={rest.Zip_Code}/>




              <button className="btn">Submit</button>
            </form>
    </div>
  )
}

export default Formtable