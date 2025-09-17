import React, { type ReactNode } from 'react';
import Content from '@theme-original/DocItem/Content';
import type ContentType from '@theme/DocItem/Content';
import type { WrapperProps } from '@docusaurus/types';

function buildPathString(prefix = '', suffix = '') {
    // Remove trailing slash from pathname
    const cleanPath = window.location.pathname.replace(/\/$/, '');
    return `${prefix}${cleanPath}${suffix}`;
}

function DocPageButtons() {
    const buttonBase = {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "6px 12px",
        fontSize: "14px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#ccc",
        backgroundColor: "#f9f9f9",
        color: "#333",
        cursor: "pointer",
        transition: "all 0.2s ease",
        userSelect: "none",
        textAlign: "left",
    };

    const buttonHover = {
        backgroundColor: "#eee",
    };

    const buttonGroup = {
        display: "flex",
        alignItems: "stretch",
        marginBottom: "8px",
    };

    const buttonFirst = {
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0",
        borderTopLeftRadius: "20px",
        borderBottomLeftRadius: "20px",
        borderRight: "0",
    };

    const buttonMiddle = {
        borderRadius: "0",
        borderRight: "0",
    };

    const buttonLast = {
        borderTopLeftRadius: "0",
        borderBottomLeftRadius: "0",
        borderTopRightRadius: "20px",
        borderBottomRightRadius: "20px",
    };

    const [hoverIndex, setHoverIndex] = React.useState(-1);

    // Share handler
    const handleShare = () => {
        const shareData = {
            title: "Check this out",
            text: "Here's a useful documentation page!",
            url: window.location.href,
        };

        if (navigator.share) {
            navigator.share(shareData).catch((err) => {
                console.error("Share failed:", err.message);
            });
        } else {
            window.location.href = `mailto:?subject=${encodeURIComponent(
                shareData.title
            )}&body=${encodeURIComponent(shareData.text + " " + shareData.url)}`;
        }
    };

    const buttons = [
        {
            label: "Open in ChatGPT",
            subLabel: "Ask ChatGPT about this page",
            icon: "/img/icons/openai.svg",
            onClick: () => {
                const prefix = 'https://raw.githubusercontent.com/AutomationSolutionz/automationsolutionz.github.io/refs/heads/site/';
                const suffix = '.md';
                const url = buildPathString(prefix, suffix);
                window.open(url, "_blank");
            },
        },
        {
            label: "Open in Claude",
            subLabel: "Ask Claude about this page",
            icon: "/img/icons/claude.svg",
            onClick: () => {
                const prefix = 'https://raw.githubusercontent.com/AutomationSolutionz/automationsolutionz.github.io/refs/heads/site/';
                const suffix = '.md';
                const url = buildPathString(prefix, suffix);
                window.open(url, "_blank");
            },
        },
        {
            label: "Share",
            icon: "/img/icons/share.svg",
            onClick: handleShare,
        },
    ];

    return (
        <div style={buttonGroup}>
            {buttons.map((btn, i) => {
                let style = { ...buttonBase };

                if (i === 0) style = { ...style, ...buttonFirst };
                else if (i === buttons.length - 1) style = { ...style, ...buttonLast };
                else style = { ...style, ...buttonMiddle };

                if (hoverIndex === i) style = { ...style, ...buttonHover };

                return (
                    <button
                        key={btn.label}
                        style={style}
                        onClick={btn.onClick}
                        onMouseEnter={() => setHoverIndex(i)}
                        onMouseLeave={() => setHoverIndex(-1)}
                        aria-label={btn.label}
                    >
                        {btn.icon ? (
                            <img
                                src={btn.icon}
                                alt={btn.label}
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    flexShrink: 0,
                                    borderRadius: 0,
                                    border: 'none',
                                    boxShadow: 'none',
                                }}
                            />
                        ) : null}

                        <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.2" }}>
                            <span style={{ fontWeight: 500 }}>{btn.label}</span>
                            {btn.subLabel ? (
                                <span style={{ fontSize: "12px", color: "#666" }}>
                                    {btn.subLabel}
                                </span>
                            ) : null}
                        </div>
                    </button>
                );
            })}
        </div>
    );
}


type Props = WrapperProps<typeof ContentType>;

export default function ContentWrapper(props: Props): ReactNode {
    return (
        <>
            <DocPageButtons />
            <Content {...props} />
        </>
    );
}
