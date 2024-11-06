import { Link } from "react-router-dom";

export default function Nav (props) {
    return (
        <div className = 'nav'>
            <Link to = "/ships">
                <div>Click me to go to list of ships</div>
            </Link>
        </div>
    )
}