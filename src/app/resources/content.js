const person = {
  firstName: "Vidhi",
  lastName: "Ahir",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Developer",
  avatar: "/images/avatar.jpg",
  location: "", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/vidhiahir/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/vidhiahir/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:vidhiahir13@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Developer</>,
  subline: (
    <>
      I'm Vidhi Ahir, a Frontend developer with a Fullstack mindset
      <br /> Turning complex ideas into elegant web solutions
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a passionate frontend developer with a go-getter mindset, constantly
        enhancing my skills in both frontend and backend development. I thrive
        in team environments while bringing my unique individuality, always
        learning, growing, and building impactful solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Persistent Systems",
        timeframe: "January,2024 - October,2024",
        role: "Software Engineer",
        achievements: [
          <>
            Enhanced skills in Testing, REST APIs, MVC patterns, Authentication
            Mechanisms, and Debugging Techniques
          </>,
          <>
            Trained in Software Development Life Cycle (SDLC), Object-Oriented
            Programming (OOP), Git essentials, and Database Management through
            structured training
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "NewAge Infotech",
        timeframe: "May,2023 - July,2023",
        role: "Full stack developer Intern",
        achievements: [
          <>
            Developed a full-stack Transport management system for managing the
            shipments (a C2C transaction)
          </>,
          <>
            Implemented real-time shipment tracking through different phases and
            analytics dashboard
          </>,
        ],
        images: [],
      },
    ],
  },
  education: {
    display: false, // set to false to hide this section
    title: "Education",
    experiences: [],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Dhirubhai Ambani Institute of Information and Communication Technology(DAIICT)",
        description: (
          <>B.Tech in Information and Communication Technology (ICT)</>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        name: "Javascript",
        icon: "javascript",
        link: "1",
      },
      {
        name: "Typescript",
        icon: "typescript",
        link: "2",
      },
      {
        name: "C++",
        icon: "C++",
        link: "3",
      },
      {
        name: "React",
        icon: "react",
        link: "4",
      },
      {
        name: "SQL",
        icon: "SQL",
        link: "5",
      },
      {
        name: "Nodejs",
        icon: "nodejs",
        link: "6",
      },
      {
        name: "Mongodb",
        icon: "mongodb",
        link: "7",
      },
      {
        name: "Expressjs",
        icon: "Expressjs",
        link: "8",
      },
      {
        name: "Postman",
        icon: "postman",
        link: "9",
      },
    ],
  },
};

const projects = {
  label: "Projects",
  content: [
    {
      title: "Datapix",
      subname: "Data Visualization Platform",
      image: "/images/datapix.jpg",
      techStack: ["Next.js", " shadcn/ui", "react-query", "MongoDB"],
      github: "https://github.com/vidhiahir/datapix-data-viewer-webapp",
      live: "", // Optional
    },
    {
      title: "BeatStream",
      subname: "Music Streaming Platform",
      image: "/images/beatstream.jpg",
      techStack: [
        "ReactJS",
        "Node.js",
        "Socket.io",
        "Cloudinary",
        "Clerk",
        "shadcn/ui",
        "Zustand",
        "ExpressJS",
        "MongoDB",
      ],
      github: "https://github.com/vidhiahir/Hotel_booking_app",
      live: "", // Optional
    },
    {
      title: "DreamStay",
      subname: "Hotel Booking Platform",
      image: "/images/dreamstay.jpg",
      techStack: [
        "ReactJS",
        "MUI",
        "JWT tokens",
        "moment-js",
        "Node.js",
        "Socket.io",
      ],
      github: "https://github.com/vidhiahir/DreamStay_Hotel-booking-webapp",
      live: "", // Optional
    },
    {
      title: "Transport management System",
      image: "/images/TMS.png",
      techStack: ["React", "Node.js", "MUI", "ExpressJs", "MySQL"],

      github: "https://github.com/vidhiahir/Transport_Management_System",
      live: "", // Optional
    },
  ],
};

const contact = {
  label: "Contact",
  title: "Get in Touch",
  description: "Feel free to reach out for opportunities or just to connect.",
  form: {
    inputs: [
      {
        id: "name",
        name: "name",
        label: "Name",
        placeholder: "Enter your name",
        required: true,
      },
      {
        id: "email",
        name: "email",
        label: "Email",
        placeholder: "Enter your email",
        required: true,
      },
      {
        id: "message",
        name: "message",
        label: "Message",
        placeholder: "Type your message here",
        required: true,
      },
    ],
    buttonLabel: "Send message",
    successMessage: "Thanks for reaching out!",
    errorMessage: "Something went wrong. Please try again later.",
  },
};

export { about, contact, home, person, projects, social };
