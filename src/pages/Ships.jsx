import { Link } from 'react-router-dom';
import { getAllStarships } from '../services/sw-api';
import { useEffect, useState } from "react";

export default function Ships(){
    const [ships, setShips] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const starships = await getAllStarships();
            setShips(starships);
        }

        fetchData();

    }, []);

    return (
        <div className="ships">
            {ships.map((ship) => (
                <div key={ship.url}>
                    <Link to={`/ship/${ship.name}`}>
                        {ship.name}
                    </Link>
                    </div>
                    ))}
        </div>
    )};
