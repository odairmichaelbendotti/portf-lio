import { clients, clientsContent, personalInfo } from "../../data/content";

export default function ClientsContent({
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
            {clientsContent.content[0]}
          </p>
          <div className="grid grid-cols-3 gap-3">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-600 rounded-lg p-3 flex items-center justify-center h-16"
              >
                <span className="text-xs text-slate-500 dark:text-slate-300 font-medium">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-2 pl-11">
        <button
          onClick={() => onNavClick("contact")}
          className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium rounded-xl transition-colors"
        >
          Contact Me
        </button>
        <button className="px-4 py-2 bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-xl transition-colors">
          Download CV
        </button>
      </div>
    </div>
  );
}
