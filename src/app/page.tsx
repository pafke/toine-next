import { getStoryblokApi } from '@storyblok/react/rsc';
import StoryblokStory from '@storyblok/react/story';

async function fetchData() {
    const currentDate = new Date();
    const timestamp = currentDate.getTime();
    let sbParams: {
        version: 'draft' | 'published' | undefined;
        cv: number;
    } = { version: 'published', cv: timestamp };

    const storyblokApi = getStoryblokApi();
    return storyblokApi.get(`cdn/stories/home`, sbParams);
}

export default async function Home() {
    const { data } = await fetchData();
    return (
        <div>
            <StoryblokStory story={data.story} />
        </div>
    );
}
