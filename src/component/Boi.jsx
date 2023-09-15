import { useEffect, useState } from "react"
import style from "../css/admin.module.css"
import { Link, useParams } from "react-router-dom"
import axios from "axios"


const Boi=()=>{

    let {index}=useParams()

    let[bankname,setBankname]=useState("")

    useEffect(()=>{
        axios.get(`http://localhost:3000/bank/${index}`)
        .then((r)=>{
            setBankname(r.data.bankname)
        })
    },[index])
    return(
        <div>
            <div id={style.maindiv}>
                <div id={style.subdiv}>
                    <div id={style.m2}><marquee behavior="" direction="">Welcome To {bankname}</marquee></div>
                    <div className={style.m1}>
                       <Link to={`/boilogin/${index}`}>LOGIN</Link>
                    </div>
                    <div className={style.m1}>
                       <Link to={`/boisignuppage/${index}`}>SIGN UP</Link>  
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Boi