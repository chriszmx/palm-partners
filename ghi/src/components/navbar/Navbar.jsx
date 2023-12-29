import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
    Bars3Icon,
    XMarkIcon,
    CloudIcon,
    FireIcon,
    ArrowTrendingDownIcon,
    BanknotesIcon,
    ShieldExclamationIcon,
    CurrencyDollarIcon,
    ArrowPathIcon,
    BeakerIcon,
} from "@heroicons/react/24/outline";
import {
    ChevronDownIcon,
    PhoneIcon,
    PlayCircleIcon,
    RectangleGroupIcon,
    BuildingOfficeIcon,
    PhotoIcon,
    PencilSquareIcon,
    CameraIcon,
    VideoCameraIcon,
    HomeModernIcon,
    DocumentIcon,
    PaperAirplaneIcon,
    DevicePhoneMobileIcon,
    UserGroupIcon,
    ComputerDesktopIcon,
    ClipboardDocumentCheckIcon,
    DocumentCheckIcon,
} from "@heroicons/react/20/solid";
import transparentLogoCropped from "../../assets/Palm-Partners-transparent-cropped.png";

const claims = [
    {
        name: "Hurricane",
        description:
            "Expert guidance through the complexities of hurricane-related claims",
        href: "/types-of-claims/hurricane",
        icon: CloudIcon,
    },
    {
        name: "Fire",
        description:
            "Comprehensive assistance for fire damage claims. We’ll help you get back on your feet.",
        href: "/types-of-claims/fire",
        icon: FireIcon,
    },
    {
        name: "Water / Plumbing",
        description:
            "Navigating water damage claims with precision and expertise.",
        href: "/types-of-claims/water",
        icon: BeakerIcon,
    },
    {
        name: "Sinkhole",
        description:
            "Dedicated support for dealing with unexpected sinkhole damages.",
        href: "/types-of-claims/sinkhole",
        icon: ArrowTrendingDownIcon,
    },
    {
        name: "Mold",
        description:
            "Navigating mold damage claims with precision and expertise.",
        href: "/types-of-claims/mold",
        icon: BeakerIcon,
    },
    {
        name: "Collapse",
        description:
            "Assisting with claims for structural collapses with attention to detail and care.",
        href: "/types-of-claims/collapse",
        icon: BanknotesIcon,
    },
    {
        name: "Vandalism / Theft",
        description:
            "Securing your rights in vandalism and theft incidents with our expert guidance.",
        href: "/types-of-claims/vandalism",
        icon: ShieldExclamationIcon,
    },
    {
        name: "Loss of Business Income",
        description: "Ensuring fair compensation for business income losses.",
        href: "/types-of-claims/loss-of-business",
        icon: CurrencyDollarIcon,
    },
    {
        name: "Wind / Tornado",
        description: "Expertise in handling wind and tornado damage claims.",
        href: "/types-of-claims/wind-tornado",
        icon: ArrowPathIcon,
    },
    {
        name: "Hail / Wind Driven Rain",
        description:
            "Effective representation for hail and wind driven rain damage claims.",
        href: "/types-of-claims/hail-wind-driven-rain",
        icon: CloudIcon,
    },
];

const services = [
    {
        name: "Palm Partners: Comprehensive Claims Management",
        description:
            "At Palm Partners, we offer a meticulous range of services to thoroughly document claims on behalf of our clients.",
        href: "/services/comprehensive-claims-management",
        icon: BuildingOfficeIcon,
    },
    {
        name: "Matterport 4D Home Imaging",
        description:
            "Capturing your property with cutting-edge technology for precision and clarity. Detailed Itemized Estimating: Ensuring every detail of the claim is accounted for.",
        href: "/services/matterport",
        icon: PhotoIcon,
    },
    {
        name: "Sketch & Home Dimensions",
        description:
            "Precise blueprints and measurements to validate your claim.",
        href: "/services/sketch-and-home-dimensions",
        icon: PencilSquareIcon,
    },
    {
        name: "Photographic Documentation",
        description: "Comprehensive photo evidence to support your case.",
        href: "/services/photographic-documentation",
        icon: CameraIcon,
    },
    {
        name: "Thermal Imaging",
        description:
            "Detecting unseen problems and ensuring no issue goes unnoticed.",
        href: "/services/thermal-imaging",
        icon: VideoCameraIcon,
    },
    {
        name: "Moisture Reading",
        description:
            "Identifying potential water damage areas for comprehensive coverage.",
        href: "/services/moisture-reading",
        icon: CloudIcon,
    },
    {
        name: "Detailed Roof Inspections",
        description: "Scrutinizing the most vulnerable parts of your property.",
        href: "/services/detailed-roof-inspections",
        icon: HomeModernIcon,
    },
    {
        name: "Drone Inspection",
        description:
            "Utilizing advanced tech to get a bird's eye view of potential damage.",
        href: "/services/drone-inspection",
        icon: PaperAirplaneIcon,
    },
    {
        name: "In-Depth Policy Review",
        description:
            "Ensuring you are fully aware and benefiting from your policy's offerings.",
        href: "/services/in-depth-policy-review",
        icon: DocumentIcon,
    },
    {
        name: "24/7 Call Service",
        description:
            "We're available anytime your need assistance or have concerns.",
        href: "/services/call-service",
        icon: DevicePhoneMobileIcon,
    },
    {
        name: "Personal Claims Specialist",
        description:
            "Dedicated experts to handle your claim with utmost priority.",
        href: "/services/personal-claims-specialist",
        icon: UserGroupIcon,
    },
    {
        name: "Online Portal Access",
        description:
            "Stay updated with real-time information and progress on your claim.",
        href: "/services/online-portal-access",
        icon: ComputerDesktopIcon,
    },
    {
        name: "Appraisals",
        description: "Expert evaluations for accurate claim estimates.",
        href: "/services/appraisals",
        icon: ClipboardDocumentCheckIcon,
    },
    {
        name: "Mediation",
        description:
            "Facilitating discussions to ensure you receive the rightful compensation.",
        href: "/services/mediation",
        icon: DocumentCheckIcon,
    },
];

const callsToAction = [
    { name: "Watch demo", href: "#", icon: PlayCircleIcon },
    { name: "Contact Us", href: "contact-us", icon: PhoneIcon },
    { name: "View all products", href: "#", icon: RectangleGroupIcon },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="relative isolate z-10 bg-white">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Palm Partners</span>
                        <img
                            className="h-12 w-auto"
                            src={transparentLogoCropped}
                            alt=""
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover>
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            Services
                            <ChevronDownIcon
                                className="h-5 w-5 flex-none text-gray-400"
                                aria-hidden="true"
                            />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 -translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 -translate-y-1"
                        >
                            <Popover.Panel className="absolute inset-x-0 top-10 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5">
                                <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                                    {services.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon
                                                    className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <a
                                                href={item.href}
                                                className="mt-6 block font-semibold text-gray-900"
                                            >
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-gray-600">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-gray-50">
                                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                        <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                                            {callsToAction.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                                >
                                                    <item.icon
                                                        className="h-5 w-5 flex-none text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <Popover>
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            Types Of Claims
                            <ChevronDownIcon
                                className="h-5 w-5 flex-none text-gray-400"
                                aria-hidden="true"
                            />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 -translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 -translate-y-1"
                        >
                            <Popover.Panel className="absolute inset-x-0 top-10 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5">
                                <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                                    {claims.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon
                                                    className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <a
                                                href={item.href}
                                                className="mt-6 block font-semibold text-gray-900"
                                            >
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-gray-600">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-gray-50">
                                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                        <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                                            {callsToAction.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                                >
                                                    <item.icon
                                                        className="h-5 w-5 flex-none text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        About Us
                    </a>
                    <a
                        href="/our-team"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Our Team
                    </a>
                    <a
                        href="contact-us"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Contact Us
                    </a>
                </Popover.Group>
                {/* incase we need a login later */}
                {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div> */}
            </nav>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Palm Partners</span>
                            <img
                                className="h-12 w-auto"
                                src={transparentLogoCropped}
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Services
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open
                                                            ? "rotate-180"
                                                            : "",
                                                        "h-5 w-5 flex-none"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...services].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        <item.icon
                                                            className="h-5 w-5 inline-block mr-2"
                                                            aria-hidden="true"
                                                        />
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Types Of Claims
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open
                                                            ? "rotate-180"
                                                            : "",
                                                        "h-5 w-5 flex-none"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...claims].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        <item.icon
                                                            className="h-5 w-5 inline-block mr-2"
                                                            aria-hidden="true"
                                                        />
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    About Us
                                </a>
                                <a
                                    href="/our-team"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Our Team
                                </a>
                                <a
                                    href="contact-us"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Contact Us
                                </a>
                            </div>
                            {/* incase we need a login later */}
                            {/* <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div> */}
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
