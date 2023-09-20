import {StoryblokStory} from 'storyblok-generate-ts'

export interface FeatureStoryblok {
  name?: string;
  _uid: string;
  component: "feature";
  [k: string]: any;
}

export interface GridStoryblok {
  columns?: any[];
  _uid: string;
  component: "grid";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: any[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export type MultiassetStoryblok = {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  [k: string]: any;
}[];

export interface SlideshowImagesStoryblok {
  background_slideshow?: MultiassetStoryblok;
  _uid: string;
  component: "slideshow_images";
  [k: string]: any;
}

export interface TeaserStoryblok {
  headline?: string;
  _uid: string;
  component: "teaser";
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface TextBlockStoryblok {
  text?: RichtextStoryblok;
  _uid: string;
  component: "text_block";
  [k: string]: any;
}
