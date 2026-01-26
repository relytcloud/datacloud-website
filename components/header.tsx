/** biome-ignore-all lint/a11y/noNoninteractiveElementInteractions: false positive */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: false positive */
/** biome-ignore-all lint/a11y/noStaticElementInteractions: false positive */
"use client";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import {
	type HTMLAttributeAnchorTarget,
	useEffect,
	useRef,
	useState,
} from "react";
import LocaleSwitcher from "@/components/locale-switcher";
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
import { getFullAssetUrl } from "@/lib/utils";

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
	const t = useTranslations("navigation");
	const locale = useLocale();
	const [isVisible, setIsVisible] = useState(true);
	const [showMenu, setShowMenu] = useState(false);
	const lastScrollY = useRef(0);

	const getLocalizedHref = (href: string) => {
		if (href.startsWith("http") || href.startsWith("#")) {
			return href;
		}
		return `/${locale}${href}`;
	};

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

	// Prevent body scroll when mobile menu is open
	useEffect(() => {
		if (showMenu) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [showMenu]);

	return (
		<div
			className={`fixed top-0 right-0 left-0 z-50 bg-black text-base-500 transition-transform duration-300 md:bg-linear-to-b md:bg-transparent md:from-black/50 md:to-transparent ${isVisible ? "translate-y-0" : "-translate-y-full"} ${className}`}
		>
			<div
				className={
					"flex items-center justify-between px-4 py-3 sm:px-6 md:py-4 lg:bg-transparent xl:px-12"
				}
			>
				<nav className="hidden items-center justify-between gap-4 lg:flex">
					<Link
						className="mr-8 text-center leading-[32px]"
						href={getLocalizedHref("/")}
					>
						<Image
							alt={"logo"}
							className="inline-block object-contain"
							height="24"
							src="/assets/datacloud-logo.svg"
							width="145"
						/>
					</Link>
					<MenuFmt
						hrefs={[
							{
								text: t("productItems.powerdrill"),
								href: getLocalizedHref("/#powerdrill"),
								icon: getFullAssetUrl("/media/powerdrill.svg"),
							},
							{
								text: t("productItems.memorylake"),
								href: getLocalizedHref("/#memory-lake"),
								icon: getFullAssetUrl("/media/memorylake.svg"),
							},
							{
								text: t("productItems.relyt"),
								href: getLocalizedHref("/#relyt"),
								icon: getFullAssetUrl("/media/relyt.svg"),
							},
						]}
						text={t("products")}
					/>
					<MenuFmt
						hrefs={[
							{
								text: t("useCaseItems.socialMedia"),
								href: getLocalizedHref("/use-case/social-media/"),
							},
							{
								text: t("useCaseItems.generativeAI"),
								href: getLocalizedHref("/use-case/generative-ai/"),
							},
							{
								text: t("useCaseItems.smartManufacturing"),
								href: getLocalizedHref("/use-case/smart-manufacturing/"),
							},
							{
								text: t("useCaseItems.internet"),
								href: getLocalizedHref("/use-case/internet/"),
							},
						]}
						text={t("useCases")}
					/>
					<MenuFmt
						hrefs={[
							{
								text: t("customerStoryItems.hello"),
								href: getLocalizedHref("/customer-story/hello/"),
							},
						]}
						text={t("customerStories")}
					/>
					<MenuFmt
						hrefs={[
							{
								text: t("resourceItems.blog"),
								href: "https://data.cloud/blog",
								target: "_blank",
							},
							{
								text: t("resourceItems.documentation"),
								href: getLocalizedHref("/documentation/"),
							},
						]}
						text={t("resources")}
					/>
					<MenuFmt
						hrefs={[
							{
								text: t("companyItems.aboutUs"),
								href: getLocalizedHref("/about-us/"),
							},
						]}
						text={t("company")}
					/>
				</nav>
				{/* Mobile logo and menu button */}
				<div className="z-99 flex w-full items-center justify-between lg:hidden">
					<Link
						className="text-center leading-[32px]"
						href={getLocalizedHref("/")}
					>
						<Image
							alt={"logo"}
							className="inline-block h-5 w-auto object-contain sm:h-6"
							height="24"
							src="/assets/datacloud-logo.svg"
							width="145"
						/>
					</Link>
					<nav className="flex items-center justify-between gap-4">
						{showMenu ? (
							<CloseIcon
								className="h-6 w-6 cursor-pointer text-contrast-secondary hover:text-white"
								onClick={() => setShowMenu(false)}
							/>
						) : (
							<MenuIcon
								className="h-6 w-6 cursor-pointer text-contrast-secondary hover:text-white"
								onClick={() => setShowMenu(true)}
							/>
						)}
					</nav>
				</div>
				<nav className="hidden items-center justify-between gap-4 lg:flex">
					<LocaleSwitcher />
					<Button
						className="relative z-10 inline-block rounded text-white"
						size="sm"
						variant="gradient"
					>
						<Link
							className="hidden text-center lg:block"
							href={getLocalizedHref("/contact-us/")}
						>
							{t("contactUs")}
						</Link>
					</Button>
				</nav>
			</div>
			{showMenu ? (
				<>
					{/* Backdrop overlay */}
					<div
						className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden"
						onClick={() => setShowMenu(false)}
					/>
					{/* Full screen menu */}
					<nav className="fixed top-0 right-0 left-0 z-50 flex h-screen w-full flex-col justify-between gap-1 overflow-y-auto bg-black px-3 py-2 text-left lg:hidden">
						<nav className="flex-1 pt-14 pb-4">
							<Disclosure as="div" className="px-3 py-1.5">
								<DisclosureButton className="text-white">
									{t("products")}
								</DisclosureButton>
								<DisclosurePanel className={"flex w-full flex-col px-0"}>
									<Button
										className="w-full rounded text-white hover:bg-contrast-hover"
										size={"sm"}
										variant="ghost"
									>
										<Link
											className="flex w-full items-center gap-2 text-left"
											href={getLocalizedHref("/#powerdrill")}
											onClick={() => {
												setShowMenu(false);
											}}
										>
											<Image
												alt={t("productItems.powerdrill")}
												height={20}
												src={getFullAssetUrl("/media/powerdrill.svg")}
												width={20}
											/>
											{t("productItems.powerdrill")}
										</Link>
									</Button>
									<Button
										className="w-full rounded text-white hover:bg-contrast-hover"
										size={"sm"}
										variant="ghost"
									>
										<Link
											className="flex w-full items-center gap-2 text-left"
											href={getLocalizedHref("/#memory-lake")}
											onClick={() => {
												setShowMenu(false);
											}}
										>
											<Image
												alt={t("productItems.memorylake")}
												height={20}
												src={getFullAssetUrl("/media/memorylake.svg")}
												width={20}
											/>
											{t("productItems.memorylake")}
										</Link>
									</Button>
									<Button
										className="w-full rounded text-white hover:bg-contrast-hover"
										size={"sm"}
										variant="ghost"
									>
										<Link
											className="flex w-full items-center gap-2 text-left"
											href={getLocalizedHref("/#relyt")}
											onClick={() => {
												setShowMenu(false);
											}}
										>
											<Image
												alt={t("productItems.relyt")}
												height={20}
												src={getFullAssetUrl("/media/relyt.svg")}
												width={20}
											/>
											{t("productItems.relyt")}
										</Link>
									</Button>
								</DisclosurePanel>
							</Disclosure>
							<Disclosure as="div" className="px-3 py-1.5">
								<DisclosureButton className="text-white">
									{t("useCases")}
								</DisclosureButton>
								<DisclosurePanel className={"flex w-full flex-col px-0"}>
									<Button
										className="w-full rounded text-white hover:bg-contrast-hover"
										size={"sm"}
										variant="ghost"
									>
										<Link
											className="w-full text-left"
											href={getLocalizedHref("/use-case/social-media/")}
											onClick={() => {
												setShowMenu(false);
											}}
										>
											{t("useCaseItems.socialMedia")}
										</Link>
									</Button>
									<Button
										className="w-full rounded text-white hover:bg-contrast-hover"
										size={"sm"}
										variant="ghost"
									>
										<Link
											className="w-full text-left"
											href={getLocalizedHref("/use-case/generative-ai/")}
											onClick={() => {
												setShowMenu(false);
											}}
										>
											{t("useCaseItems.generativeAI")}
										</Link>
									</Button>
									<Button
										className="w-full rounded text-white hover:bg-contrast-hover"
										size={"sm"}
										variant="ghost"
									>
										<Link
											className="w-full text-left"
											href={getLocalizedHref("/use-case/smart-manufacturing/")}
											onClick={() => {
												setShowMenu(false);
											}}
										>
											{t("useCaseItems.smartManufacturing")}
										</Link>
									</Button>
									<Button
										className="w-full rounded text-white hover:bg-contrast-hover"
										size={"sm"}
										variant="ghost"
									>
										<Link
											className="w-full text-left"
											href={getLocalizedHref("/use-case/internet/")}
											onClick={() => {
												setShowMenu(false);
											}}
										>
											{t("useCaseItems.internet")}
										</Link>
									</Button>
								</DisclosurePanel>
							</Disclosure>
							<Disclosure as="div" className="px-3 py-1.5">
								<DisclosureButton className="text-white">
									{t("customerStories")}
								</DisclosureButton>
								<DisclosurePanel className={"flex w-full flex-col px-0"}>
									<Button
										className="w-full rounded text-white hover:bg-contrast-hover"
										size={"sm"}
										variant="ghost"
									>
										<Link
											className="w-full text-left"
											href={getLocalizedHref("/customer-story/hello/")}
											onClick={() => {
												setShowMenu(false);
											}}
										>
											{t("customerStoryItems.hello")}
										</Link>
									</Button>
								</DisclosurePanel>
							</Disclosure>
							<Disclosure as="div" className="px-3 py-1.5">
								<DisclosureButton className="text-white">
									{t("resources")}
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
											{t("resourceItems.blog")}
										</Link>
									</Button>
									<Button
										className="w-full rounded text-white hover:bg-contrast-hover"
										size={"sm"}
										variant="ghost"
									>
										<Link
											className="w-full text-left"
											href={getLocalizedHref("/documentation/")}
											onClick={() => {
												setShowMenu(false);
											}}
										>
											{t("resourceItems.documentation")}
										</Link>
									</Button>
								</DisclosurePanel>
							</Disclosure>
							<Disclosure as="div" className="px-3 py-1.5">
								<DisclosureButton className="text-white">
									{t("company")}
								</DisclosureButton>
								<DisclosurePanel className={"flex w-full flex-col px-0"}>
									<Button
										className="w-full rounded text-white hover:bg-contrast-hover"
										size={"sm"}
										variant="ghost"
									>
										<Link
											className="w-full text-left"
											href={getLocalizedHref("/about-us/")}
											onClick={() => {
												setShowMenu(false);
											}}
										>
											{t("companyItems.aboutUs")}
										</Link>
									</Button>
								</DisclosurePanel>
							</Disclosure>
						</nav>
						{/* Footer section with locale switcher and contact button */}
						<nav className="border-text-tertiary border-t pt-4">
							<div className="px-3 pb-4">
								<LocaleSwitcher className="justify-end" />
							</div>
							<Button
								className="mx-3 mb-4 w-[calc(100%-1.5rem)] text-white"
								size="sm"
								variant="outline"
							>
								<Link
									className="w-full text-center"
									href={getLocalizedHref("/contact-us/")}
									onClick={() => {
										setShowMenu(false);
									}}
								>
									{t("contactUs")}
								</Link>
							</Button>
						</nav>
					</nav>
				</>
			) : null}
		</div>
	);
}
