import About from "./component/About"
import Admin from "./component/Admin/Admin"
import AdminLogin from "./component/Admin/AdminLogin"
import AdminPage from "./component/Admin/AdminPage"
import Home from "./component/Home"
import HomePage from "./component/HomePage"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Transaction from "./component/Transaction"
import AdminSignup from "./component/Admin/AdminSignUp"
import ViewAccountHolder from "./component/ViewAccountHolders"
import ContactUs from "./component/ContactUs"
import TypeOfBank from "./component/TypeOfBank"
import Boi from "./component/Boi"
import BoiSignupPage from "./component/BoiSignupPage"
import BoiLogin from "./component/BoiLogin"
import BoiMainPage from "./component/BoiMainPage"
import MoneyTransfer1 from "./component/MoneyTransfer1"
import TransactionCompletionPage from "./component/TransferCompletionPage"

const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Home/>
            <Routes>
                <Route path="/admin" element={<Admin/>}></Route>
                <Route path="/contactus" element={<ContactUs/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/typeofbank" element={<TypeOfBank/>}></Route>
                <Route path="/adminlogin" element={<AdminLogin/>}></Route>
                <Route path="/adminsignup" element={<AdminSignup/>}></Route>
                <Route path="/adminpage/:bankname" element={<AdminPage/>}></Route>
                <Route path="/viewaccountholder/:bankname" element={<ViewAccountHolder/>}></Route>
                <Route path="/boi/:index" element={<Boi/>}></Route>
                <Route path="/boisignuppage/:index" element={<BoiSignupPage/>}></Route>
                <Route path="/boilogin/:index" element={<BoiLogin/>}></Route>
                <Route path="/boimainpage/:bankname/:index" element={<BoiMainPage/>}></Route>
                <Route path="/transaction/:bankname/:index" element={<Transaction/>}></Route>
                <Route path="/moneytransfer1/:bankname/:index" element={<MoneyTransfer1/>}></Route>
                <Route path="/transactioncompletionpage/:bankname/:index/:amount" element={<TransactionCompletionPage/>}></Route>
            </Routes>
            <HomePage></HomePage>
            </BrowserRouter>
        </div>
    )
}
export default App