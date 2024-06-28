import React from 'react';
import { GreetingsTitle } from '../components/title';
import { HeartIcon,MarkerSolid } from '../components/icons';






const StorePage = () => {
    return (
        <div className='bg-red-50 h-screen w-full'>

            <div className='relative'>
                <div className='absolute top-2 right-4'>
                <HeartIcon c="#fff" w="25" h="25" />
                </div>
                <img src="https://fruitask.com/assets/file_upload/Jk14xOv2XiiDa67/ZE1aQmk5SUVDZFNYYWJGeHB4UU84M3FvQWcvQzkxNTZtQjg5Sm5WdDlLM2s2K0w1TmJyRmh1amFqcTBTaUxDZ2taND0.jpg" alt=""
                className='w-full h-56 rounded-b-3xl object-cover' />
            </div>


            <div className='p-2.5'>
                <div className='bg-white rounded-lg p-2.5 w-full'>
                <GreetingsTitle text="Miguel Chicken" />
                <div className='flex justify-start items-center space-x-1'>
                    <MarkerSolid c="red" w="15" h="15" />
                    <p className='text-red-500 text-sm font-normal'>San Manuel, Villa Mauel, Puerto Princesa,Palawan, Philippines 5300</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default StorePage;