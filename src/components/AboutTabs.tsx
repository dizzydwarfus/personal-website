'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface EducationItem {
  logo: string;
  degree: string;
  institution: string;
  start: string;
  end: string;
}

interface ExperienceItem {
  logo: string;
  company: string;
  position: string;
  duration: string;
}

interface SkillItem {
  logo: string;
  skill: string;
  description: string;
}

interface AboutData {
  education: EducationItem[];
  experience: ExperienceItem[];
  skills: SkillItem[];
}

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState<'education' | 'experience' | 'skills'>('education');
  const [data, setData] = useState<AboutData>({
    education: [],
    experience: [],
    skills: [],
  });

  useEffect(() => {
    // Fetch local JSON from /data/about_information.json
    fetch('/data/about_information.json')
      .then((res) => res.json())
      .then((json: AboutData) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  console.log(data)

  return (
    <div>
      {/* Tab Buttons */}
      <div className="flex space-x-8 mb-4">
        {(['education', 'experience', 'skills'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative text-lg pb-1 ${
              activeTab === tab ? 'text-pink-500 after:w-full' : ''
            } 
            after:absolute after:bottom-[-2px] after:left-0 after:h-[3px] after:bg-pink-500 
            after:w-0 hover:after:w-full after:transition-all`}
          >
            {capitalize(tab)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="text-white">
        {activeTab === 'education' && (
          <TabContentEducation list={data.education} />
        )}
        {activeTab === 'experience' && (
          <TabContentExperience list={data.experience} />
        )}
        {activeTab === 'skills' && <TabContentSkills list={data.skills} />}
      </div>
    </div>
  );
}

function TabContentEducation({ list }: { list: EducationItem[] }) {
  if (!list || list.length === 0) return <p>No education data available.</p>;

  return (
    <ul className="space-y-4">
      {list.map((item, idx) => (
        <li key={idx} className="flex gap-4 items-start">
          {/* Logo */}
          <div className="w-16 h-16 flex-shrink-0">
            {item.logo && (
              <Image
                src={item.logo}
                width={64}
                height={64}
                alt="logo"
                className="w-full h-full object-contain"
              />
            )}
          </div>
          {/* Content */}
          <div>
            <span className="font-semibold">{item.degree}</span>
            <div>{item.institution}</div>
            <div className="text-sm text-gray-300">
              {item.start} - {item.end}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

function TabContentExperience({ list }: { list: ExperienceItem[] }) {
  if (!list || list.length === 0) return <p>No experience data available.</p>;

  return (
    <ul className="space-y-4">
      {list.map((item, idx) => (
        <li key={idx} className="flex gap-4 items-start">
          <div className="w-16 h-16 flex-shrink-0">
            {item.logo && (
              <Image
                src={item.logo}
                width={64}
                height={64}
                alt="logo"
                className="w-full h-full object-contain"
              />
            )}
          </div>
          <div>
            <span className="font-semibold">{item.position}</span>
            <div>
              {item.company}, {item.duration}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

function TabContentSkills({ list }: { list: SkillItem[] }) {
  if (!list || list.length === 0) return <p>No skills data available.</p>;

  return (
    <ul className="space-y-4">
      {list.map((item, idx) => (
        <li key={idx} className="flex gap-4 items-start">
          <div className="w-16 h-16 flex-shrink-0">
            {item.logo && (
              <Image
                src={item.logo}
                width={64}
                height={64}
                alt="logo"
                className="w-full h-full object-contain"
              />
            )}
          </div>
          <div>
            <span className="font-semibold">{item.skill}</span>
            <div>{item.description}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}