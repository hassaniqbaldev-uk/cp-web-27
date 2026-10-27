import BlackFridayHeader from "@/components/layout/BlackFridayHeader";
import BlackFridayStickyBar from "@/components/layout/BlackFridayStickyBar";
import WhatsAppWidget from "@/components/layout/WhatsappWidget";

export default function BlackFridayLayout({ children }) {
  return (
    <>
      <BlackFridayHeader />

      {children}

      <BlackFridayStickyBar />

      <WhatsAppWidget />
    </>
  );
}
