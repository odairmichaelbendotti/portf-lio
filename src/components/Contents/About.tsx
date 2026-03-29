import { aboutContent, personalInfo } from "../../data/content";

export default function AboutContent({
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
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
            {aboutContent.content[0]}
          </p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <svg
                className="w-4 h-4 text-amber-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>9+ Years in Web Development</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <svg
                className="w-4 h-4 text-amber-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span>62+ Completed Projects</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <svg
                className="w-4 h-4 text-amber-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>55+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <svg
                className="w-4 h-4 text-amber-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Available for Freelance</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <svg
                className="w-4 h-4 text-amber-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Based in London, UK</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 pl-11">
        <button
          onClick={() => onNavClick("skills")}
          className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium rounded-xl transition-colors"
        >
          View My Skills
        </button>
        <button
          onClick={() => onNavClick("projects")}
          className="px-4 py-2 bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-xl transition-colors"
        >
          View My Projects
        </button>
      </div>
    </div>
  );
}
