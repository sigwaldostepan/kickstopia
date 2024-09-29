import * as React from "react";
import Link from "next/link";

import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { Button, buttonVariants } from "~/components/ui/button";
import Sidebar from "~/components/ui/sidebar";
import { cn } from "~/lib/utils";
import { type VariantProps } from "class-variance-authority";

type NavbarItemProps = {
  children: React.ReactNode;
  type: "button" | "link";
  href?: string;
  className?: string;
  size?: VariantProps<typeof buttonVariants>["size"];
  variant?: VariantProps<typeof buttonVariants>["variant"];
};

type CategoryLink = {
  name: "trending" | "men" | "women" | "kids";
  href: string;
};

export const categoryLinks: CategoryLink[] = [
  { name: "trending", href: "/trending" },
  { name: "men", href: "/men" },
  { name: "women", href: "/women" },
  { name: "kids", href: "/kids" },
];

const Navbar = () => {
  const NavbarItem = ({
    children,
    type,
    href,
    className,
    size = "icon",
    variant = "default",
  }: NavbarItemProps) => {
    return (
      <>
        {type === "button" ? (
          <Button variant="ghost" size={size} className={cn(className)}>
            {children}
          </Button>
        ) : (
          <Link
            href={href!}
            className={cn(
              buttonVariants({ size, variant }),
              "font-medium",
              className,
            )}
          >
            {children}
          </Link>
        )}
      </>
    );
  };

  return (
    <>
      <header className="fixed left-0 top-0 z-50 h-16 w-full border-b border-secondary bg-background/40 backdrop-blur">
        <nav className="container flex h-full max-w-full items-center justify-between">
          <Link href="/">Logo</Link>

          {/* mobile & tablet navbar menu */}
          <ul className="flex flex-row items-center justify-center md:gap-2 lg:hidden">
            <li>
              <NavbarItem type="button">
                <FiSearch size={24} />
              </NavbarItem>
            </li>
            <li>
              <NavbarItem type="button">
                <FiUser size={24} />
              </NavbarItem>
            </li>
            <li>
              <Sidebar />
            </li>
          </ul>

          {/* desktop navbar links & items */}
          <ul className="hidden flex-row space-x-6 lg:flex">
            {categoryLinks.map((category, index) => {
              return (
                <li key={index}>
                  <Link
                    href={category.href}
                    className="relative text-lg font-medium capitalize after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
                  >
                    {category.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="hidden flex-row items-center justify-center gap-2 lg:flex">
            <li>
              <NavbarItem type="button">
                <FiSearch size={24} />
              </NavbarItem>
            </li>
            <li>
              <NavbarItem type="link" href="/profile" variant="ghost">
                <FiUser size={24} />
              </NavbarItem>
            </li>
            <li>
              <NavbarItem type="link" href="/cart" variant="ghost">
                <FiShoppingCart size={24} />
              </NavbarItem>
            </li>
            <li>
              <NavbarItem type="link" href={"/sign-in"} size="sm">
                Sign In
              </NavbarItem>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
