import { navItems } from "../data/content";

export function Sidebar({ onNavClick }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavClick(item.id)}
          className="flex items-center gap-2 px-4 md:px-6 py-3 rounded-xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium text-sm hover:bg-amber-50 dark:hover:bg-slate-600 hover:border-amber-300 dark:hover:border-amber-600 hover:text-amber-700 dark:hover:text-amber-400 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          {iconMap[item.icon]}
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
}
