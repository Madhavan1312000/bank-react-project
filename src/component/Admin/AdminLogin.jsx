import { createContext, useEffect, useState } from "react"
import style from "../../css/adminlogin.module.css"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"


const AdminLogin=()=>{

    let navigate=useNavigate()

let[email,setEmail]=useState("")
let[bankname,setBankname]=useState("")
let[password,setPassword]=useState("")

let[id,setId]=useState("")

let idData=(e)=>{
    setId(e.target.value)
}

let[email2,setEmail2]=useState("")
let[password2,setPassword2]=useState("")

let email2Data=(e)=>{
    setEmail2(e.target.value)
}
let password2Data=(e)=>{
    setPassword2(e.target.value)
}

useEffect(()=>{
    axios.get(`http://localhost:3000/admin/${id}`)
    .then((r)=>{
        setBankname(r.data.bankname)
        setEmail(r.data.email)
        setPassword(r.data.password)
    })
    .catch(()=>{
        console.log("No Datas Found")
    })
},[id])

let validation=()=>{
    if(email2==email && password2==password){
        navigate(`/adminpage/${bankname}`)
    }
    else{
        alert("Invalid Email and Password")
    }
}

    return(
        <div>

<div id={style.maindiv3}>
            
            <div id={style.m1}>
            <Link to="/home"><i class="fa-sharp fa-solid fa-circle-xmark" id={style.x}></i></Link>
            <div id={style.d1}>
                <div>
                <i class="fa-regular fa-id-badge" id={style.ii3}></i><input type="text" placeholder="Id Number" value={id} onChange={idData}/>
                <br /><br />
                <br /><i class="fa-solid fa-user"></i><input type="text" placeholder="Email" value={email2} onChange={email2Data}/>
                <br /><br />
                <br /><i class="fa-solid fa-key" id={style.ii2}></i><input type="text" placeholder="Password" value={password2} onChange={password2Data}/><br /><br />
                {/* <br /><button><Link to="/accountholderpage">Login</Link></button> */}
                <br /><button onClick={validation}>Login</button>
                <br /><br />
                </div>
            </div>
            <div id={style.d2}>
                <img src="https://img.freepik.com/premium-vector/bank-building-white-background-bank-financing-money-exchange-financial-services_625536-430.jpg?size=626&ext=jpg&ga=GA1.1.1158682593.1687979719&semt=sph" alt="" />
            </div>
        </div>
        </div>
        </div>
    )
}
export default AdminLogin