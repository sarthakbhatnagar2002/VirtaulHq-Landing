import { BotMessageSquare, BatteryCharging, Fingerprint, ShieldHalf, PlugZap, GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "Saleem Yamal",
    company: "TechSync Labs",
    image: user1,
    text: "VirtualHQ transformed the way our team collaborates. The virtual environment is seamless, and the real-time interaction feels just like being in the same room.",
  },
  {
    user: "Xio Arina",
    company: "InnovateX Studios",
    image: user2,
    text: "Our team has never been more productive! VirtualHQ's intuitive platform allowed us to work together effortlessly across different time zones.",
  },
  {
    user: "Oliv Carter",
    company: "Future Horizons",
    image: user3,
    text: "The immersive tools provided by VirtualHQ took our project presentations to the next level. It's like being at a live event, but from anywhere!",
  },
  {
    user: "Ethan Parker",
    company: "Global Dynamics",
    image: user4,
    text: "We've experienced a significant boost in collaboration and creativity thanks to VirtualHQ. It makes remote teamwork so much more engaging and fun!",
  },
  {
    user: "Robert Gamacho",
    company: "Peak Innovations",
    image: user5,
    text: "I can't imagine working without VirtualHQ now. The platform enables our team to interact in real-time, as if we're physically together, no matter where we are.",
  },
  {
    user: "Shanaya Jain",
    company: "NextGen Solutions",
    image: user6,
    text: "VirtualHQ has redefined how we collaborate remotely. The ability to create custom virtual spaces has allowed our team to work more cohesively and creatively.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Space Creator",
    description:
      "Craft immersive virtual environments effortlessly with drag-and-drop tools, giving you complete creative control.",
  },
  {
    icon: <Fingerprint />,
    text: "Universal Access",
    description:
      "Experience cross-platform support, allowing your VR applications to run smoothly on desktops, mobiles, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Ready-Made Venues",
    description:
      "Choose from a collection of stylish templates to quickly set up meeting rooms, lounges, and other interactive environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Instant Preview",
    description:
      "See changes live as you edit your VR space, allowing for seamless and rapid iteration during the design process.",
  },
  {
    icon: <PlugZap />,
    text: "Collaborative Workspace",
    description:
      "Collaborate with team members in real-time, making team-based VR development faster and more efficient.",
  },
  {
    icon: <GlobeLock />,
    text: "User Insights",
    description:
      "Analyze user behavior within your VR environments with built-in analytics, helping you enhance the experience.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Basic virtual space for collaboration",
      "Limited team size (up to 5 members)",
      "Basic customization options",
      "Access to public virtual environments",
    ],
  },
  {
    title: "Pro",
    price: "$15",
    features: [
      "Advanced virtual space customization",
      "Team size up to 25 members",
      "Custom branding and themes",
      "Real-time collaboration and chat",
      "Video conferencing integration",
      "Priority email support",
    ],
  },
  {
    title: "Enterprise",
    price: "$50",
    features: [
      "Unlimited team members",
      "Private virtual environments",
      "Dedicated support with 24/7 availability",
      "Advanced analytics and reporting",
      "Integration with third-party apps",
      "Custom API access",
    ],
  },
];

export const checklistItems = [
  {
    title: "Share Work in Minutes",
    description:
      "Share your virtual workspace and updates instantly with your team, enabling real-time collaboration and feedback from anywhere, anytime in the immersive VHQ environment.",
  },
  {
    title: "AI Assistance to Reduce Time",
    description:
      "Utilize AI-driven tools to speed up development by automating tasks, optimizing workflows, and providing suggestions, all designed to make your VR app creation faster and more efficient.",
  },
  {
    title: "Review Code Without Worry",
    description:
      "Review and approve code changes in real-time within your virtual workspace, ensuring smooth integration and quick fixes, all in an immersive, collaborative environment.",
  },
  {
    title: "Code Merge Made Easy",
    description:
      "Simplify collaboration by easily merging code changes in your VirtualHQ environment, reducing conflicts and accelerating the development process.",
  }
];

export const resourcesLinks = [
  { href: "#", text: "API Reference" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "Getting Started" },
];

export const platformLinks = [
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Supported Platforms" },
];

export const communityLinks = [
  { href: "#", text: "Conferences" },
  { href: "#", text: "Careers" },
  { href: "#", text: "Events & Meetups" },
];