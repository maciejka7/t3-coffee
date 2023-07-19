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

type Link = {
  label: string,
  href: string,
}

const linkList: Link[]= [
  {
    label: "Places",
    href: "/places",
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
      <NavigationMenuItem>
        <Link href={homeLink.href} legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {homeLink.label}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
  );
};

