'use client';

import { useState, useEffect}  from "react";
import { Character }  from "../types/character";
import { characterService } from "../services/characterServices";

export const useCharacters = () => {

    const [ character, setCharacter] = useState <Character[]> ();

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState <string | null>( null );

    useEffect( () => {
        const fetchCharacters = async () => {

            const {getAllCharacters} = characterService;



            try {
                setLoading(true);
                const data = await getAllCharacters();
            } catch (error) {
                
            }

        }
    })



}

