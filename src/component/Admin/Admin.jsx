import { useEffect, useState } from "react"
import style from "../../css/accountholder.module.css"
import { Link, useParams } from "react-router-dom"
import axios from "axios"


const Admin=()=>{

    return(
        <div>
            <div id={style.maindiv}>
                <div id={style.subdiv}>
                    <div className={style.m1}>
                       <Link to={"/adminlogin"}>LOGIN</Link>
                    </div>
                    <div className={style.m1}>
                       <Link to={"/adminsignup"}>SIGN UP</Link>  
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Admin