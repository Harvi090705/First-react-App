import Navabar1 from "./Navbar1";
import Footer1 from"./Footer1";
export default function Homepage1(){
    const name="John Doe"
    const age=38
    const address="123 Main St"
 console.log(name)
    return(
        <div>
            <Navabar1/>
            <h1>My name is {name}</h1>
            <h1>My age is 17</h1>
            <h1>i live in GANDHINAGAR</h1>
            <p>
                Lorem ipsum dolor sit amet,consectetur adipisicing elit.
                Itaque,
                consequatur.
            </p>
            <Footer1/>
        </div>
    )
}

