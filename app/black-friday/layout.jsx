import BlackFridayHeader from "@/components/layout/BlackFridayHeader";
import BlackFridayStickyBar from "@/components/layout/BlackFridayStickyBar";

export default function BlackFridayLayout({ children }) {
  return (
    <>
      <BlackFridayHeader />

      {children}

      <BlackFridayStickyBar />
    </>
  );
}
