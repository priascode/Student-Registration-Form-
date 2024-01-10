import React from "react";
import { useState } from "react";
import FormInput from "./FormInput";
import Table from "./Table";
function Main(){

 const [tableData, setTableData] = useState([])
 const [formInputData, setformInputData] = useState(
     {
     fullName:'',
     emailAddress:'',
     website:'',
     imageLink:'',
     Gender:'',
     Skills:''
    }
 );
 
 const handleChange=(e)=>{  
     const newInput = (data)=>({...data, [e.target.name]:e.target.value})
    setformInputData(newInput)
 }
  
 const handleSubmit= (e) =>{
     e.preventDefault();
     const checkEmptyInput = !Object.values(formInputData).every(res=>res==="")
     if(checkEmptyInput)
     {
      const newData = (data)=>([...data, formInputData])
      setTableData(newData);
      const emptyInput= {fullName:'', emailAddress:'', website:'',imageLink:'', Gender:'',
      Skills:''}
      setformInputData(emptyInput)
     }
 }  

 return(
     <React.Fragment>
     
     <div className="contain">
         <div className="main">Student Enrollment Form</div>
         <div className="content">
         <FormInput handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit}/>
         <Table tableData={tableData}/>
         </div>
         <div className="col-sm-4">

         </div>
     </div>
   
     </React.Fragment>
 );
}
export default Main;