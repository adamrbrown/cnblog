import { Post } from '../api/types';

const posts: Post[] = [
  {
    id: '4',
    title: 'Let us see how this handles a super long blog title',
    body: 'Lorem Ipsum dates back to the 1500s when an unknown printer took a galley of type and scrambled it to create a type specimen book. This text, though appearing nonsensical, is derived from sections of Cicero’s work “De Finibus Bonorum et Malorum” (The Extremes of Good and Evil), written in 45 BC. The text has been altered over the years, leading to the jumbled Latin that we see today. Its purpose was simple: to serve as filler text that mimics the natural flow of written language without distracting the reader with actual content.',
    tags: ['cool'],
    creationTime: 1734147789,
  },
  {
    id: '3',
    title: 'Post Title 3',
    body: 'Etiam volutpat augue vitae interdum dignissim. Mauris et pulvinar nibh. Nullam pharetra scelerisque purus quis ultricies. Aenean eget dui id nibh lacinia aliquet eu id justo. Praesent nisl magna, vestibulum non justo eleifend, posuere cursus ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec tempus orci vitae malesuada aliquet. Morbi eget bibendum nisl. Sed odio mauris, semper id suscipit sed, rhoncus et lacus. Nulla dignissim tristique dignissim. Vivamus feugiat lobortis imperdiet. Nullam aliquam, felis et gravida vulputate, erat ex interdum ligula, ac imperdiet erat ipsum eget risus. Quisque rutrum fringilla nulla et posuere. In posuere lacinia dui, eu egestas ante vestibulum sit amet. Donec mattis eu ex vitae semper. Mauris justo quam, efficitur id bibendum mattis, ultricies a augue.',
    tags: ['cool', 'fun', 'potato', 'raccoon'],
    creationTime: 1734147809,
  },
  {
    id: '2',
    title: 'Post Title 2',
    body: 'Pellentesque viverra ultricies quam ac molestie. Nullam id commodo orci. Nullam condimentum felis nec iaculis lobortis. Ut posuere sed metus a dignissim. Donec in lacus viverra, blandit justo ac, facilisis elit. Donec et aliquet ante. Nam eu ipsum quis ante pretium egestas at et nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce condimentum molestie erat, nec feugiat nisl tristique sed.',
    tags: ['awesome', 'woohoo', 'potato'],
    creationTime: 1734147790,
  },
  {
    id: '1',
    title: 'Post Title 1',
    body: 'Pellentesque nulla tellus, lobortis nec tortor eget, porttitor aliquet lacus. Phasellus ex arcu, venenatis sit amet efficitur euismod, scelerisque et felis. Integer ac diam nisl. Curabitur ut metus massa. Cras id massa purus. Nulla aliquam et mi lobortis aliquet. Duis porta est sem, ut bibendum neque laoreet ut. Vestibulum nec vestibulum velit. Morbi at leo cursus, efficitur nisl non, iaculis elit. Praesent tempus cursus libero, in convallis ligula posuere eget. Curabitur odio est, dictum in orci nec, euismod tincidunt lorem. Suspendisse ut augue vitae quam imperdiet molestie nec ac ligula. Sed sem dolor, varius ac euismod non, dictum et turpis. Etiam eu sem in orci imperdiet semper a id nunc. Nullam ornare felis nisi.',
    tags: ['awesome', 'cool', 'woohoo', 'so', 'many', 'tags'],
    creationTime: 1734147064,
  },
];

export { posts };
