import './styles/main.scss'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

//main entery for the app.
export default function Main(){

    
    return (
        <Router>
            <MonsterList/>
        </Router>
    )
}