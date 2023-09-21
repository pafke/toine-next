import StoryblokStory from '@storyblok/react/story';

export default async function Home() {
    const res = await fetch(
        `https://api.storyblok.com/v2/cdn/stories/home?version=published&token=${process.env.ACCESS_TOKEN}`
    );
    const data = await res.json();
    return (
        <div>
            <StoryblokStory story={data.story} />
        </div>
    );
}
