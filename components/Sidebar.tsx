"use client";

import { sidebarLinks, sidebarFooterLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LinkIcons from "./LinkIcons";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link
          href="/dashboard"
          className="mb-12 cursor-pointer flex items-center gap-2"
        >
          <Image
            src="/assets/logo/logo.png"
            alt="logo"
            width={400}
            height={100}
            className="object-contain"
          />
        </Link>

        <ul>
          {sidebarLinks.map((item) => {
            const isActive =
              pathname === item.route || pathname.startsWith(`${item.route}/`);

            return (
              <Link
                href={item.route}
                key={item.label}
                className={cn("sidebar-link", {
                  "bg-candyGrapeFizz-400": isActive,
                })}
              >
                <div>
                  <LinkIcons route={item.route} />
                </div>
                <li
                  className={cn("sidebar-label", { "!text-white": isActive })}
                >
                  {item.label}
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
      <ul>
        {sidebarFooterLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link hover:bg-salsifyGrass-400", {
                "bg-salsifyGrass-600": isActive,
              })}
            >
              <div>
                <LinkIcons route={item.route} />
              </div>
              <li className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
};

export default Sidebar;
