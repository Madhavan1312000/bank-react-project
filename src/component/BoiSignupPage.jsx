import axios from "axios"
import { useState } from "react"
import { useNavigate, useParams } from "react-router"
import style from "../css/accountholdersignup.module.css"
import { useEffect } from "react"

const BoiSignupPage=()=>{

    let {index}=useParams()

    let[bankname,setBankname]=useState("")
    useEffect(()=>{
        axios.get(`http://localhost:3000/bank/${index}`)
        .then((r)=>{
            setBankname(r.data.bankname)
        })
    },[index])

    let[name,setName]=useState("")
    let[email,setEmail]=useState("")
    let[accno,setAccno]=useState("")
    let[password,setPassword]=useState("")
    let[balance,setBalance]=useState(0)

    let navigate=useNavigate()

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let emailData=(e)=>{
        setEmail(e.target.value)
    }
    let accountnoData=(e)=>{
        setAccno(e.target.value)
    }
    let passwordData=(e)=>{
        setPassword(e.target.value)
    }
    let balanceData=(e)=>{
        setBalance(e.target.value)
    }

    let formHandle=()=>{
        let payload={name,email,accno,password,balance}
        axios.post(`http://localhost:3000/${bankname}`,payload)
        navigate(`/boi/${index}`)
    }

    return(
        <div>
            <div id={style.maindiv}>
                <div id={style.subdiv}>
                    <div>
                    <table>
                        <tr>
                            <td><label htmlFor="">Name</label></td>
                            <td>: <input type="text" name="" id="" value={name} onChange={nameData}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="">Email</label></td>
                            <td>: <input type="text" name="" id="" value={email} onChange={emailData}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="">Account Number</label></td>
                            <td>: <input type="text" name="" id="" value={accno} onChange={accountnoData}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="">Password</label></td>
                            <td>: <input type="text" name="" id="" value={password} onChange={passwordData}/></td>
                        </tr>
                        <tr>
                        <td><label htmlFor="">Balance</label></td>
                        <td>: <input type="text" name="" id="" value={balance} onChange={balanceData}/></td>
                    </tr>
                    <tr id={style.tr1}>
                       <td><button onClick={formHandle}>Sign Up</button></td>
                    </tr>
                    </table>            
                    </div>
                </div>

            </div>
        </div>
    )
}
export default BoiSignupPage