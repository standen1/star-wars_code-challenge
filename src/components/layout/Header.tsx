import navigations from "@/constants/navigations";
import Image from "../Image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="container flex justify-between py-6">
        <div className="flex lg:flex-1">
          <Link href="/">
            <Image className="h-8 w-40" src="/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigations.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.title}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
