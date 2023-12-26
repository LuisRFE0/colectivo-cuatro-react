import { Footer } from "./components/Footer/Footer"
import "./assets/styles/main.css"
import { Header } from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "./components/Index/Index";
import { Products } from "./components/Products/Products";
import { Contact } from "./components/Contact/Contact";
import { Nosotros } from "./components/AboutUs/Nosotros";


export const App = () => {

    return (

        <>

            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/colectivo-cuatro-react/" index element={<Index />} />
                    <Route path="/colectivo-cuatro-react/productos" element={<Products />} />
                    <Route path="/colectivo-cuatro-react/contacto" element={<Contact />} />
                    <Route path="/colectivo-cuatro-react/nosotros" index element={<Nosotros />} />


                </Routes>
                
                <Footer />
            </BrowserRouter>

        </>
    )

}
