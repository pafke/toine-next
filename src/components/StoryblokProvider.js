/** 1. Tag it as a client component */
'use client';
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import Page from './Page';
import Teaser from './Teaser';
import Feature from './Feature';
import Grid from './Grid';
import SlideShow from './SlideShow';
import TextBlock from './TextBlock';

const components = {
    feature: Feature,
    grid: Grid,
    teaser: Teaser,
    page: Page,
    slideshow_images: SlideShow,
    text_block: TextBlock
};

/** 2. Initialize it as usual */
storyblokInit({
    accessToken: process.env.ACCESS_TOKEN,
    use: [apiPlugin],
    components,
    apiOptions: {
        // storyblok-js-client config object
        cache: { type: 'memory' }
    }
});

export default function StoryblokProvider({ children }) {
    return children;
}
