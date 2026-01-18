import { useState } from "react";
import NavItem from "./NavItem";
import { MENU } from "./MenuConfig";

export default function DesktopMenu() {
  const [openIndex, setOpenIndex] = useState(null);
  const [lockedIndex, setLockedIndex] = useState(null); // click lock

  return (
    <ul className="flex items-center gap-10 text-sm">
      {MENU.map((item, index) => (
        <NavItem
          key={item.label}
          item={item}
          index={index}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
          lockedIndex={lockedIndex}
          setLockedIndex={setLockedIndex}
        />
      ))}
    </ul>
  );
}