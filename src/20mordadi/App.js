import React from 'react'
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import BookData from './Data.json'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './style.css'
import Mel from './Mel'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    const [filterData, setFilterData] = useState([])
    const [wordIntered, setWordIntered] = useState("")

    const FilterChange = (e) => {
        const Enterr = e.target.value
        setWordIntered(Enterr)
        const InData = BookData.filter((res) => {
            return res.title.toLowerCase().includes(Enterr.toLowerCase())
        })
        if (Enterr === "") {
            setFilterData([])
        } else
            setFilterData(InData)
    }
    const clearInput = () => {
        setFilterData([]);
        setWordIntered("");
    }


    return ( <
            div className = 'mt-4 mx-auto ms-4' >
            <
            div className = 'row col-10 d-flex' >
            <
            input className = 'col form-control'
            type = "text"
            name = "a"
            id = "a"
            placeholder = 'search'
            value = { wordIntered }
            onChange = { FilterChange }
            /> <
            div className = 'col-1 ' > {
                filterData.length === 0 ? ( < SearchIcon / > ) : ( < CloseIcon id = "remove"
                    onClick = { clearInput }
                    />)}  </div >
                    <
                    BrowserRouter >
                    <
                    Link to = "/mel"
                    className = 'col-4 col-lg-2 text-center font-monospace rounded p-1 text-bg-primary' > Created by Mel < /Link> <
                    Routes >
                    <
                    Route path = '/mel'
                    element = { < Mel / > } > < /Route>

                    <
                    /Routes> <
                    /BrowserRouter> <
                    /div>

                    {
                        filterData.length !== 0 && ( <
                            div > {
                                filterData.map((val) => {
                                        return ( < a className = 'aa text-primary'
                                            target = "_href"
                                            href = { val.link } > { val.title } < br / > < /a>)
                                        })
                                } <
                                /div>
                            )
                        }

                        <
                        /div>
                    )
                }

                    export default App