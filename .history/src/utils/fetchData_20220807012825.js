export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': 'c568d93ccfmshc057dc6bf7c9136p187f35jsn1ee2c54ee5d8',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    } 
  };

export const ytoptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9e086ca345msh0d8f3e16fdf6311p1d4168jsn6cd237c5ad9d',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};
export const fetchData = async (url, options) =>{
    const response = await fetch(url ,  options);
    const data = await response.json();

    return data;
}