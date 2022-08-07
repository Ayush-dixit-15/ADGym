import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';
import { exerciseOptions, fetchData, ytoptions } from '../utils/fetchData';
import Details from '../components/Details';
import Videos from '../components/Videos';
import Suggestions from '../components/Suggestions'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const { id } = useParams();
  useEffect(() => {
    const fetchExercisesData = async () =>{
        const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
        const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

        const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions);

        setExerciseDetail(exerciseDetailData)



        const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?q=${exerciseDetailData.name}` , ytoptions);
        setExerciseVideos(exerciseVideosData)

    }
    fetchExercisesData();
  }, [id])
  
  return (
    <Box>
       <Details exerciseDetail = {exerciseDetail} />
       <Videos exerciseVideos={}/>
       <Suggestions/>
    </Box>
  )
}

export default ExerciseDetail 