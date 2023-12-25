import { Footer } from "./components/Footer/Footer"
import "./assets/styles/main.css"
import { Header } from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "./components/Index/Index";
import { Products } from "./components/Products/Products";
import { Contact } from "./components/Contact/Contact";
import { Nosotros } from "./components/nosotros/nosotros";


export const App = () => {

    return (

        <>

            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" index element={<Index />} />
                    <Route path="/productos" element={<Products />} />
                    <Route path="/contacto" element={<Contact />} />
                    <Route path="/nosotros" index element={<Nosotros />} />


                </Routes>
            </BrowserRouter>
            <Footer />

        </>
    )

}
