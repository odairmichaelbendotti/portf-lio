import { useEffect, useRef, useCallback } from "react";
import AboutContent from "./Contents/About";
import SkillsContent from "./Contents/Skill";
import ProjectsContent from "./Contents/Projects";
import ClientsContent from "./Contents/Clients";
import ContactContent from "./Contents/Contact";
import HobbiesContent from "./Contents/Hobbies";

interface ChatOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string | null;
  onSectionChange: (sectionId: string) => void;
}

export function ChatOverlay({
  isOpen,
  onClose,
  activeSection,
  onSectionChange,
}: ChatOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlayRef.current) {
        onClose();
      }
    },
    [onClose],
  );

  // Handle escape key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId);
  };

  // IMPORTANT (RENDER AREA)
  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return <AboutContent onNavClick={handleNavClick} />;
      case "skills":
        return <SkillsContent onNavClick={handleNavClick} />;
      case "projects":
        return <ProjectsContent onNavClick={handleNavClick} />;
      case "clients":
        return <ClientsContent onNavClick={handleNavClick} />;
      case "contact":
        return <ContactContent onNavClick={handleNavClick} />;
      case "hobbies":
        return <HobbiesContent onNavClick={handleNavClick} />;
      default:
        return <AboutContent onNavClick={handleNavClick} />;
    }
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleBackdropClick}
      className={`fixed inset-0 z-50 flex items-end sm:items-center justify-center transition-all duration-500 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-500" />

      {/* Chat Container */}
      <div
        ref={contentRef}
        className={`relative w-full max-w-2xl mx-4 mb-4 sm:mb-0 transition-all duration-500 transform ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden max-h-[85vh] flex flex-col">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.fullName}
                  className="w-10 h-10 rounded-full object-cover border-2 border-amber-500"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-slate-800"></span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm">
                  {personalInfo.fullName}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors"
              aria-label="Close chat"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Chat Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 max-h-[60vh]">
            {activeSection && renderContent()}
          </div>

          {/* Chat Footer */}
          <div className="p-4 border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50">
            <div className="flex flex-wrap justify-center gap-2">
              {["about", "skills", "projects", "clients", "contact"].map(
                (id) => (
                  <button
                    key={id}
                    onClick={() => handleNavClick(id)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      activeSection === id
                        ? "bg-amber-500 text-white"
                        : "bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600"
                    }`}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
