import { useState } from "react"
import style from "../css/moneytransfer.module.css"
import { useNavigate, useParams } from "react-router"
import { useEffect} from "react"
import axios from "axios"

const MoneyTransfer1=()=>{

    let {index}=useParams()
    let{bankname}=useParams()

    let[name,setName]=useState("")
    let[email,setEmail]=useState("")
    let[password,setPassword]=useState("")
    let[accno,setAccno]=useState("")
    let[balance,setBalance]=useState(0)

    let[amount,setAmount]=useState()
    let[bankname1,setBankname1]=useState("")
    let[id,setId]=useState("")

    let bankname1Data=(e)=>{
        setBankname1(e.target.value)
    }
    let idData=(e)=>{
        setId(e.target.value)
    }
    let amountData=(e)=>{
        setAmount(e.target.value)
    }

    useEffect(()=>{
        axios.get(`http://localhost:3000/${bankname1}/${id}`)
        .then((response)=>{
           setName(response.data.name)
           setBalance(response.data.balance)
           setEmail(response.data.email)
           setPassword(response.data.password)
           setAccno(response.data.accno)
           console.log(balance)
        })
        .catch(()=>{
            console.log("No Datas Found")
        })
    },[id])

    let transaction=()=>{
        var a=parseInt(balance)
        var b=parseInt(amount)
        let newBalance2=a+b
        setBalance(newBalance2)
        alert("Your Money Transfering Pocess Started!!!")
    }

    let navigate=useNavigate()

    let completetransaction=()=>{
        let values={name,email,accno,password,balance}
        axios.put(`http://localhost:3000/${bankname1}/${id}`,values)
        navigate(`/transactioncompletionpage/${bankname}/${index}/${amount}`)
    }
    return(
        <div>
            <div id={style.maindiv}>
                <div id={style.subdiv}>
                    <div>
                    <table>
                        <tr>
                            <td><label htmlFor="">Enter The Bank Name To Transfer</label></td>
                            <td>: <input type="text" name="" id="" value={bankname1} onChange={bankname1Data}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="">Enter The Id Number To Transfer</label></td>
                            <td>: <input type="text" name="" id="" value={id} onChange={idData}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="">Enter The Amount To Transfer</label></td>
                            <td>: <input type="text" name="" id="" value={amount} onChange={amountData}/></td>
                        </tr>
                    <tr className={style.tr1}>
                       <td><button onClick={transaction}>Begin Transaction</button></td>
                    </tr>
                    <tr className={style.tr1}>
                       <td><button onClick={completetransaction}>Complete Transaction</button></td>
                    </tr>
                    </table>            
                    </div>
                </div>

            </div>
            </div>
    )
}
export default MoneyTransfer1