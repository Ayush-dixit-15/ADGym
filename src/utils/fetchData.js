export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
    'x-rapidapi-key': '9e086ca345msh0d8f3e16fdf6311p1d4168jsn6cd237c5ad9d',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
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
