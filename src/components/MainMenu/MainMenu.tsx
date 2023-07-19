import * as React from "react";
import Link from "next/link";

import { cn } from "src/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "src/components/ui/navigation-menu";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem } from "src/components/ui/dropdown-menu";
import { User, CreditCard, Settings, Keyboard } from "lucide-react";
import { DropdownMenuShortcut } from "../ui/dropdown-menu";

type Link = {
  label: string,
  href: string,
}

const linkList: Link[] = [
  {
    label: "Places",
    href: "/places",
  },
  {
    label: "Orders",
    href: "/orders",
  },
  {
    label: "Recipes",
    href: "/recipes",
  },
];

const homeLink: Link = {
  href: '/',
  label: 'Home'
}

export const MainMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href={homeLink.href} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {homeLink.label}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList>
        {linkList.map(link => (
          <NavigationMenuItem key={link.href}>
            <Link href={link.href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {link.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}

      </NavigationMenuList>
      <NavigationMenuList>

        <NavigationMenuItem className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src="https://github.com/maciejka7.png" />
                <AvatarFallback>MM</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 right-0" side="bottom" align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};