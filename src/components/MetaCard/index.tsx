import React from "react";
import "./MetaCard.css";

const MetaCard = ({
    tags = [],
    availableFrom,
    difficulty,
    lastUpdated,
    relatedTopics = []
}) => {
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
                        <span className="meta-label">🔗 Related Topics:</span> {relatedTopics.join(", ")}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default MetaCard;
