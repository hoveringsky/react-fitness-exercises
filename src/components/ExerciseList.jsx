import React from 'react'

const ExerciseList = ({ data, setBodyPart, bodyPart }) => {
    return (
        <div className='grid grid-cols-6 gap-x-4'>
            {
                data.map((item) => {
                    return (
                        <div class="w-full" key={item.id} onClick={() => { setBodyPart(item); console.log(bodyPart) }}>
                            <div class="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                                <div class="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-green-500 rounded-lg">
                                    <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.71 1.29C20.617 1.19627 20.5064 1.12188 20.3846 1.07111C20.2627 1.02034 20.132 0.994202 20 0.994202C19.868 0.994202 19.7373 1.02034 19.6154 1.07111C19.4936 1.12188 19.383 1.19627 19.29 1.29L13 7.59L8.71 3.29C8.61704 3.19627 8.50644 3.12188 8.38458 3.07111C8.26272 3.02034 8.13201 2.9942 8 2.9942C7.86799 2.9942 7.73728 3.02034 7.61542 3.07111C7.49356 3.12188 7.38296 3.19627 7.29 3.29L1.29 9.29C1.19627 9.38296 1.12188 9.49356 1.07111 9.61542C1.02034 9.73728 0.994202 9.86799 0.994202 10C0.994202 10.132 1.02034 10.2627 1.07111 10.3846C1.12188 10.5064 1.19627 10.617 1.29 10.71C1.38296 10.8037 1.49356 10.8781 1.61542 10.9289C1.73728 10.9797 1.86799 11.0058 2 11.0058C2.13201 11.0058 2.26272 10.9797 2.38458 10.9289C2.50644 10.8781 2.61704 10.8037 2.71 10.71L8 5.41L12.29 9.71C12.383 9.80373 12.4936 9.87812 12.6154 9.92889C12.7373 9.97966 12.868 10.0058 13 10.0058C13.132 10.0058 13.2627 9.97966 13.3846 9.92889C13.5064 9.87812 13.617 9.80373 13.71 9.71L20.71 2.71C20.8037 2.61704 20.8781 2.50644 20.9289 2.38458C20.9797 2.26272 21.0058 2.13201 21.0058 2C21.0058 1.86799 20.9797 1.73728 20.9289 1.61542C20.8781 1.49356 20.8037 1.38296 20.71 1.29Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <h3 class="mb-4 text-xl md:text-2xl leading-tight font-bold">{item}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ExerciseList