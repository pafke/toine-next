import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

const Page = ({ blok }) => {
    return (
        <main className='overflow-auto' {...storyblokEditable(blok)}>
            {blok.body.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </main>
    );
};

export default Page;
