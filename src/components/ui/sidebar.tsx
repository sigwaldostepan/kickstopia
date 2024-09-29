import * as React from "react";
import Link from "next/link";

import {
  FiMenu,
  FiHelpCircle,
  FiShoppingCart,
  FiShoppingBag,
} from "react-icons/fi";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { cn } from "~/lib/utils";
import { Button, buttonVariants } from "~/components/ui/button";
import { categoryLinks } from "~/components/ui/navbar";

type SidebarLinkProps = {
  key: number;
  href: string;
  name: string;
  icon?: React.ReactNode;
};

type SidebarFooterLinks = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const sidebarFooterLinks: SidebarFooterLinks[] = [
  { name: "cart", href: "/cart", icon: <FiShoppingCart size={20} /> },
  { name: "orders", href: "/orders", icon: <FiShoppingBag size={20} /> },
  { name: "help", href: "help", icon: <FiHelpCircle size={20} /> },
];

const Sidebar = () => {
  const SidebarLink = ({ key, href, name, icon }: SidebarLinkProps) => {
    return (
      <li
        key={key}
        className="w-full border-b p-3 text-start text-lg last:border-none"
      >
        {icon ? (
          <Link href={href} className="block w-full capitalize">
            <div className="flex items-center gap-4">
              {icon}
              {name}
            </div>
          </Link>
        ) : (
          <Link href={href} className="block w-full font-semibold uppercase">
            {name}
          </Link>
        )}
      </li>
    );
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <FiMenu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex h-full flex-col">
        <SheetHeader>
          <SheetTitle>Logo</SheetTitle>
        </SheetHeader>

        <div className="flex-1">
          <ul className="grid grid-cols-1 py-4">
            {categoryLinks.map((link, index) => {
              return (
                <SidebarLink key={index} href={link.href} name={link.name} />
              );
            })}
          </ul>
        </div>

        <SheetFooter>
          <ul className="w-full">
            {sidebarFooterLinks.map((link, index) => {
              return (
                <SidebarLink
                  key={index}
                  href={link.href}
                  name={link.name}
                  icon={link.icon}
                />
              );
            })}
          </ul>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
