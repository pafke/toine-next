import { render } from 'storyblok-rich-text-react-renderer';
import { TextBlockStoryblok } from '../../component-types-sb';

export const RichText = ({ text }: { text: TextBlockStoryblok['text'] }) => {
    return <div>{render(text)}</div>;
};
