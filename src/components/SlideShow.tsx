import { storyblokEditable } from '@storyblok/react/rsc';
import { Slider } from './Slider';
import { SlideshowImagesStoryblok } from '../../component-types-sb';

const SlideShow = ({ blok }: { blok: SlideshowImagesStoryblok }) => {
    const slides = blok?.background_slideshow?.map((slide) => slide?.filename);
    return (
        <div {...storyblokEditable(blok)}>
            <div className='fixed left-0 top-0 w-full h-full'>
                <Slider slides={slides} />
            </div>
        </div>
    );
};

export default SlideShow;
