import Image from "next/image";
import Header from "./Header";
import Selection from "./Selection";
import Result from "./Result";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Selection />
      <Result />
    </main>
  );
}
