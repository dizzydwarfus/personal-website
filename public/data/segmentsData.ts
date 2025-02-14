export const icebergSegments = [
  {
    id: 'L1',
    title: 'Professional Overview',
    image: '/images/iceberg_L1.jpg',
    width: 1000,
    height: 300,
    description: `A broad look at my professional life.`,
    details: {
      jobs: [
        {
          company: 'Just Eat Takeaway.com',
          role: 'Platform Engineer',
          start: "September 2024",
          end: 'Present',
          location: 'Enschede, Netherlands',
          description: 'Managing Kubernetes clusters, improving Internal Platforms',
          logo: '/images/jobs/justeattakeaway.jpeg',
        },
        {
          company: 'BASF 3DPS Forward AM',
          role: 'Sales Operations Manager',
          start: "June 2023",
          end: "September 2024",
          location: 'Emmen, Netherlands',
          description: 'Oversaw sales metrics and operational procedures',
          logo: '/images/jobs/basf_forward_am.jpeg',
        },
      ]
    }
  },
  {
    id: 'L2',
    title: 'Personal Projects',
    image: '/images/iceberg_L2.jpg',
    width: 1000,
    height: 200,
    description: `Projects I've built in my spare time.`,
    details: {
      projects: [
        {
          name: 'Freelance Time Tracker',
          year: '2022',
          techStack: ['Python', 'Javascript', 'Flask', 'Tailwind', 'HTML'],
          description: 'A web app to help freelancers track customers, projects, hours and generate invoices automatically.',
          imageUrl: '',
          repoLink: 'https://github.com/dizzydwarfus/invoicing-system',
          liveLink: '',
        },
      ]
    }
  },
  {
    id: 'L3',
    title: 'Hobbies & Interests',
    image: '/images/iceberg_L3.jpg',
    width: 1000,
    height: 200,
    description: 'A collection of activities that spark my joy and curiosity.',
    details: {
      hobbies: [
        {
          name: 'Guitar',
          icon: '/images/hobbies/guitar.png', 
          level: 'Casual Player',
          description: 'I love learning acoustic fingerstyles and chord progressions on songs that I enjoy listening/singing to.',
        },
        {
          name: 'Analyzing Companies',
          icon: '/images/hobbies/financial_statement.png', 
          level: 'Enthusiast',
          description: 'Following the economy and studying financial statements to learn how a company is valued on paper.',
        },
        {
          name: 'Basketball',
          icon: '/images/hobbies/basketball.jpg', 
          level: 'Favourite Sport',
          description: 'A stress reliever by myself or a fun activity with a group.',
        },
        {
          name: 'Indoor Bouldering & Climbing',
          icon: '/images/hobbies/indoor_climbing.png', 
          level: 'Weekly Climber',
          description: 'Great physical challenge and problem-solving on the wall—improves focus and strength.',
        },
      ],
    },
  },
  {
    id: 'L4',
    title: 'Personal Growth & Learnings',
    image: '/images/iceberg_L4.jpg',
    width: 1000,
    height: 200,
    description: 'Key milestones and lessons learned along my journey.',
    details: {
      milestones: [
        {
          year: '2020',
          title: 'Dove into Python',
          lessons: [
            'Used Python for master thesis in Numerical Modeling',
            'Learned the basics of Data Science',
          ],
        },
        {
          year: '2022',
          title: 'Apprenticed to learn Chemical Extrusion of 3D-printing Filaments',
          lessons: [
            'Navigated complexity of single-screw extrusion',
            'Familiarized with melt profiles and shear effect on plastics',
          ],
        },
        {
          year: '2024',
          title: 'Exploring Platform Engineering',
          lessons: [
            'Learning core technologies - Kubernetes, Helm, Terraform',
            'Dove into AWS Management',
          ],
        },
      ],
    },
  },
  {
    id: 'L5',
    title: 'Core Values and Principles',
    image: '/images/iceberg_L5.jpg',
    width: 1000,
    height: 200,
    description: 'The guiding principles that shape who I am.',
    details: {
      values: [
        {
          name: 'Integrity',
          icon: '/images/values/integrity.png',
          description: 'I strive to be honest and transparent in my interactions.',
        },
        {
          name: 'Curiosity',
          icon: '/images/values/curiosity.png',
          description: 'Always eager to learn, explore new ideas, and ask questions.',
        },
        {
          name: 'Continuous Learning',
          icon: '/images/values/learning.png',
          description: 'A belief in lifelong education, both personally and professionally.',
        },
      ],
    },
  },
];