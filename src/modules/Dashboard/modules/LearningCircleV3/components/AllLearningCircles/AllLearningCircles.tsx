import React from "react";
import LearningCircleCard from "../LearningCircleCard/LearningCircleCard";
import styles from "./AllLearningCircles.module.css";

interface LearningCircle {
    image: string;
    title: string;
    subtitle: string;
    joinedText: string;
}

interface AllLearningCirclesProps {
    circles: LearningCircle[];
}

const AllLearningCircles: React.FC<AllLearningCirclesProps> = ({ circles }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>All Learning Circles</h2>
            <div className={styles.sectionBody}>
                {circles.map((circle, index) => (
                    <LearningCircleCard
                        key={`circle-${index}`}
                        image={circle.image}
                        title={circle.title}
                        subtitle={circle.subtitle}
                        joinedText={circle.joinedText}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllLearningCircles;
