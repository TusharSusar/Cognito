import { Image, Lightbulb, Search, Zap, MoreHorizontal } from "lucide-react";
import { useCallback } from "react";

export const DropdownMenu = ({ isOpen, onClose, onSelectItem }) => {
  const menuItems = [
    { id: 1, icon: <Image size={18} />, label: "Add photos & files" },
    { id: 2, icon: <Lightbulb size={18} />, label: "Create image" },
    { id: 3, icon: <Lightbulb size={18} />, label: "Thinking" },
    { id: 4, icon: <Search size={18} />, label: "Deep research" },
    // { id: 5, icon: <Zap size={18} />, label: "Shopping research" },
  ];

  const handleItemClick = useCallback(
    (itemLabel) => {
      onSelectItem(itemLabel);
      onClose();
    },
    [onSelectItem, onClose]
  );

  if (!isOpen) return null;

  return (
    <div
      className="absolute bottom-full left-0 mb-2 w-48 sm:w-56 bg-[var(--color-bacground)] border border-[var(--color-border)] rounded-lg shadow-2xl overflow-hidden z-50"
      role="menu"
    >
      {/* Menu Items */}
      <div className="py-1 sm:py-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleItemClick(item.label)}
            role="menuitem"
            className="w-full flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 hover:bg-[var(--color-item-hover)] transition text-[var(--color-text)]/80 hover:text-[var(--color-text)] text-sm sm:text-base group cursor-pointer"
          >
            <span className="text-[var(--color-text)]/60 group-hover:text-[var(--color-text)] transition flex-shrink-0">
              {item.icon}
            </span>
            <span className="text-left">{item.label}</span>
          </button>
        ))}

        {/* More Button */}
        <button
          onClick={() => handleItemClick("More")}
          role="menuitem"
          className="w-full flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 hover:bg-[var(--color-item-hover)] transition text-[var(--color-text)]/80 hover:text-[var(--color-text)] text-sm sm:text-base group border-t border-[var(--color-border)] mt-1"
        >
          <MoreHorizontal size={18} className="text-[var(--color-text)]/60 group-hover:text-[var(--color-text)] transition flex-shrink-0" />
          <span className="text-left flex items-center gap-2">
            More
            <span className="text-xs text-[var(--color-text)]/40">›</span>
          </span>
        </button>
      </div>
    </div>
  );
};