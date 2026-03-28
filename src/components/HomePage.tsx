import { useState, useCallback, useEffect } from "react";
import { personalInfo, navItems } from "../data/content";
import { ContentArea } from "./ContentArea";

export function HomePage() {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleSectionChange = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div
      className={`h-screen w-full overflow-hidden transition-colors duration-300 ${darkMode ? "dark bg-[#0f0f0f]" : "bg-[#f5f5f5]"}`}
    >
      <div className="max-w-6xl mx-auto h-full flex flex-col lg:flex-row gap-4 p-4 lg:p-6">
        {/* Left Column - Profile & Navigation */}
        <div className="lg:w-72 shrink-0 h-full overflow-hidden">
          <div
            className={`rounded-2xl shadow-lg border overflow-hidden h-full flex flex-col ${darkMode ? "bg-[#1a1a1a] border-[#2a2a2a]" : "bg-white border-slate-200"}`}
          >
            {/* Header with Theme Toggle */}
            <div
              className={`p-4 border-b flex items-center justify-between shrink-0 ${darkMode ? "border-[#2a2a2a]" : "border-slate-100"}`}
            >
              <span
                className={`text-xs font-medium uppercase tracking-wider ${darkMode ? "text-gray-400" : "text-slate-500"}`}
              >
                Portfolio
              </span>
              <button
                onClick={toggleTheme}
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                  darkMode
                    ? "bg-[#2a2a2a] text-yellow-400 hover:bg-[#333]"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
                aria-label="Toggle theme"
              >
                {darkMode ? (
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
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
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
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Profile Section - Compact */}
            <div className="p-4 text-center shrink-0">
              <div className="relative w-16 h-16 mx-auto mb-2">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.fullName}
                  className={`w-full h-full rounded-full border-2 shadow-md object-cover ${darkMode ? "border-[#2a2a2a]" : "border-white"}`}
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-[#1a1a1a]"></span>
              </div>

              <h1
                className={`text-base font-bold mb-0.5 ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                {personalInfo.name}
              </h1>
              <p
                className={`text-xs mb-2 ${darkMode ? "text-gray-400" : "text-slate-500"}`}
              >
                {personalInfo.role}
              </p>

              {/* Quick Stats - Compact */}
              <div className="flex justify-center gap-2 mb-2">
                <div
                  className={`rounded-lg px-3 py-1.5 ${darkMode ? "bg-[#2a2a2a]" : "bg-slate-50"}`}
                >
                  <p
                    className={`text-sm font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
                  >
                    9+
                  </p>
                  <p
                    className={`text-[10px] ${darkMode ? "text-gray-400" : "text-slate-500"}`}
                  >
                    Years
                  </p>
                </div>
                <div
                  className={`rounded-lg px-3 py-1.5 ${darkMode ? "bg-[#2a2a2a]" : "bg-slate-50"}`}
                >
                  <p
                    className={`text-sm font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
                  >
                    62+
                  </p>
                  <p
                    className={`text-[10px] ${darkMode ? "text-gray-400" : "text-slate-500"}`}
                  >
                    Projects
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation - Scrollable */}
            <div
              className={`border-t flex-1 overflow-y-auto min-h-0 ${darkMode ? "border-[#2a2a2a]" : "border-slate-100"}`}
            >
              <nav className="p-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSectionChange(item.id)}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-sm transition-all ${
                      activeSection === item.id
                        ? "bg-amber-500 text-white shadow-md"
                        : darkMode
                          ? "text-gray-300 hover:bg-[#2a2a2a]"
                          : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <NavIcon icon={item.icon} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Footer */}
            <div
              className={`border-t p-3 shrink-0 ${darkMode ? "border-[#2a2a2a] bg-[#151515]" : "border-slate-100 bg-slate-50"}`}
            >
              <div
                className={`flex items-center justify-center gap-2 text-[10px] ${darkMode ? "text-gray-400" : "text-slate-500"}`}
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span>Available for work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Content Area */}
        <div className="flex-1 h-full overflow-hidden">
          <div
            className={`h-full overflow-y-auto rounded-2xl shadow-lg border ${darkMode ? "bg-[#1a1a1a] border-[#2a2a2a]" : "bg-white border-slate-200"}`}
          >
            <ContentArea activeSection={activeSection} />
          </div>
        </div>
      </div>
    </div>
  );
}

function NavIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    "file-lines": (
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
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    gear: (
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
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    "layer-group": (
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
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
    users: (
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
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    envelope: (
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
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  };

  return <>{icons[icon] || null}</>;
}
