import {
  personalInfo,
  aboutContent,
  skillsContent,
  skillCategories,
  projects,
  projectsIntro,
  clients,
  clientsContent,
  contactContent,
  contactInfo,
  socialLinks,
  hobbies,
  hobbiesContent,
} from "../data/content";
import type { ReactNode } from "react";

interface ContentAreaProps {
  activeSection: string;
}

export function ContentArea({ activeSection }: ContentAreaProps) {
  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />;
      case "skills":
        return <SkillsSection />;
      case "projects":
        return <ProjectsSection />;
      case "clients":
        return <ClientsSection />;
      case "contact":
        return <ContactSection />;
      case "hobbies":
        return <HobbiesSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="h-full overflow-y-auto p-6 lg:p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <img
            src={personalInfo.avatar}
            alt={personalInfo.fullName}
            className="w-12 h-12 rounded-md border-2 border-[#40cbf5]"
          />
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {getSectionTitle(activeSection)}
            </h2>
            <p className="text-sm text-slate-500 dark:text-gray-400">
              {personalInfo.fullName}
            </p>
          </div>
        </div>
        {renderContent()}
      </div>
    </div>
  );
}

function getSectionTitle(section: string): string {
  const titles: Record<string, string> = {
    about: "About Me",
    skills: "Skills & Technologies",
    projects: "My Projects",
    clients: "Clients & Partners",
    contact: "Get in Touch",
    hobbies: "My Hobbies",
  };
  return titles[section] || "About Me";
}

function AboutSection() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white dark:bg-[#1a1a1a] rounded-md p-6 shadow-sm border border-slate-100 dark:border-[#2a2a2a]">
        <p className="text-slate-700 dark:text-[#40cbf5] text-lg leading-relaxed mb-6">
          {aboutContent.content[0]}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <StatCard icon="star" value="9+" label="Years Experience" />
          <StatCard icon="code" value="62+" label="Projects Completed" />
          <StatCard icon="smile" value="55+" label="Happy Clients" />
          <StatCard icon="calendar" value="Available" label="For Freelance" />
          <StatCard icon="map" value="London" label="Based In" />
        </div>
      </div>
      <QuoteCard />
    </div>
  );
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: string;
  value: string;
  label: string;
}) {
  const icons: Record<string, ReactNode> = {
    star: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
    code: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    smile: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    calendar: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    map: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  };

  return (
    <div className="bg-slate-50 dark:bg-[#2a2a2a] rounded-md p-4 text-center">
      <div className="w-10 h-10 rounded-md bg-[#40cbf5]/10 flex items-center justify-center text-[#40cbf5] mx-auto mb-2">
        {icons[icon]}
      </div>
      <p className="text-2xl font-bold text-slate-900 dark:text-white">
        {value}
      </p>
      <p className="text-sm text-slate-500 dark:text-gray-400">{label}</p>
    </div>
  );
}

function QuoteCard() {
  return (
    <div className="bg-linear-to-br from-[#40cbf5]/10 to-[#40cbf5]/5 dark:from-[#40cbf5]/5 dark:to-[#40cbf5]/10 rounded-md p-6 border border-[#40cbf5]/20 dark:border-[#40cbf5]/20">
      <svg
        className="w-8 h-8 text-[#40cbf5] mb-3"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-slate-700 dark:text-[#40cbf5] italic mb-4 text-lg">
        {personalInfo.quote}
      </p>
      <p className="text-sm font-medium text-[#40cbf5]">
        {personalInfo.quoteAuthor}
      </p>
    </div>
  );
}

function SkillsSection() {
  return (
    <div className="space-y-6 animate-fade-in">
      <p className="text-slate-600 dark:text-slate-400 text-lg">
        {skillsContent.content[0]}
      </p>
      {skillCategories.map((category) => (
        <div
          key={category.name}
          className="bg-white dark:bg-[#1a1a1a] rounded-md p-6 shadow-sm border border-slate-100 dark:border-[#2a2a2a]"
        >
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            {category.name === "Frontend" ? (
              <svg
                className="w-5 h-5 text-[#40cbf5]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-[#40cbf5]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                />
              </svg>
            )}
            {category.name}
          </h3>
          <div className="space-y-3">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center justify-between"
              >
                <span className="text-slate-700 dark:text-[#40cbf5] font-medium">
                  {skill.name}
                </span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${i < skill.rating ? "bg-[#40cbf5]" : "bg-slate-200 dark:bg-[#1a1a1a]"}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectsSection() {
  return (
    <div className="space-y-6 animate-fade-in">
      <p className="text-slate-600 dark:text-slate-400 text-lg">
        {projectsIntro.content}
      </p>
      <div className="grid gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-[#1a1a1a] rounded-md overflow-hidden shadow-sm border border-slate-100 dark:border-[#2a2a2a] group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#212830]/80 to-transparent" />
              <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                {project.title}
              </h3>
            </div>
            <div className="p-6">
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {project.summary}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#40cbf5] font-medium hover:underline"
                >
                  View Project
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClientsSection() {
  return (
    <div className="space-y-6 animate-fade-in">
      <p className="text-slate-600 dark:text-slate-400 text-lg">
        {clientsContent.content[0]}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#1a1a1a] rounded-md p-6 flex items-center justify-center h-24 shadow-sm border border-slate-100 dark:border-[#2a2a2a]"
          >
            <span className="text-lg font-medium text-slate-600 dark:text-[#40cbf5]">
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactSection() {
  const socialIcons: Record<string, ReactNode> = {
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    github: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    facebook: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    twitter: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
        />
      </svg>
    ),
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <p className="text-slate-600 dark:text-slate-400 text-lg">
        {contactContent.content[0]}
      </p>
      <div className="grid gap-4">
        <div className="bg-white dark:bg-[#1a1a1a] rounded-md p-6 shadow-sm border border-slate-100 dark:border-[#2a2a2a] flex items-center gap-4">
          <div className="w-14 h-14 rounded-md bg-[#40cbf5]/10 flex items-center justify-center text-[#40cbf5]">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-gray-400">Email</p>
            <p className="text-lg font-medium text-slate-900 dark:text-white">
              {contactInfo.email}
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-[#1a1a1a] rounded-md p-6 shadow-sm border border-slate-100 dark:border-[#2a2a2a] flex items-center gap-4">
          <div className="w-14 h-14 rounded-md bg-[#40cbf5]/10 flex items-center justify-center text-[#40cbf5]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.607.951.757-3.453a1 1 0 00-.166-.943A8.44 8.44 0 004.94 7.93c0-4.655 3.795-8.44 8.44-8.44 2.237 0 4.34.875 5.922 2.462a8.32 8.32 0 012.461 5.92c0 4.656-3.793 8.44-8.44 8.44h-.004z" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
            <p className="text-lg font-medium text-slate-900 dark:text-white">
              {contactInfo.phone}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-[#1a1a1a] rounded-md p-6 shadow-sm border border-slate-100 dark:border-[#2a2a2a]">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Social Links
        </h3>
        <div className="flex gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-md bg-slate-100 dark:bg-[#2a2a2a] flex items-center justify-center text-slate-600 dark:text-gray-400 hover:bg-[#40cbf5] hover:text-white transition-all"
              title={social.name}
            >
              {socialIcons[social.icon]}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function HobbiesSection() {
  const hobbyIcons: Record<string, ReactNode> = {
    camera: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    plane: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    ),
    dumbbell: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 6h18M3 12h18M3 18h18"
        />
      </svg>
    ),
    gamepad: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
        />
      </svg>
    ),
    headphones: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
        />
      </svg>
    ),
    futbol: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
        />
      </svg>
    ),
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <p className="text-slate-600 dark:text-slate-400 text-lg">
        {hobbiesContent.content[0]}
      </p>
      <div className="grid gap-4">
        {hobbies.map((hobby) => (
          <div
            key={hobby.name}
            className="bg-white dark:bg-[#1a1a1a] rounded-md p-6 shadow-sm border border-slate-100 dark:border-[#2a2a2a] flex items-center gap-4"
          >
            <div className="w-14 h-14 rounded-md bg-[#40cbf5]/10 flex items-center justify-center text-[#40cbf5]">
              {hobbyIcons[hobby.icon]}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {hobby.name}
              </h3>
              <p className="text-slate-500 dark:text-gray-400">
                {hobby.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-slate-600 dark:text-slate-400">
        {hobbiesContent.content[1]}
      </p>
    </div>
  );
}
