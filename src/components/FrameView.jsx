import { useId } from "react";
import AppScreen from "@/components/AppScreen";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  DiageoLogo,
  HdslLogo,
  MirageLogo,
  ReversableLogo,
  StatamicLogo,
  StaticKitLogo,
  TransistorLogo,
  TupleLogo,
} from "@/components/StockLogos";
import clsx from "clsx";

const MotionAppScreenHeader = motion(AppScreen.Header);
const MotionAppScreenBody = motion(AppScreen.Body);

const headerAnimation = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};
const maxZIndex = 2147483647;

const bodyVariantBackwards = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: "blur(4px)",
  zIndex: 0,
  transition: { duration: 0.4 },
};

const bodyVariantForwards = (custom) => ({
  y: "100%",
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
});
const bodyAnimation = {
  initial: "initial",
  animate: "animate",
  exit: "exit",
  variants: {
    initial: (custom) =>
      custom.isForwards ? bodyVariantForwards(custom) : bodyVariantBackwards,
    animate: (custom) => ({
      y: "0%",
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: "blur(0px)",
      transition: { duration: 0.4 },
    }),
    exit: (custom) =>
      custom.isForwards ? bodyVariantBackwards : bodyVariantForwards(custom),
  },
};

function DeviceUserIcon(props) {
  return (
    <Image
      src="/h-name-logo.png"
      className="w-auto h-10 items-start"
      width={130}
      height={130}
      alt="LogoTwo"
      priority
    />
  );
}

function DeviceNotificationIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#A3A3A3"
      />
      <path
        d="M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z"
        fill="#737373"
      />
    </svg>
  );
}

function DeviceTouchIcon(props) {
  let id = useId();

  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={14}
          y1={14.5}
          x2={7}
          y2={17}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#737373" />
          <stop offset={1} stopColor="#D4D4D4" stopOpacity={0} />
        </linearGradient>
      </defs>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z"
        fill="#A3A3A3"
      />
      <path
        d="M7 22c0-4.694 3.5-8 8-8"
        stroke={`url(#${id}-gradient)`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z"
        fill="#A3A3A3"
      />
    </svg>
  );
}

function InviteScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Hussein Driving School</AppScreen.Title>
        <AppScreen.Subtitle>
          Pioneer of <span className="text-white">Driving school</span> in Embu
          town.
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="px-4 py-6">
          <Image
            src="/h-Logo.png"
            className="w-full h-full p-8 object-contain"
            width={200}
            height={200}
            alt="LogoTwo"
            priority
          />
          <div className="space-y-6">
            {[
              { label: "Full name", value: "New Learner" },
              { label: "Email address", value: "newlearner@gmail.com" },
            ].map((field) => (
              <div key={field.label}>
                <div className="text-sm text-gray-500">{field.label}</div>
                <div className="mt-2 border-b border-gray-200 pb-2 text-sm text-gray-900">
                  {field.value}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white">
            Register today
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  );
}
function StocksScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Companies</AppScreen.Title>
        <AppScreen.Subtitle>March 24th, 2024</AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="divide-y divide-gray-100 flex flex-col gap-2">
          {[
            {
              name: "Hussein Driving School",
              price: "4,098.01",
              change: "+4.98%",
              color: "#ffffff",
              logo: HdslLogo,
            },
            {
              name: "Feisal & partners Real Estate Agents",
              price: "5,451.10",
              change: "-3.38%",
              color: "#5A67D8",
              logo: TupleLogo,
            },
            {
              name: "Feisal & partners Usafi",
              price: "4,098.41",
              change: "+6.25%",
              color: "#2A5B94",
              logo: TransistorLogo,
            },
            {
              name: "Al-Injaz Institute of Islamic Finance Ltd.",
              price: "5,040.85",
              change: "-3.11%",
              color: "#0EA5E9",
              logo: StatamicLogo,
            },
            {
              name: "EmbUber cabs",
              price: "250.65",
              change: "+1.25%",
              color: "#3320A7",
              logo: DiageoLogo,
            },
            {
              name: "Al-Feisal FC",
              price: "250.65",
              change: "-3.38%",
              color: "#2A3034",
              logo: StaticKitLogo,
            },

            {
              name: "Feisal and Partners Law farm",
              price: "140.44",
              change: "+9.09%",
              color: "#16A34A",
              logo: MirageLogo,
            },
            {
              name: "Feisal & partners Prints",
              price: "550.60",
              change: "-1.25%",
              color: "#8D8D8D",
              logo: ReversableLogo,
            },
          ].map((stock) => (
            <div key={stock.name} className="flex items-center gap-4 px-4 py-3">
              <div
                className="flex-none rounded-full"
                style={{ backgroundColor: stock.color }}
              >
                <stock.logo className="h-10 w-10" />
              </div>
              <div className="flex-auto text-sm text-gray-900">
                {stock.name}
              </div>
              <div className="flex-none text-right">
                <div className="text-sm font-medium text-gray-900">
                  {stock.price}
                </div>
                <div
                  className={clsx(
                    "text-xs leading-5",
                    stock.change.startsWith("+")
                      ? "text-blue-600"
                      : "text-gray-500"
                  )}
                >
                  {stock.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  );
}

function InvestScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Our principles of work:</AppScreen.Title>
        <AppScreen.Subtitle>
          <span className="text-white">Feisal-</span>Group
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="px-4 py-6">
          <div className="space-y-4">
            {[
              {
                label:
                  "To be a leading force in driving economic growth and social development in Kenya and beyond, through innovation, integrity, and sustainable business practices.",
                value: "Vision",
              },
              {
                label:
                  "Our mission is to deliver exceptional products and services that meet the evolving needs of our customers and communities. We achieve this by building strong relationships based on trust, fostering innovation, empowering our people, embracing sustainability, and engaging with stakeholders to fulfill our commitments.",
                value: <div className="">Mission</div>,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex justify-between border-b border-gray-100 pb-4"
              >
                <div className="text-sm text-gray-500">{item.label}</div>
                <div className="text-sm font-semibold text-gray-900">
                  {item.value}
                </div>
              </div>
            ))}
            <div className="rounded-lg bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white">
              Would you trust us?
            </div>
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  );
}

export const features = [
  {
    name: "Our journey began with Hussein Driving School,",
    description:
      "Founded in the 1990s by the late Cllr. Hussein Swale, is a trusted institution within Feisal Group. Led by Feisal Hussein Swaleh, the school emphasizes excellence and safety in driving education. With personalized instruction from experienced trainers, we equip learners with the skills and confidence to become responsible drivers. Our commitment to road safety and empowering individuals through safe transportation continues to drive our mission forward.",
    icon: DeviceUserIcon,
    screen: InviteScreen,
  },
  {
    name: "Over the years, we have expanded our portfolio to include:",
    description:
      "Feisal and Partners Real Estate Agents, a leader in Kenya's real estate market, connecting clients with ideal properties through personalized service and integrity. Feisal and Partners Usafi provides professional home cleaning services, ensuring clean and healthy living environments with eco-friendly products and expert techniques. Al-Injaz Institute of Islamic Finance Ltd. empowers individuals and organizations in Islamic finance, offering academic programs and training courses to excel in Sharia-compliant banking, investments, and insurance, driving growth and development in this specialized field.",
    icon: DeviceNotificationIcon,
    screen: StocksScreen,
  },
  {
    name: "Our principles of work",
    description:
      "At Feisal Group, we are driven by a commitment to excellence, integrity, and community development. With a relentless pursuit of innovation and a dedication to meeting the diverse needs of our clients and society, we continue to set new standards of success and contribute to the growth and prosperity of Kenya. Join us as we embark on a journey of transformation and impact, shaping a brighter future for generations to come. Welcome to Feisal Group, where excellence meets opportunity.",
    icon: DeviceTouchIcon,
    screen: InvestScreen,
  },
];
