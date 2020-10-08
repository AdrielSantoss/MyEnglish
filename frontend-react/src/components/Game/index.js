import React, {useEffect, useState} from 'react';
import Knowledge_test from '../Knowledge_test'
import {TemplateGame} from './style.js'

export default function Game() {

    const [difficulty, setDifficulty] = useState('')

    useEffect(()=>{
        const getDifficulty = localStorage.getItem('difficulty')
        setDifficulty(getDifficulty)
    },[])

 return (
    <TemplateGame>
        <Knowledge_test />
    </TemplateGame>
 );
}