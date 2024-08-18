"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "Alert Dialog",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "Hover Card",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview content available behind a link.",
//   },
//   {
//     title: "Progress",
//     href: "/docs/primitives/progress",
//     description:
//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//   },
//   {
//     title: "Scroll-area",
//     href: "/docs/primitives/scroll-area",
//     description: "Visually or semantically separates content.",
//   },
//   {
//     title: "Tabs",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
//   {
//     title: "Tooltip",
//     href: "/docs/primitives/tooltip",
//     description:
//       "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//   },
// ];

const megaMenu = [
  {
    title: "Top Booked",
    services: [
      {
        title: "Telelealth",
        slug: "tele-health",
        descriptioin: "loremipsumloremipsumloremipsum ",
      },
      {
        title: "Video presciption refill",
        slug: "tele-health",
        descriptioin: "loremipsumloremipsumloremipsum ",
      },
      {
        title: "In-person doctor visit",
        slug: "tele-health",
        descriptioin: "loremipsumloremipsumloremipsum ",
      },
      {
        title: "Telelealth",
        slug: "tele-health",
        descriptioin: "loremipsumloremipsumloremipsum ",
      },
      {
        title: "Telelealth",
        slug: "tele-health",
        descriptioin: "loremipsumloremipsumloremipsum ",
      },
    ],
  },

  {
    title: "Doctors",
    services: [
      {
        title: "Telelealth",
        slug: "tele-health",
        descriptioin: "loremipsumloremipsumloremipsum ",
      },
      {
        title: "Video presciption refill",
        slug: "tele-health",
        descriptioin: "loremipsumloremipsumloremipsum ",
      },
      {
        title: "In-person doctor visit",
        slug: "tele-health",
        descriptioin: "loremipsumloremipsumloremipsum ",
      },
      {
        title: "Telelealth",
        slug: "tele-health",
        descriptioin: "loremipsumloremipsumloremipsum ",
      },
      {
        title: "Telelealth",
        slug: "tele-health",
        descriptioin: "loremipsumloremipsumloremipsum ",
      },
    ],
  },

  {
    title: "Specialist",
    services: [
      {
        title: "Telelealth",
        slug: "tele-health",
        descriptioin: "loremipsumloremipsumloremipsum ",
      },
      {
        title: "Video presciption refill",
        slug: "tele-health",
        descriptioin: "loremipsumloremipsumloremipsum ",
      },
      {
        title: "In-person doctor visit",
        slug: "tele-health",
        descriptioin: "loremipsumloremipsumloremipsum ",
      },
      {
        title: "Telelealth",
        slug: "tele-health",
        descriptioin: "loremipsumloremipsumloremipsum ",
      },
      {
        title: "Telelealth",
        slug: "tele-health",
        descriptioin: "loremipsumloremipsumloremipsum ",
      },
    ],
  },
  {
    title: "Simtoms",
    services: [
      {
        title: "Telelealth",
        slug: "tele-health",
        descriptioin: "loremipsumloremipsumloremipsum ",
      },
      {
        title: "Video presciption refill",
        slug: "tele-health",
        descriptioin: "loremipsumloremipsumloremipsum ",
      },
      {
        title: "In-person doctor visit",
        slug: "tele-health",
        descriptioin: "loremipsumloremipsumloremipsum ",
      },
      {
        title: "Telelealth",
        slug: "tele-health",
        descriptioin: "loremipsumloremipsumloremipsum ",
      },
      {
        title: "Telelealth",
        slug: "tele-health",
        descriptioin: "loremipsumloremipsumloremipsum ",
      },
    ],
  },
];

export default function MegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {megaMenu.map((item, i) => {
          return (
            <NavigationMenuItem className="px-4" key={i}>
              <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {item.services.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={`/services${component.slug}`}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>{" "}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
