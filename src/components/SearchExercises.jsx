import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
import ExerciseList from './ExerciseList';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            console.log(bodyPartsData);
            setBodyParts(['all', ...bodyPartsData]);
        };

        fetchExercisesData();
    }, []);

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

            const searchedExercises = exercisesData.filter(
                (item) => item.name.toLowerCase().includes(search)
                    || item.target.toLowerCase().includes(search)
                    || item.equipment.toLowerCase().includes(search)
                    || item.bodyPart.toLowerCase().includes(search),
            );

            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

            setSearch('');
            setExercises(searchedExercises);
        }
    };

    return (
        <>
            <div className="max-w-4xl mx-auto">
                <h1 className='text-5xl text-center font-bold'> Search What Exercise Interests You </h1>

                <div className="flex mt-10">
                    <input type="text"
                        className='bg-white border border-gray-600 h-[55px] w-[80%] px-4'
                        onChange={(e) => setSearch(e.target.value.toLowerCase())} />
                    <button
                        class="inline-block py-2 px-2 w-[200px] text-base leading-4 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
            </div>
            <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
                <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                    <ExerciseList data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                    {/* <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} /> */}
                </Box>
            </Stack>
        </>
    );
};

export default SearchExercises;
