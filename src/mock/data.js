import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Candy Garcia,',
  subtitle: 'Full Stack Developer',
  cta: 'Learn more about me and my work',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/15rM91JynpZypws7L76gpnUAxuLD3EPTY/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'sandr.JPG',
    title: 'Search and Rescue',
    info: '',
    info2: '',
    url: 'https://candygarcia014.github.io/search-and-rescue/',
    repo: 'https://github.com/candygarcia014/search-and-rescue', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'nogym.JPG',
    title: 'No Gym',
    info: '',
    info2: '',
    url: 'https://nogym.herokuapp.com/login',
    repo: 'https://github.com/TChristensenDrumz/NoGym', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weather.JPG',
    title: 'Weather Dashboard',
    info: '',
    info2: '',
    url: 'https://candygarcia014.github.io/WeatherDash/',
    repo: 'https://github.com/candygarcia014/WeatherDash', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'friends.JPG',
    title: 'Friends Trivia Game',
    info: '',
    info2: '',
    url: 'https://candygarcia014.github.io/friends-trivia-quiz/',
    repo: 'https://github.com/candygarcia014/friends-trivia-quiz', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fitnesstracker.JPG',
    title: 'Fitness Tracker',
    info: '',
    info2: '',
    url: 'https://fitness-tracker-hw1717.herokuapp.com/?id=6005447b194e1d001795f387',
    repo: 'https://github.com/candygarcia014/fitness-tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'notetaker.JPG',
    title: 'Note Taker App',
    info: '',
    info2: '',
    url: 'https://mysterious-wave-81993.herokuapp.com/',
    repo: 'https://github.com/candygarcia014/awesome-note-taker', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Email me today!',
  btn: 'click here',
  email: 'Candygarcia014@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/candygarcia014_',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/candy-garcia014/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/candygarcia014',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
