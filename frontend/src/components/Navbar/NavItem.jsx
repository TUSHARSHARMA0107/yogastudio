export default function NavItem({
  item,
  index,
  openIndex,
  setOpenIndex,
  lockedIndex,
  setLockedIndex,
}) {
  const hasSub = !!item.children;
  const isOpen = openIndex === index;

  // 🔹 SIMPLE LINK (NO SUBMENU)
  if (!hasSub) {
    return (
      <li>
        <a href={item.path} className="hover:opacity-80 transition">
          {item.label}
        </a>
      </li>
    );
  }

  return (
    <li
      className="relative"
      onMouseEnter={() => {
        if (lockedIndex === null) setOpenIndex(index);
      }}
      onMouseLeave={() => {
        if (lockedIndex === null) setOpenIndex(null);
      }}
    >
      <button
        onClick={() => {
          if (lockedIndex === index) {
            // unlock
            setLockedIndex(null);
            setOpenIndex(null);
          } else {
            // lock this submenu
            setLockedIndex(index);
            setOpenIndex(index);
          }
        }}
        className="hover:opacity-80 transition"
      >
        {item.label}
      </button>

      {isOpen && (
        <div
 className="
    absolute top-8 left-1/2 -translate-x-1/2
    w-44 rounded-2xl
    bg-black/40 backdrop-blur-xl
    border border-white/20
    text-white shadow-xl
    p-4 space-y-2 text-xs
  "
>
     

        
          {item.children.map((child) => (
            <div
              key={child}
              className="cursor-pointer hover:opacity-70"
            >
              {child}
            </div>
          ))}
        </div>
      )}
    </li>
  );
}