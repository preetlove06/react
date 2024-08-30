import { Link } from "react-router-dom";
import { loves } from "./data.js";
 
function Navmenu()
{
return(
    <nav className="navmenu">
        <ul>
            {
                loves.map(
                    love =>(
                        <li key={love.Item}>
                            <Link to={`/love/${love.Item}`}>{love.Item}
                            </Link>
                        </li>
                    )
                )
 
            }
        </ul>
    </nav>
)
}
export default Navmenu;