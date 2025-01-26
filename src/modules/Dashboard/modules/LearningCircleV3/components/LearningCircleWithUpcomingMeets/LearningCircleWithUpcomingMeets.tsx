import React from "react";
import EventCard from "../EventCard/EventCard";
import styles from "./LearningCircleWithUpcomingMeets.module.css";
import { useNavigate } from "react-router-dom";

interface LearningCircleWithUpcomingMeetsProps {
    events: Array<{
        image: string;
        title: string;
        subtitle: string;
        date: string;
        time: string;
        location: string;
        joinedText: string;
    }>;
}

const LearningCircleWithUpcomingMeets: React.FC<
    LearningCircleWithUpcomingMeetsProps
> = ({ events }) => {

    const navigate = useNavigate();
    const handleCreateButton = () => {
        navigate("/dev/lc-create");
    };

    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <div>
                    <h2 className={styles.sectionHeader}>
                        Learning Circles with Upcoming Meets
                    </h2>
                </div>
                <div>
                <button onClick={handleCreateButton} className={styles.createButton}>Create new learning circle</button>
                </div>
            </div>
            <div className={styles.cardContainer}>
                {events.map((event, index) => (
                    <div key={index} className={styles.card}>
                        <EventCard
                            image={event.image}
                            title={event.title}
                            subtitle={event.subtitle}
                            date={event.date}
                            time={event.time}
                            location={event.location}
                            joinedText={event.joinedText}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LearningCircleWithUpcomingMeets;
