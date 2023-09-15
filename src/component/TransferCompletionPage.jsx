import { useEffect, useState } from "react"
import style from "../css/transactioncompletionpage.module.css"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"



const TransactionCompletionPage=()=>{

    let {index}=useParams()
    let {bankname}=useParams()
    let {amount}=useParams()

    let navigate=useNavigate()

let[name,setName]=useState("")
let[email,setEmail]=useState("")
let[password,setPassword]=useState("")
let[balance,setBalance]=useState(0)
let[accno,setAccno]=useState("")

useEffect(()=>{
    axios.get(`http://localhost:3000/${bankname}/${index}`)
    .then((r)=>{
        setName(r.data.name)
        setEmail(r.data.email)
        setAccno(r.data.accno)
        setPassword(r.data.password)
        setBalance(r.data.balance)
    })
    .catch(()=>{
        console.log("No Datas Found")
    })
},[index])

let validation=()=>{
    var a=parseInt(amount)
    var b=parseInt(balance)
    let total=b-a
    setBalance(total)
    alert("Your Money Got Transferred Successfully!!!")
}

let completetransaction=()=>{
    let values={name,email,accno,password,balance}
    axios.put(`http://localhost:3000/${bankname}/${index}`,values)
    navigate(`/boimainpage/${bankname}/${index}`)
}

    return(
        <div>

<div id={style.maindiv3}>
           <div id={style.m1}>
            <div><button onClick={validation}>I'm Sure To Complete The Transaction</button></div> 
            <div><button onClick={completetransaction}>Exit</button></div>
           </div>
           </div>
        </div>
    )
}
export default TransactionCompletionPage