import { SidebarLinks } from "@/constants/links";
import Image from "next/image";
import Link from "next/link";

const FullHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-primary text-white shadow-md transition-colors duration-300">
      <div className="container mx-auto px-6 lg:max-w-[1170px]">
        <div className="flex h-[70px] items-center">
          <Link href="/">
            <Image
              src={"/logo.svg"}
              alt="logo"
              width={80}
              height={30}
              className="h-[30px] w-auto text-primary md:h-[40px]"
            />
          </Link>
          <nav className="ml-auto flex items-center space-x-8">
            <div className="hidden items-center space-x-8 md:flex">
              {SidebarLinks.map((link, i) => {
                return (
                  <Link
                    key={i}
                    href={link.path}
                    className="font-medium hover:text-primary"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default FullHeader;
