import BlackFridayHeader from "@/components/layout/BlackFridayHeader";
import BlackFridayStickyBar from "@/components/layout/BlackFridayStickyBar";
import WhatsAppWidget from "@/components/layout/WhatsappWidget";
import { WhatsappChatProvider } from "@/components/layout/WhatsappChatContext";

export default function BlackFridayLayout({ children }) {
  return (
    <WhatsappChatProvider>
      <BlackFridayHeader />

      {children}

      <BlackFridayStickyBar />

      <WhatsAppWidget />
    </WhatsappChatProvider>
  );
}
