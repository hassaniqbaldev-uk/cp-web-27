import BlackFridayHeader from "@/components/layout/BlackFridayHeader";

export default function BlackFridayLayout({ children }) {
  return (
    <>
      <BlackFridayHeader />

      {children}
    </>
  );
}
