import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Intro from "./components/intro/Intro"
import Work from "./components/work/Work"

const App = () => {
    return (
        <div>
            <Intro/>
            <About/>
            <Work/>
            <Contact/> 
        </div>
    )
}

export default App