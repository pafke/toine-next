import { storyblokEditable } from '@storyblok/react/rsc';
import { TextBlockStoryblok } from '../../component-types-sb';
import { RichText } from './RichText';

const SlideShow = ({ blok }: { blok: TextBlockStoryblok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <div className='relative z-10 md:max-w-4xl md:m-20 md:mb-0'>
                <div className='text-[#a5a59d] p-12 bg-gray-900/80'>
                    <RichText text={blok?.text} />
                </div>
                <img
                    className='opacity-80 mt-12'
                    width='200'
                    height='200'
                    src='/images/TP_monogramcirkel_zwart_120pt.svg'
                />
            </div>
        </div>
    );
};

export default SlideShow;
