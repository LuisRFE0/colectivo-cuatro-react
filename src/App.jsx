import { Footer } from "./components/Footer/Footer"
import "./assets/styles/main.css"
import { Header } from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "./components/Index/Index";
import { Products } from "./components/Products/Products";
import { Contact } from "./components/Contact/Contact";
import { Nosotros } from "./components/AboutUs/Nosotros";
import { Login } from "./components/Login/Login";
import Singup from "./components/Login/Singup";


export const App = () => {

    return (

        <>

            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/colectivo-cuatro-react/" index element={<Index />} />
                    <Route path="/colectivo-cuatro-react/productos" element={<Products />} />
                    <Route path="/colectivo-cuatro-react/contacto" element={<Contact />} />
                    <Route path="/colectivo-cuatro-react/nosotros" element={<Nosotros />} />
                    <Route path="/colectivo-cuatro-react/login" element={<Login />} />
                    <Route path="/colectivo-cuatro-react/singup" element={<Singup />} />



                </Routes>

                <Footer />
            </BrowserRouter>

        </>
    )

}
