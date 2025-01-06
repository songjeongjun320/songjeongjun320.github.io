"use client";
import React, { useState } from "react";
import {
  Home,
  FileText,
  Briefcase,
  Code,
  ThumbsUp,
  Github,
  Play,
  Linkedin,
  Mail,
  Phone,
  Search,
} from "lucide-react";
import Link from "next/link";
import NavItem from "./NavItem";
import Image from "next/image";

const navItems = [
  {
    name: "Resume",
    icon: <FileText className="w-6 h-6" />,
    href: "#resume",
    onClick: (e: React.MouseEvent) => {
      e.preventDefault();
      window.open("/pdf/JeongJun_Resume_v30.pdf", "_blank");
    },
  },
  { name: "Career", icon: <Briefcase className="w-6 h-6" />, href: "#career" },
  { name: "Project", icon: <Code className="w-6 h-6" />, href: "#project" },
  {
    name: "Recommendation",
    icon: <ThumbsUp className="w-6 h-6" />,
    href: "#recommendation",
    onClick: (e: React.MouseEvent) => {
      e.preventDefault();
      window.open("/pdf/Recommendation.pdf", "_blank");
    },
  },
  {
    name: "Github",
    icon: <Github className="w-6 h-6" />,
    href: "https://github.com/songjeongjun320",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-6 h-6" />,
    href: "https://www.linkedin.com/in/junsong0602",
  },
  {
    name: "Email",
    icon: <Mail className="w-6 h-6" />,
    href: "mailto:songjeongjun320@gmail.com",
  },
  {
    name: "Phone",
    icon: <Phone className="w-6 h-6" />,
    href: "tel:+16238894796",
  },
];

const languages = [
  "Python",
  "Java",
  "C++",
  "Next.js",
  "TypeScript",
  "JavaScript",
];

const projects = [
  {
    id: 1,
    title: "Who am I?",
    image: "/img/whoami.jpg",
    views: "1.2K views",
    date: "2 days ago",
    description: "Explanation for myself, ",
  },
  {
    id: 2,
    title: "MindVillage - Hack for Humanity",
    image: "/img/mindvillage.png",
    views: "1.2K views",
    date: "2 days ago",
    description: "To resolve the mental issues",
  },
  {
    id: 3,
    title: "Why don't you be more nice(r)?",
    image: "/img/hackathon.jpg",
    views: "3.4K views",
    date: "1 week ago",
    description: "2nd Prize Ethical Hackathon",
  },
  {
    id: 4,
    title: "Project 3",
    image: "/img/ocean1.jpg",
    views: "5.6K views",
    date: "2 weeks ago",
    description: "This is a brief description of Project 3.",
  },
  {
    id: 5,
    title: "Project 4",
    image: "/img/ocean2.jpg",
    views: "7.8K views",
    date: "3 weeks ago",
    description: "This is a brief description of Project 4.",
  },
  {
    id: 6,
    title: "Project 5",
    image: "/img/city.jpg",
    views: "9.0K views",
    date: "1 month ago",
    description: "This is a brief description of Project 5.",
  },
  {
    id: 7,
    title: "Project 6",
    image: "/img/jun-wallpaper.jpg",
    views: "10.2K views",
    date: "2 months ago",
    description: "This is a brief description of Project 6.",
  },
];

export default function YouTubePortfolio() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Left Sidebar */}
      <div className="w-64 flex-shrink-0 p-6 flex flex-col">
        <div className="flex items-center mb-6">
          <Home className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold">JeongJun Song</span>
        </div>
        <Image
          src="/img/jun-square-2.jpg"
          alt="JeongJun Song"
          width={200}
          height={200}
          className="rounded-full mb-6"
        />
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <NavItem
              key={item.name}
              name={item.name}
              href={item.href}
              icon={item.icon}
              onClick={item.onClick}
            />
          ))}
        </nav>
        <div className="h-px bg-gray-700 my-4" />
        <div className="mt-2">
          <h3 className="text-sm font-semibold mb-3">LANGUAGES</h3>
          {languages.map((lang) => (
            <div key={lang} className="flex items-center p-1">
              <Code className="w-4 h-4 mr-2" />
              <span className="text-sm">{lang}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="mb-6 flex items-center">
          <Search className="w-5 h-5 mr-2 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects"
            className="bg-gray-800 text-white px-4 py-2 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/project/${project.id}`}
              className="block"
            >
              <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition">
                <div className="relative w-full pt-[56.25%]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="absolute top-0 left-0"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-sm mb-1 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 mb-1">
                    {project.views} • {project.date}
                  </p>
                  <p className="text-xs text-gray-300 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
