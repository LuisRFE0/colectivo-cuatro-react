import { Footer } from "./components/Footer/Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/styles/main.css"
import { Contact } from "./components/Contact/Contact"
import { Index } from "./components/Index/Index"
import { Products } from "./components/Products/Products"

export const App = () => {

    return (
        <div>
            <Products />
            <Footer />
        </div>
       )

}