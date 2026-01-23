"use client";
import Image from "next/image";
import Link from "next/link";
import {
  type HTMLAttributeAnchorTarget,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button } from "@/components/ui/button";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@/components/ui/disclosure";
import { CloseIcon } from "@/components/ui/icons/close-icon";
import { MenuIcon } from "@/components/ui/icons/menu-icon";
import { Menu, MenuButton, MenuItem, MenuItems } from "@/components/ui/menu";
import { usePopoverHover } from "@/hooks/use-popup-over";
import memorylakeLogo from "@/public/memorylake.svg";
import powerdrillLogo from "@/public/powerdrill.svg";
import relytLogo from "@/public/relyt.svg";

interface Props {
  className?: string;
}

const MenuFmt = ({
  text,
  hrefs,
}: {
  text: string;
  hrefs: {
    text: string;
    href: string;
    target?: HTMLAttributeAnchorTarget;
    icon?: string;
  }[];
}) => {
  const { popoverRef, buttonRef } = usePopoverHover();
  return (
    <Menu as={"div"} ref={popoverRef}>
      {({ close }) => (
        <>
          <MenuButton className="hidden lg:inline-flex" ref={buttonRef}>
            {text}
          </MenuButton>
          <MenuItems>
            {hrefs.map((item) => (
              <MenuItem key={item.href}>
                <Link
                  className="flex w-full items-center gap-2 text-left"
                  href={item.href}
                  onClick={() => close()}
                  target={item.target ?? "_self"}
                >
                  {item.icon && (
                    <Image
                      alt={item.text}
                      height={20}
                      src={item.icon ?? ""}
                      width={20}
                    />
                  )}
                  {item.text}
                </Link>
              </MenuItem>
            ))}
          </MenuItems>
        </>
      )}
    </Menu>
  );
};

export default function Header({ className = "" }: Props) {
  const [isVisible, setIsVisible] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY.current || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 right-0 left-0 z-50 bg-black text-base-500 transition-transform duration-300 md:bg-linear-to-b md:bg-transparent md:from-black/50 md:to-transparent ${isVisible ? "translate-y-0" : "-translate-y-full"} ${className}`}
    >
      <div
        className={`flex items-center justify-between py-4 ${
          showMenu ? "small-header" : ""
        } px-6 lg:bg-transparent xl:px-12`}
      >
        <nav className="flex items-center justify-between gap-4">
          <Link className="mr-8 text-center leading-[32px]" href={"/"}>
            <Image
              alt={"logo"}
              className="inline-block"
              height="24"
              objectFit="contain"
              src="/assets/datacloud-logo.svg"
              width="145"
            />
          </Link>
          <MenuFmt
            hrefs={[
              {
                text: "Powerdrill",
                href: "/#powerdrill",
                icon: powerdrillLogo.src,
              },
              {
                text: "MemoryLake",
                href: "/#memory-lake",
                icon: memorylakeLogo.src,
              },
              {
                text: "Relyt",
                href: "/#relyt",
                icon: relytLogo.src,
              },
            ]}
            text="Products"
          />
          <MenuFmt
            hrefs={[
              {
                text: "Social Media",
                href: "/use-case/social-media/",
              },
              {
                text: "Generative AI",
                href: "/use-case/generative-ai/",
              },
              {
                text: "Smart Manufacturing",
                href: "/use-case/smart-manufacturing/",
              },
              {
                text: "Internet",
                href: "/use-case/internet/",
              },
            ]}
            text="Use Cases"
          />
          <MenuFmt
            hrefs={[
              {
                text: "Hello",
                href: "/customer-story/hello/",
              },
            ]}
            text="Customer Stories"
          />
          <MenuFmt
            hrefs={[
              {
                text: "Blog",
                href: "https://data.cloud/blog",
                target: "_blank",
              },
              {
                text: "Documentation",
                href: "/documentation/",
              },
            ]}
            text="Resources"
          />
          <MenuFmt
            hrefs={[{ text: "About Us", href: "/about-us/" }]}
            text="Company"
          />
        </nav>
        <nav className="flex items-center justify-between gap-4 lg:hidden">
          {showMenu ? (
            <CloseIcon
              className="cursor-pointer text-contrast-secondary hover:text-white"
              onClick={() => setShowMenu(false)}
            />
          ) : (
            <MenuIcon
              className="cursor-pointer text-contrast-secondary hover:text-white"
              onClick={() => setShowMenu(true)}
            />
          )}
        </nav>
        <nav className="hidden items-center justify-between gap-4 lg:flex">
          <Button
            className="relative z-10 inline-block rounded text-white"
            size="sm"
            variant="gradient"
          >
            <Link className="hidden text-center lg:block" href={"/contact-us/"}>
              Contact Us
            </Link>
          </Button>
        </nav>
      </div>
      {showMenu ? (
        <nav className="header-height fixed top-16 z-30 flex w-full flex-col justify-between gap-1 rounded-md border-text-tertiary bg-black px-3 py-2 text-left lg:hidden">
          <nav>
            <Disclosure as="div" className="px-3 py-1.5">
              <DisclosureButton className="text-white">
                Use Cases
              </DisclosureButton>
              <DisclosurePanel className={"flex w-full flex-col px-0"}>
                <Button
                  className="w-full rounded text-white hover:bg-contrast-hover"
                  size={"sm"}
                  variant="ghost"
                >
                  <Link
                    className="w-full text-left"
                    href={"/use-case/social-media/"}
                    onClick={() => {
                      setShowMenu(false);
                    }}
                  >
                    Social Media
                  </Link>
                </Button>
                <Button
                  className="w-full rounded text-white hover:bg-contrast-hover"
                  size={"sm"}
                  variant="ghost"
                >
                  <Link
                    className="w-full text-left"
                    href={"/use-case/generative-ai/"}
                    onClick={() => {
                      setShowMenu(false);
                    }}
                  >
                    Generative AI
                  </Link>
                </Button>
                <Button
                  className="w-full rounded text-white hover:bg-contrast-hover"
                  size={"sm"}
                  variant="ghost"
                >
                  <Link
                    className="w-full text-left"
                    href={"/use-case/smart-manufacturing/"}
                    onClick={() => {
                      setShowMenu(false);
                    }}
                  >
                    Smart Manufacturing
                  </Link>
                </Button>
                <Button
                  className="w-full rounded text-white hover:bg-contrast-hover"
                  size={"sm"}
                  variant="ghost"
                >
                  <Link
                    className="w-full text-left"
                    href={"/use-case/internet/"}
                    onClick={() => {
                      setShowMenu(false);
                    }}
                  >
                    Internet
                  </Link>
                </Button>
              </DisclosurePanel>
            </Disclosure>
            <Disclosure as="div" className="px-3 py-1.5">
              <DisclosureButton className="text-white">
                Customer Stories
              </DisclosureButton>
              <DisclosurePanel className={"flex w-full flex-col px-0"}>
                <Button
                  className="w-full rounded text-white hover:bg-contrast-hover"
                  size={"sm"}
                  variant="ghost"
                >
                  <Link
                    className="w-full text-left"
                    href={"/customer-story/hello/"}
                    onClick={() => {
                      setShowMenu(false);
                    }}
                  >
                    Hello
                  </Link>
                </Button>
              </DisclosurePanel>
            </Disclosure>
            <Disclosure as="div" className="px-3 py-1.5">
              <DisclosureButton className="text-white">
                Resources
              </DisclosureButton>
              <DisclosurePanel className={"flex w-full flex-col px-0"}>
                <Button
                  className="w-full rounded text-white hover:bg-contrast-hover"
                  size={"sm"}
                  variant="ghost"
                >
                  <Link
                    className="w-full text-left"
                    href={"https://data.cloud/blog"}
                    onClick={() => {
                      setShowMenu(false);
                    }}
                    target="_blank"
                  >
                    Blog
                  </Link>
                </Button>
              </DisclosurePanel>
              <DisclosurePanel className={"flex w-full flex-col px-0"}>
                <Button
                  className="w-full rounded text-white hover:bg-contrast-hover"
                  size={"sm"}
                  variant="ghost"
                >
                  <Link
                    className="w-full text-left"
                    href={"/documentation/"}
                    onClick={() => {
                      setShowMenu(false);
                    }}
                  >
                    Documentation
                  </Link>
                </Button>
              </DisclosurePanel>
            </Disclosure>
            <Disclosure as="div" className="px-3 py-1.5">
              <DisclosureButton className="text-white">
                Company
              </DisclosureButton>
              <DisclosurePanel className={"flex w-full flex-col px-0"}>
                <Button
                  className="w-full rounded text-white hover:bg-contrast-hover"
                  onClick={() => {
                    setShowMenu(false);
                  }}
                  size={"sm"}
                  variant="ghost"
                >
                  <Link className="w-full text-left" href={"/about-us/"}>
                    About Us
                  </Link>
                </Button>
              </DisclosurePanel>
            </Disclosure>
          </nav>
          <nav>
            <Button
              className="mt-2 w-full text-white"
              onClick={() => {
                location.assign("/contact-us/");
                setShowMenu(false);
              }}
              size="sm"
              variant="outline"
            >
              Contact Us
            </Button>
          </nav>
        </nav>
      ) : null}
    </div>
  );
}
