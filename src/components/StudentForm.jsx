import React,{useState, useEffect} from "react";
import styles from "./Student.module.css";

export default function StudentForm() {
  const [fname,setFname ]=useState('')
  const [lname,setLname ]=useState('')
  const [email,setEmail ]=useState('')
  const [state,setState ]=useState('')
  const[data,setData]= useState([])


  useEffect(()=>{
    const datainfo = localStorage.getItem('myData');
    if(datainfo){
      setData(JSON.parse(datainfo))
    }
  },[]
  )

  function handleFname(e){
    setFname(e.target.value)
  }
  function handleLname(e){
    setLname(e.target.value)
  }
  function handleState(e){
    setState(e.target.value)
  }
  function handleEmail(e){
    setEmail(e.target.value)
  }


  function handleSave(){
    const newData=[...data, { fname, lname, email, state }];
    localStorage.setItem('myData',JSON.stringify(newData))
    setData(newData);
    setEmail('')
    setFname('')
    setLname('')
    setState('')  }
  return (
    <>
    <div  className={styles.container}>
      <div className={styles.header}>
  <h2>Student Registration Form</h2>
  </div>
<table align="center" cellpadding = "10">

<tr>
<td className={styles.label}>First Name :-</td>
<td><input className={styles.input} value={fname} onChange={handleFname} type="text" name="FirstName" maxlength="50" placeholder="enter first name" />
(Max 50 Characters Allowed)
</td>
</tr>
<tr>
<td className={styles.label}>Last Name :-</td>
<td><input className={styles.input} value={lname} onChange={handleLname} type="text" name="FirstName" maxlength="50" placeholder="enter last name" />
(Max 50 Characters Allowed)
</td>
</tr>
<tr>
<td className={styles.label}>Email :-</td>
<td><input className={styles.input} value={email} onChange={handleEmail} type="email" name="email"  placeholder="enter email" />

</td>
</tr>
<tr>
<td className={styles.label}>State :-</td>
<td><input className={styles.input} value={state} onChange={handleState} type="text" name="FirstName" placeholder="enter state" />

</td>
</tr>
</table>
<div className={styles.btn1}>
<button className={styles.btn} onClick={handleSave}>submit</button>
</div>
<hr/>

<table align="center" cellpadding="10">
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>State</th>
        
      </tr>
    
      {data.map((datainfo, index) => (
        <>
         <tr key={index}>
          
         <td>{datainfo.fname}</td>
         <td>{datainfo.lname}</td>
         <td>{datainfo.email}</td>
         <td>{datainfo.state}</td>
       </tr>
         
         </>
      ))}
    </table>
 </div>
 </>
  );
}
