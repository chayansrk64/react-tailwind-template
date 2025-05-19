import { Outlet } from "react-router"
import { NavBar } from "../shared/NavBar/NavBar"
import { Footer } from "../shared/Footer/Footer"

export const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
         </div>
    )
}