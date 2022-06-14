import React from 'react'
import GridBox from './GridBox'
import { exerciseOptions, fetchData } from '../utils/fetchData'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    console.log(exercises)
    return (

        <>
            <GridBox>
                {
                    exercises.map((exercise, index) => {
                        return (
                            <a class="mb-0 overflow-hidden bg-white rounded shadow dark:bg-gray-700" href="#">
                                <div class="relative overflow-hidden h-72">
                                    <img class="object-cover w-full h-full transition-all hover:scale-110" src="https://images.unsplash.com/photo-1520334298038-4182dac472e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80" alt="" />
                                </div>
                                <div class="relative z-20 p-8 -mt-12 ">
                                    <span class="inline-block px-4 py-2 mb-5 text-xs text-white rounded bg-sky-500">
                                        Exercise
                                    </span>

                                    <h2 class="mb-3 text-2xl font-bold leading-9 text-sky-800 dark:text-white"> {exercise.name}
                                    </h2>
                                    <p class="mb-4 text-base leading-7 text-gray-400">
                                        Keep on jumping to get the most of the jump rope exercise. It will help you to increase your
                                        bone density as well asdas dasd as das ad asd asd asd
                                    </p>
                                    <div class="flex items-center">
                                        <img class="object-cover mr-4 rounded-full w-14 h-14" src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?cs=srgb&amp;dl=pexels-thorn-yang-139829.jpg&amp;fm=jpg" alt="" />
                                        <span class="block mb-2 text-sm font-semibold text-sky-700 dark:text-sky-300">
                                            <span class="block mb-1">
                                                John Doe
                                            </span>
                                            <span class="block">
                                                6th Jun, 2022
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </a>
                        )
                    })
                }

            </GridBox>
        </>

    )
}

export default Exercises