import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Tags } from "lucide-react";

export const DATA = {
  name: "Sudip Pandey",
  initials: "DV",
  url: "",
  location: "Zirakpur",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Blockchain enthusiast turned crypto trader and community helper. Iam into playing moba games and helping people. Very active on Telegram, Discord & Reddit.",
  summary:
    "Crypto Trader turned community maximalist with background of  video editing and content writing While passionate about comic books and MMA",
  avatarUrl: "/Screenshot_2024-09-01_at_2.42.13_AM.png",
  skills: [
    "Blog Writing",
    "Video Editing",
    "Telegram and Discord Bots",
    
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    
  ],
  contact: {
    email: " sudipnub@gmail.com",
    tel: "+9190070 36841",
    social: {
      
      Telegram: {
        name: "Telegram",
        url: "https://t.me/goodomenok",
        icon: Icons.Telegram,

        navbar: true,
      },
     
      X: {
        name: "X",
        url: "https://x.com/Ricepappi",
        icon: Icons.x,

        navbar: true,
      },
     
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Oasis Foundation",
      href: "",
      badges: [],
      location: "Remote",
      title: "Community Ambassador & Moderator for Indian regional community ",
      logoUrl: "/logo/IMG_0251.jpg",
      start: "2021 December",
      end: "2022 July",
      description:
        "",
    },
    {
      company: "Open Forest Protocol",
      badges: [],
      href: "",
      location: "Remote",
      title: "Community Moderator - Discord & Reddit ",
      logoUrl: "/logo/IMG_0252.jpg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Renaissance Labs",
      href: "",
      badges: [],
      location: "Santa Clara, CA",
      title: "Community Manager - Manage all social handles Twitter, Discord & Telegram",
      logoUrl: "/logo/Screenshot_2024-09-01_at_2.39.21_AM.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "",
    },
    {
      company: "Shardeum",
      href: "",
      badges: [],
      location: "San Jose, CA",
      title: "Community Moderator, moderate telegram, discord & reddit community. Organised various contests, hold quizes and community connects weekly",
      logoUrl: "/logo/IMG_0253.jpg",
      start: "December 2022",
      end: "Presently Working",
      description:
        "",
    },
   
  ],
  education: [
    
    {
      school: "Chandigarh University",
      href: "",
      degree: "Bachelor of Engineering Computer Science and Engineering  2016-2020",
      logoUrl: "/Chandigarh_University_Seal.png",
      start: "2016",
      end: "2020",
    },
    
  ],
  projects: [
    {
      title: "Near Crocs",
      href: "",
      dates: "Jan 2021 - Mar 2021",
      active: true,
      description:
        "",
      
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Started the Oasis Indian community,",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: " Grew the Open Forest Protocol sub reddit to one of the largest in the ReFi niche",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: " ⁠Achieved 27K & 10K + followers in the Renaissance Labs Discord & Twitter handle",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "Hosted multiple community connects / quizzes on Shardeum Telegram community ",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: " ⁠Achieved 80K+ members  in the Shardeum community making the second largest Layer 1 community",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      
    },
    
        
  ],
} as const;
