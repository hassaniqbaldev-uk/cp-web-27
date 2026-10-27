"use client";

import { createContext, useContext, useState } from "react";
import { usePathname } from "next/navigation";

// Shares the WhatsApp panel's open state between the header trigger and the
// floating panel. The panel is tied to the page it was opened on, so it closes
// on navigation.
const WhatsappChatContext = createContext(null);

const fallback = { open: false, setOpen: () => {}, toggle: () => {} };

export function WhatsappChatProvider({ children }) {
  const pathname = usePathname();
  const [openOn, setOpenOn] = useState(null);
  const open = openOn === pathname;
  const setOpen = (value) => setOpenOn(value ? pathname : null);
  const toggle = () => setOpen(!open);

  return (
    <WhatsappChatContext.Provider value={{ open, setOpen, toggle }}>
      {children}
    </WhatsappChatContext.Provider>
  );
}

export function useWhatsappChat() {
  return useContext(WhatsappChatContext) ?? fallback;
}
