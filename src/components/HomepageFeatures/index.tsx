import type { ReactElement, ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { GrNodes } from "react-icons/gr";
import { LuLogs } from "react-icons/lu";
import { FaCloud, FaRecordVinyl, FaWindows } from "react-icons/fa6";
import { ImMobile } from "react-icons/im";

type FeatureItem = {
    href: string;
    title: string;
    image: ReactElement;
    description: ReactNode;
};

const FeatureList: FeatureItem[] = [
    {
        title: "Changelog",
        href: "/blog/tags/changelog",
        image: <LuLogs />,
        description: <></>,
    },
    {
        title: "ZeuZ Node",
        href: "/docs/zeuz-node",
        image: <GrNodes />,
        description: <></>,
    },
    {
        title: "ZeuZ Server",
        href: "/docs/zeuz-server",
        image: <FaCloud />,
        description: <></>,
    },
    {
        title: "AI Mobile Inspector",
        href: "/docs/Apps/ai-mobile-inspector",
        image: <ImMobile />,
        description: <></>,
    },
    {
        title: "AI Windows Inspector",
        href: "/docs/Apps/ai-windows-inspector",
        image: <FaWindows />,
        description: <></>,
    },
    {
        title: "AI Web Recorder",
        href: "/docs/Apps/ai-web-recorder/",
        image: <FaRecordVinyl />,
        description: <></>,
    },
];

function Feature({ title, image, description, href }: FeatureItem) {
    // Define subtle, evenly spread box-shadow
    const defaultBoxShadow = "0 0px 16px 0 rgba(30,35,90,0.06)";
    const hoverBoxShadow = "0 0 8px 2px var(--ifm-color-primary-lightest)";

    // Use the Docusaurus CSS var for the primary color
    const borderColor = "var(--ifm-color-primary-lightest)";

    return (
        <div className={clsx("col col--4")} style={{ padding: "8px" }}>
            <a
                href={href}
                className={clsx(styles.card, "homepage-feature-card")}
                style={{
                    display: "block",
                    textDecoration: "none",
                    borderRadius: "16px",
                    boxShadow: defaultBoxShadow,
                    transition: "box-shadow 0.2s, border-color 0.2s",
                    height: "100%",
                    color: "inherit",
                    border: `1.5px solid ${borderColor}`,
                }}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                        hoverBoxShadow;
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                        defaultBoxShadow;
                }}
            >
                <div className="text--center" style={{ paddingTop: "24px" }}>
                    {image}
                    {/* <img
                        src={image}
                        alt={title}
                        className={styles.featureSvg}
                        role="img"
                        style={{
                            height: 100,
                            marginBottom: "1rem",
                            objectFit: "contain",
                        }}
                    /> */}
                </div>
                <div
                    className="text--center padding-horiz--md"
                    style={{ paddingBottom: "24px" }}
                >
                    <Heading as="h3">{title}</Heading>
                    <p>{description}</p>
                </div>
            </a>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
