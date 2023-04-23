import Navabar from "./Navbar";
import Footer from"./Footer";
export default function Impoert(){
    const name="John Doe"
    const age=38
    const address="123 Main St"
 console.log(name)
    return(
        <div>
            <Navabar/>
            <h1>My name is {name}</h1>
            <h1>My age is 17</h1>
            <h1>i live in GANDHINAGAR</h1>
            <p>
                Lorem ipsum dolor sit amet,consectetur adipisicing elit.
                Itaque,
                consequatur.
            </p>
            <Footer/>
        </div>
    )
}

