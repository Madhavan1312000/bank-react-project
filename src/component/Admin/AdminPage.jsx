import style from "../../css/adminpage.module.css"
import { Link, useParams } from "react-router-dom"

const AdminPage=()=>{
    let{bankname}=useParams()

    return(
        <div>
            <div id={style.maindiv}>
                <div id={style.subdiv}>
                    <div>
                        <Link to={`/viewaccountholder/${bankname}`}>View Account Holders</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdminPage