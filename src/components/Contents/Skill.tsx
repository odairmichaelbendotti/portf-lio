import {
  personalInfo,
  skillCategories,
  skillsContent,
} from "../../data/content";

export default function SkillsContent({
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
            {skillsContent.content[0]}
          </p>
          {skillCategories.map((category) => (
            <div key={category.name} className="mb-4">
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                {category.name === "Frontend" ? (
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
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                ) : (
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
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                )}
                {category.name}
              </h4>
              <ul className="space-y-1">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300"
                  >
                    <span>{skill.name}</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${i < skill.rating ? "bg-amber-500" : "bg-slate-300 dark:bg-slate-600"}`}
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2 pl-11">
        <button
          onClick={() => onNavClick("projects")}
          className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium rounded-xl transition-colors"
        >
          View My Projects
        </button>
        <button className="px-4 py-2 bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-xl transition-colors">
          Download CV
        </button>
      </div>
    </div>
  );
}
