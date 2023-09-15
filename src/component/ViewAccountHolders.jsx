import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import style from "../css/viewaccountholder.module.css"

const ViewAccountHolder=()=>{

    let {bankname}=useParams()

    let[content,setContent]=useState([])

    useEffect(()=>{
        axios.get(`http://localhost:3000/${bankname}`)
        .then((r)=>{
            setContent(r.data)
        })
        .catch(()=>{
            console.log("Error")
        })
    },[])

    // let deleteData=(v)=>{
    //     axios.delete(`http://localhost:3000/users/${v}`)
    //     window.location.assign("/users")
    // }
    return(
        <div>
            <div id={style.maindiv}>
            <div id={style.subdiv}>
            {content.map((x)=>{
                return(
                            <div>
                                <div id={style.subdiv2}>
                <table>
                    <th>
                        <td>Id</td>
                        <td>: {x.id}</td>
                    </th>
                    <tr>
                        <td>Name</td>
                        <td>: {x.name}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>: {x.email}</td>
                    </tr>
                    <tr>
                        <td>Account Number</td>
                        <td>: {x.accno}</td>
                    </tr>
                    <tr>
                        <td>Balance</td>
                        <td>: {x.balance}</td>
                    </tr>
                </table>
            </div>
                    </div>
                )
            })}
        </div>
        </div>
        </div>
    )
}
export default ViewAccountHolder