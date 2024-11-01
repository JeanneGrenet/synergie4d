import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-white py-4 flex justify-center shadow-md">
      <Image src="/logo.svg" width={350} height={50} alt="logo"/>
    </div>
  );
}
