import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>404</h2>
            <p>Page cannot be found</p>
            <Link to='/'>Go Back Home</Link>
        </div>
    );
}
 
export default NotFound;