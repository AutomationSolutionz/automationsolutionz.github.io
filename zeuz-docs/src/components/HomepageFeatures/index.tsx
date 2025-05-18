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
        description: (
            <>
                Docusaurus was designed from the ground up to be easily
                installed and used to get your website up and running quickly.
            </>
        ),
    },
    {
        title: "ZeuZ Node",
        href: "/blog/tags/changelog",
        image: <GrNodes />,
        description: (
            <>
                Docusaurus was designed from the ground up to be easily
                installed and used to get your website up and running quickly.
            </>
        ),
    },
    {
        title: "ZeuZ Server",
        href: "/blog/tags/changelog",
        image: <FaCloud />,
        description: (
            <>
                Docusaurus lets you focus on your docs, and we&apos;ll do the
                chores. Go ahead and move your docs into the <code>docs</code>{" "}
                directory.
            </>
        ),
    },
    {
        title: "AI Mobile Inspector",
        href: "/blog/tags/changelog",
        image: <ImMobile />,
        description: (
            <>
                Extend or customize your website layout by reusing React.
                Docusaurus can be extended while reusing the same header and
                footer.
            </>
        ),
    },
    {
        title: "AI Windows Inspector",
        href: "/blog/tags/changelog",
        image: <FaWindows />,
        description: (
            <>
                Extend or customize your website layout by reusing React.
                Docusaurus can be extended while reusing the same header and
                footer.
            </>
        ),
    },
    {
        title: "AI Web Recorder",
        href: "/blog/tags/changelog",
        image: <FaRecordVinyl />,
        description: (
            <>
                Extend or customize your website layout by reusing React.
                Docusaurus can be extended while reusing the same header and
                footer.
            </>
        ),
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
                onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = hoverBoxShadow;
                }}
                onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = defaultBoxShadow;
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
                <div className="text--center padding-horiz--md" style={{ paddingBottom: "24px" }}>
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
