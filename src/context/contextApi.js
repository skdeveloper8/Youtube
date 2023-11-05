import React, { createContext, useState, useEffect } from 'react';
import { fetchDataFromApi } from '../utils/api';

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setsearchResults] = useState(false);
    const [selectCategories, setselectCategorise] = useState("New");
    const [mobileMenue, setMobileMenue] = useState(false);
    useEffect(() => {
        fetchSelectedCategoryData(selectCategories)
    }, [selectCategories])


    const fetchSelectedCategoryData = (query) => {
        setLoading(true);
        
        fetchDataFromApi(`search/?q=${query}`).then(({contents}) => {
            console.log(contents);
            setsearchResults(contents)
            setLoading(false);
        })

    }

    return (
        <Context.Provider value={{
            loading, setLoading, selectCategories, setselectCategorise,
            searchResults, setsearchResults, mobileMenue, setMobileMenue
        }}>
            {props.children}
        </Context.Provider>
    )

}