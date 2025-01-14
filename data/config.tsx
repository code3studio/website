import { Button } from "@chakra-ui/react";
import { Br, Link } from "@saas-ui/react";
import { NextSeoProps } from "next-seo";
import { FaGithub, FaTwitter } from "react-icons/fa";
import {
  FiCheck,
  FiSmile,
  FiSliders,
  FiGrid,
  FiThumbsUp,
  FiTable,
  FiUsers,
} from "react-icons/fi";
import { Logo } from "./logo";
import { FeatureProps } from "components/features";
import { title } from "process";

const siteConfig = {
  logo: Logo,
  meetingUrl: "https://t.me/pysagesol",
  seo: {
    title: "PySage",
    description: "Sync data from any Postgres DB to another",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://pysage.fun",
      site_name: "PySage.fun",
      title: "Py Sage | Create Autonomous AI Agents Locally",
      description:
        "The ultimate Web3 agent framework",
      images: [
        {
          url: "/static/images/pysageonline.png", // Updated path to the logo
          alt: "PySage logo",
        },
      ],
    },
  } as NextSeoProps,
  termsUrl: "/terms",
  privacyUrl: "/privacy",
  header: {
    links: [
      {
        id: "features",
        label: "Features",
      },
      {
        id: "pricing",
        label: "Pricing",
      },
      {
        id: "faq",
        label: "FAQ",
      },
      {
        label: "Login",
        href: "https://accounts.schemamap.io/sign-in",
      },
      {
        label: "Sign Up",
        href: "https://accounts.schemamap.io/sign-up",
        variant: "primary",
      },
    ],
  },
  footer: {
    copyright: (
      <>
        © {new Date().getFullYear()} PySage.fun{" "}
        <Br display={{ base: "initial", md: "none" }} />
        All rights reserved
      </>
    ),
    links: [
      {
        href: "https://x.com/PysageDotFun",
        label: "Twitter",
      },
      {
        href: "https://t.me/pysagesol",
        label: "Telegram",
      },
      {
        href: "https://github.com/pysageai/pysage",
        label: <FaGithub size="20" />,
      },
    ],
  },
  signup: {
    title: "Create a new Schemamap.io account",
    features: [
      {
        title: "Spreadsheet management",
        icon: FiTable,
        description:
          "Stop building CSV and Excel imports by hand. Allow your customers to import their data collaboratively for any table in your web app.",
        iconPosition: "left",
        delay: 0.4,
      },
      {
        title: "Tenant Onboarding",
        icon: FiUsers,
        description:
          "Track the onboarding progress of your tenants, see where people get stuck. Get notified on Slack when data is ready for import.",
        iconPosition: "left",
        delay: 0.5,
      },
      {
        title: "Postgres-native",
        icon: FiGrid,
        description:
          "Integrate Schemamap.io with any cloud Postgres provider (Supabase, Hasura, AWS RDS, GCP, Azure). No special extensions needed.",
        iconPosition: "left",
        delay: 0.6,
      },
    ] as FeatureProps[],
  },
};

export default siteConfig;
