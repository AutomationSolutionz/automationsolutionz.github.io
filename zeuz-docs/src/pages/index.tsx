import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import { FaDiscord, FaGithub, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";

import styles from "./index.module.css";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    ZeuZ Learning center
                </Heading>
                <p className="hero__subtitle">
                    Documentation and learning resources for the ZeuZ platform.
                </p>
            </div>
        </header>
    );
}

function SocialLinks() {
    const links = [
        {
            name: "Discord",
            url: "https://discord.gg/7DpMYcPWCc",
            icon: <FaDiscord size={36} />,
        },
        {
            name: "GitHub",
            url: "https://github.com/AutomationSolutionz/",
            icon: <FaGithub size={36} />,
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/company/automation-solutionz",
            icon: <FaLinkedin size={36} />,
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/automationsolutionz/",
            icon: <FaFacebook size={36} />,
        },
        {
            name: "YouTube",
            url: "https://www.youtube.com/@zeuzai",
            icon: <FaYoutube size={36} />,
        },
    ];

    return (
        <div
            className={styles.socialLinks}
            style={{
                display: "flex",
                gap: "1.5rem",
                justifyContent: "center",
                marginBottom: "2rem",
            }}
        >
            {links.map(({ name, url, icon }) => (
                <Link
                    key={name}
                    to={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    style={{
                        color: "inherit",
                        transition: "color 0.3s ease",
                        display: "flex",
                        alignItems: "center",
                    }}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.color =
                            "var(--ifm-color-primary)")
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "inherit")
                    }
                >
                    {icon}
                </Link>
            ))}
        </div>
    );
}

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title="ZeuZ Learning center"
            description="Documentation and learning resources for the ZeuZ platform."
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                    }}
                >
                    {/* <img src="https://zeuz.ai/_next/image?url=%2Funiquewhy.gif&w=828&q=75" /> */}
                    <SocialLinks />
                </div>
            </main>
        </Layout>
    );
}
