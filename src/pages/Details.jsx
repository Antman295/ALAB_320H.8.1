import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllStarships } from '../services/sw-api';

export default function Details() {
    const { name } = useParams();
    const [ship, setShip] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const ships = await getAllStarships();
            
        }
    })
}