import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: "ZeuZ Resources",
    tagline: "Documentation and learning resources for the ZeuZ platform",
    favicon: "img/favicon.ico",

    deploymentBranch: "master",
    trailingSlash: true,

    // Set the production url of your site here
    url: "https://docs.zeuz.ai",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "automationsolutionz", // Usually your GitHub org/user name.
    projectName: "automationsolutionz.github.io", // Usually your repo name.

    onBrokenLinks: "warn",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ["rss", "atom"],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                    // Useful options to enforce blogging best practices
                    onInlineTags: "warn",
                    onInlineAuthors: "warn",
                    onUntruncatedBlogPosts: "warn",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: "img/zeuz-social-card.png",
        navbar: {
            title: "",
            logo: {
                alt: "ZeuZ logo",
                src: "img/logo.svg",
                className: "zeuz_logo",
            },
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "docsSidebar",
                    position: "left",
                    label: "Docs",
                },
                {
                    to: "/blog/tags/changelog",
                    label: "Changelog",
                    position: "left",
                },
                { to: "/blog", label: "Blog", position: "left" },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Setup a trial account",
                            to: "/docs/intro",
                        },
                        {
                            label: "Setup ZeuZ Node",
                            to: "/docs/intro",
                        },
                    ],
                },
                {
                    title: "Community",
                    items: [
                        {
                            label: "Discord",
                            href: "https://discord.gg/7DpMYcPWCc",
                        },
                        {
                            label: "LinkedIn",
                            href: "https://www.linkedin.com/company/automation-solutionz",
                        },
                        {
                            label: "Facebook",
                            href: "https://www.facebook.com/automationsolutionz/",
                        },
                        {
                            label: "YouTube",
                            href: "https://www.youtube.com/@zeuzai",
                        },
                    ],
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "Blog",
                            to: "/blog",
                        },
                        {
                            label: "GitHub",
                            href: "https://github.com/AutomationSolutionz/",
                        },
                        {
                            label: "Download ZeuZ Node",
                            href: "https://github.com/AutomationSolutionz/Zeuz_Python_Node/releases/",
                        },
                        {
                            label: "ZeuZ demo / playground",
                            href: "https://demo.zeuz.ai/",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Automation Solutionz.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
