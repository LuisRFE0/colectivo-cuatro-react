import { Footer } from "./components/Footer/Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/styles/main.css"
import { Header } from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export const App = () => {

    return (

        <>

            <BrowserRouter>
                <Header />
                <Routes>



                </Routes>
            </BrowserRouter>
            <Footer />

        </>
    )

}
