//Title and Navigation section
import { Switch, Route } from "react-router-dom";
import App from "../App";
import Posts from "./Posts";
import Footer from "./Footer";

const [page, setPage] = useState("/")
    
    function getCurrentPage() {
        switch(page) {
            case "/":
                return <Home />
            case "/about":
                return <About />
            case "/projects":
                return <ProjectList />
            default:
                return <h1>404 not found</h1>
        }
    }
    
const Header = () => {
    return (
        <>
            <header>
            <a href="#bottom"> Go to bottom</a>
                <h1>Dear diary...</h1>
                <nav>
                    <Switch>
                        <Route path="/home">

                        </Route>
                    </Switch>
                    <ul>
                        <li> <a href="#form"> Start Entry </a> </li>
                        <li> <a href="./Posts"> Diary Entries </a> </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header;