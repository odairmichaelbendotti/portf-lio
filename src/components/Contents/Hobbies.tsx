import type { ReactNode } from "react";
import { hobbies, hobbiesContent, personalInfo } from "../../data/content";

export default function HobbiesContent({
  onNavClick,
}: {
  onNavClick: (id: string) => void;
}) {
  const hobbyIcons: Record<string, ReactNode> = {
    camera: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
          clipRule="evenodd"
        />
      </svg>
    ),
    plane: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
      </svg>
    ),
    dumbbell: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v10H5V5z"
          clipRule="evenodd"
        />
      </svg>
    ),
    gamepad: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2v2h2v-2h2V9H9V7H7v2z" />
      </svg>
    ),
    headphones: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.983 5.983 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    ),
    futbol: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2v2h2v-2h2V9H9V7H7v2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  };

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
            {hobbiesContent.content[0]}
          </p>
          <div className="space-y-2 mb-4">
            {hobbies.map((hobby) => (
              <div
                key={hobby.name}
                className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
              >
                <span className="text-amber-500">{hobbyIcons[hobby.icon]}</span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {hobby.name}
                </span>
                <span className="text-slate-500">— {hobby.description}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-700 dark:text-slate-200 text-sm">
            {hobbiesContent.content[1]}
          </p>
        </div>
      </div>
      <div className="flex gap-2 pl-11">
        <button
          onClick={() => onNavClick("contact")}
          className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium rounded-xl transition-colors"
        >
          Let's Connect
        </button>
        <button
          onClick={() => onNavClick("about")}
          className="px-4 py-2 bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-xl transition-colors"
        >
          More About Me
        </button>
      </div>
    </div>
  );
}
