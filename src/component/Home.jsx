import style from "../css/home.module.css"
import { Link, useNavigate } from "react-router-dom"

const Home=()=>{

    let navigate=useNavigate()

    let logout=()=>{
       let c= prompt("If You Want To Exit Enter Yes !!!!")
       if(c=="yes" || c=="Yes" || c=="YES"){
        navigate("/homepage")    
       }
    }

    return(
        <div>
            <div id={style.maindiv}>
                <div>
                    <div id={style.logo}>
                        <img src="" alt="" />
                    </div>
                    <div id={style.nav}>
                        <div><Link to="/contactus">Contact Us</Link></div>
                        <div><Link>About Us</Link></div>
                        <div><Link to="/homepage"><i class="fa-solid fa-house"></i></Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home