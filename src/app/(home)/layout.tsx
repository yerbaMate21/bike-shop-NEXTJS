import Footer from "@/components/Footer";
import Navbar from "@/components/nav/Navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div className="bg-muted">{children}</div>
      <Footer />
    </div>
  );
}
