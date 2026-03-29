import React from "react";

interface SelectionBoxProps {
  children: React.ReactNode;
  className?: string;
}

export const SelectionBox: React.FC<SelectionBoxProps> = ({
  children,
  className = "",
}) => {
  // Estilo comum para os quadradinhos nos cantos
  const cornerStyle = "absolute w-2 h-2 bg-cyan-500 border border-cyan-500";

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Container Principal com a Borda Azul */}
      <div className="relative border border-cyan-500 p-6 bg-cyan-950/10 rounded-sm">
        {/* Os 4 Quadradinhos nos Cantos (Alças de Seleção) */}
        <div className={`${cornerStyle} -top-1 -left-1`}></div>
        <div className={`${cornerStyle} -top-1 -right-1`}></div>
        <div className={`${cornerStyle} -bottom-1 -left-1`}></div>
        <div className={`${cornerStyle} -bottom-1 -right-1`}></div>

        {/* Conteúdo Selecionável */}
        <div className="select-text text-cyan-400">{children}</div>
      </div>
    </div>
  );
};

export default SelectionBox;
