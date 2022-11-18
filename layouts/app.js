import BottomNav from "../components/BottomNav";

export default function AppLayout({ children }) {
  return (
    <>
      {children}
      <BottomNav />
    </>
  );
}
