import { useEffect, useState } from "react"
import style from "../css/typeofbank.module.css"
import { Link } from "react-router-dom"
import axios from "axios"

const TypeOfBank=()=>{

    let[bankdetails,setBankdetails]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/bank")
        .then((r)=>{
            setBankdetails(r.data)
        })
    })

    return(
        <div>
            <div id={style.maindiv}>
                <div id={style.subdiv}>
            {
                bankdetails.map((x)=>{
                    return(
                        <div>
                    <div id={style.s2}>
                        <div id={style.l11}><img src={x.image} alt="" /></div>
                        <div id={style.l2}><Link to={`/boi/${x.id}`}>{x.bankname}</Link></div>
                    </div>
                        </div>
                    )
                })
            }
            </div>
            </div>
        </div>
    )
}
export default TypeOfBank