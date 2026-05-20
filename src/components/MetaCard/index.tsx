import React from "react";
import "./MetaCard.css";

type MetaCardProps = {
    tags?: string[];
    availableFrom?: string;
    difficulty?: string;
    lastUpdated?: string;
    relatedTopics?: string[];
};

const MetaCard = ({
    tags = [],
    availableFrom,
    difficulty,
    lastUpdated,
    relatedTopics = []
}: MetaCardProps) => {
    return (
        <div className="meta-card">
            <ul className="meta-list">
                {availableFrom && (
                    <li>
                        <span className="meta-label">📅 Available from:</span>{" "}
                        <a href="#changelog">{availableFrom}</a>
                    </li>
                )}
                {difficulty && (
                    <li>
                        <span className="meta-label">🎯 Difficulty:</span> {difficulty}
                    </li>
                )}
                {lastUpdated && (
                    <li>
                        <span className="meta-label">🕒 Last Updated:</span> {lastUpdated}
                    </li>
                )}
                {tags.length > 0 && (
                    <li>
                        <span className="meta-label">🏷️ Tags:</span> {tags.join(", ")}
                    </li>
                )}
                {relatedTopics.length > 0 && (
                    <li>
                        <span className="meta-label">🔗 Related Topics:</span>
                        {" "}
                        <a href="#related-topics">{relatedTopics.join(", ")}</a>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default MetaCard;
