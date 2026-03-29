import { personalInfo, projects, projectsIntro } from "../../data/content";

export default function ProjectsContent({
  onNavClick,
}: {
  onNavClick: (id: string) => void;
}) {
  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <img
          src={personalInfo.avatar}
          alt=""
          className="w-8 h-8 rounded-full shrink-0 mt-1"
        />
        <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl rounded-tl-none p-4 max-w-[85%]">
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
            {projectsIntro.content}
          </p>
        </div>
      </div>
      {projects.map((project) => (
        <div key={project.id} className="flex gap-3">
          <img
            src={personalInfo.avatar}
            alt=""
            className="w-8 h-8 rounded-full shrink-0 mt-1"
          />
          <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl rounded-tl-none p-4 max-w-[85%]">
            <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
              {project.title}
            </h4>
            <div className="rounded-xl overflow-hidden mb-3">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
              {project.summary}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 text-sm font-medium hover:underline"
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
      <div className="flex gap-2 pl-11">
        <button
          onClick={() => onNavClick("clients")}
          className="px-4 py-2 bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-xl transition-colors"
        >
          View My Clients
        </button>
        <button
          onClick={() => onNavClick("contact")}
          className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium rounded-xl transition-colors"
        >
          Contact Me
        </button>
      </div>
    </div>
  );
}
