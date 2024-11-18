

import React from 'react';
import Image from 'next/image';

interface PropsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card: React.FC<PropsType> = ({ title, desc, img, tags }) => {
    return (
        <div className='border-2 border-blue-400 p-2 w-[80vw] sm:w-[340px]  shadow-md mb-4' data-aos="fade-down-left">
            <div>
                <Image
                    className='w-full  rounded-t-lg h-[300px] overflow-hidden'
                    src={img}
                    width={350}
                    height={350}
                    alt={title}
                />
            </div>
            <div className='p-4 space-y-4'>
                <div className='text-2xl font-bold'>{title}</div>
                <div>{desc}</div>
                <div className='flex flex-wrap space-x-2 mt-2'>
                    {tags.map((el, index) => (
                        <div className={`tag tag-${index}`} key={el}>
                            {el}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

 export default Card;


