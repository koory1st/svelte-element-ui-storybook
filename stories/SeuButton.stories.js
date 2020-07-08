import SeuButtonStory from './SeuButton.storybook.svelte';
import { withKnobs, select } from '@storybook/addon-knobs';

export default { title: 'SeuButton', decorators: [withKnobs] };

const directionOptions = {
  vertical: 'vertical',
  horizontal: 'horizontal',
};

export const SeuButton = () => ({
  Component: SeuButtonStory,
  props: {
    direction: select('direction', directionOptions, '', 'groupId-1'),
  },
});
