const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Daniel Adeboye',
  role: 'AI Engineer',
  description:
    "My journey has been fueled by a love for mathematics, science, and the limitless potential of artificial intelligence. I hold a distinguished first-class honors degree in Electrical Engineering. 🔭 I’m currently working on developing AI applications to revolutionize health care, diagnostics, and treatment methodologies.👯 I’m looking to collaborate on research centered around transformer architectures, image segmentation, and generative models.⚡ Fun fact: When I'm not immersed in the world of AI, you can find me engrossed in amazing books like The Bible, Thinking Fast, and Slow, Movies have a special place in my heart, especially those that bring true stories to life on the big screen. I cherish my quiet moments, during which I ponder the vast tapestry of past and future possibilities. Exploring the fate of the world and its intricate complexities fuels my curiosity and creativity.",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com/in/daniel-adeboye/',
    github: 'https://github.com/daunsid',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Golang',
  'C/C++',
  'Azure',
  'AWS',
  'Ubuntu - Linux',
  'API',
  'Machine Learning',
  'Computer Vision',
  'Generative AI',
  'Docker',
  'MLOPs',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'adeboye.daniel17@mail.com',
}

export { header, about, projects, skills, contact }
