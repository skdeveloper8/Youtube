import axios from "axios";

const BASE_URL='https://youtube138.p.rapidapi.com';
const options = {
     
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
    //   'X-RapidAPI-Key':process.env.REACT_APP_YOUTUBE_API,
      'X-RapidAPI-Key':'fc3b290cc2msh1cca4399e418338p13b70fjsnf596d34dde9f',
      // 'X-RapidAPI-Key':'gDqsUSTiVCUKglKJKsFVSXwsHvBM9SSo',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

 export const fetchDataFromApi=async (url)=>{
  
    const {data} =await axios.get(`${BASE_URL}/${url}`,options)
    
    console.log(data);
    return data;
  }