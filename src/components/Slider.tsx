import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export const Slider = ({ slides = [] }: { slides?: string[] }) => {
    const [imageOne, setImageOne] = useState(0);
    const [imageTwo, setImageTwo] = useState(1);
    const [activeImage, setActiveImage] = useState(1);
    const returnNewImageIndex = (index: number) => {
        let newNumber = index + 1;
        if (newNumber >= slides?.length) {
            newNumber = 0;
        }
        return newNumber;
    };
    const timer = useRef<ReturnType<typeof setTimeout>>();
    useEffect(() => {
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            setImageOne(returnNewImageIndex(imageOne));
            setImageTwo(returnNewImageIndex(imageTwo));
            activeImage === 1 ? setActiveImage(2) : setActiveImage(1);
        }, 8000);
        return () => clearTimeout(timer.current);
    }, [activeImage, slides]);
    return (
        <div className='w-full h-screen relative'>
            <Image
                alt='background'
                src={slides?.[imageOne]}
                objectFit='cover'
                layout='fill'
                objectPosition='center center'
            />
            <Image
                className={'opacity-0 animate-fadeIn delay-1000'}
                key={imageTwo}
                alt='background'
                src={slides?.[imageTwo]}
                objectFit='cover'
                layout='fill'
                objectPosition='center center'
            />
        </div>
    );
};
