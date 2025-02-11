"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import SignOutButton from "../sessionElements/SignOutButton";
import { ChevronRight, LogOut } from "lucide-react";
import { LinkType, SidebarLinks } from "@/constants/links";

const Sidebar: React.FC = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const closeSidebar = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname();
  const currentPage = pathname.split("/").pop();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("max-md:overflow-hidden");
    } else {
      document.body.classList.remove("max-md:overflow-hidden");
    }
    return () => {
      document.body.classList.remove("max-md:overflow-hidden");
    };
  }, [isOpen]);
  return (
    <React.Fragment>
      <aside
        style={{}}
        className={` ${isOpen ? "" : "max-md:translate-x-[-235px] md:left-auto md:w-20"} fixed top-[86px] z-20 m-2 flex h-[calc(100dvh-104px)] w-64 flex-col rounded-3xl bg-primary p-4 text-white transition-all duration-700 ease-in-out md:sticky`}
      >
        <nav className="scroll-bar-hidden flex h-full flex-col gap-4 overflow-y-auto">
          <Link
            href="/dashboard/account"
            onClick={closeSidebar}
            className="flex h-12 max-h-12 w-56 items-center gap-2 overflow-hidden rounded hover:bg-gray-700"
          >
            <div className="aspect-square h-12 max-h-12 w-12">
              <Image
                src={session?.user?.image || "/placeholder-avatar.svg"}
                alt="user image"
                width={45}
                height={45}
                priority
                className={`${currentPage === "account" ? "border-white" : "border-white/50"} aspect-square h-12 max-h-12 w-12 rounded-full border-2 object-cover`}
              />
            </div>
            <div
              className={`${currentPage === "account" ? "" : "opacity-50"} flex min-w-12 flex-col`}
            >
              <span className="text-sm font-bold">{session?.user?.name}</span>
              <span className="min-w-40 break-all text-xs font-semibold text-gray-400">
                {session?.user?.email}
              </span>
            </div>
          </Link>
          {SidebarLinks.map((link) => (
            <SideBarItem
              key={link.path}
              {...link}
              pathName={currentPage}
              onClick={closeSidebar}
            />
          ))}
          <SignOutButton>
            <div className={`rounded p-[5px] text-red-500 hover:bg-red-50/10`}>
              <div className="flex w-56 items-center gap-2 text-nowrap">
                <div className="w-12">
                  <LogOut width={34} />
                </div>
                <span>Log Out</span>
              </div>
            </div>
          </SignOutButton>
        </nav>
        <div
          className={`${isOpen ? "translate-x-0" : "translate-x-20"} flex w-full justify-end duration-1000 md:translate-x-0`}
        >
          <button
            onClick={toggleSidebar}
            className={`${isOpen ? "bg-background rotate-0 text-primary" : "text-background rotate-180 bg-primary"} border-background md:bg-background flex h-[43px] w-[43px] min-w-[43px] items-center justify-center rounded-full border-2 text-3xl transition-transform duration-1000 ease-in-out md:static md:text-primary`}
            aria-label="Scroll to top"
          >
            <ChevronRight className="w-5 text-white" />
          </button>
        </div>
      </aside>
      {/* Mobile menu backdrop */}
      <div
        onClick={closeSidebar}
        aria-hidden="true"
        className={`${isOpen ? "opacity-100" : "pointer-events-none opacity-0"} fixed inset-0 top-[76px] z-10 h-[calc(100dvh-50px)] w-screen bg-black/30 backdrop-blur-sm duration-700 md:hidden`}
      ></div>
    </React.Fragment>
  );
};

export default Sidebar;

const SideBarItem: React.FC<
  LinkType & { onClick: () => void; pathName?: string }
> = ({ path, icon, name, onClick, pathName }) => {
  const Icon = icon;
  return (
    <Link
      href={path}
      onClick={onClick}
      className={`${pathName === path.split("/").pop() ? "" : "opacity-50"} overflow-hidden rounded p-[4px] hover:bg-white/20`}
    >
      <div className="flex w-56 items-center gap-2 text-nowrap">
        <div className="w-12">
          <Icon width={33} />
        </div>
        <span>{name}</span>
      </div>
    </Link>
  );
};
