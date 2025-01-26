import React from "react";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    CardTitle,
    CardDescription
} from "../../../../../../components/MuComponents/MuCard/Card";
import {
    FaRegCalendarAlt,
    FaRegClock,
    FaMapMarkerAlt
} from "react-icons/fa";
import styles from "./EventCard.module.css";

interface EventCardProps {
    image: string;
    title: string;
    subtitle: string;
    date: string;
    time: string;
    location: string;
    joinedText: string;
}

const EventCard: React.FC<EventCardProps> = ({
    image,
    title,
    subtitle,
    date,
    time,
    location,
    joinedText
}) => {
    return (
        <Card
            className="custom-card"
            style={{
                marginTop: "20px",
                maxWidth: "335px",
                borderRadius: "16px"
            }}
        >
            <CardHeader>
                <img src={image} alt={title} className={styles.cardImage} />
                <CardTitle className={styles.cardTitle}>{title}</CardTitle>
                <CardDescription className={styles.cardDescription}>
                    {subtitle}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className={styles.infoRow}>
                    <div className={styles.infoText}>
                        <FaRegCalendarAlt className={styles.icon} />
                        <span>{date}</span>
                    </div>
                    <div className={styles.infoText}>
                        <FaRegClock className={styles.icon} />
                        <span>{time}</span>
                    </div>
                    <div className={styles.infoText}>
                        <FaMapMarkerAlt className={styles.icon} />
                        <span>{location}</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter className={styles.cardFooter}>
                <button className={styles.joinButton}>Join Now</button>
                <p className={styles.joinedText}>{joinedText}</p>
            </CardFooter>
        </Card>
    );
};

export default EventCard;
