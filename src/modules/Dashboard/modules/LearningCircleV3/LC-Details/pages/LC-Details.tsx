import React, { useState } from "react";
import Popup from "reactjs-popup";
import styles from "./LC-Details.module.css";
import detailsImage from "../../../assets/images/detailsImage.png";

import {
    FaRegCalendarAlt,
    FaRegClock,
    FaMapMarkerAlt,
    FaLink,
    FaBuilding
} from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const LcDetails: React.FC = () => {
    const [interest, setInterest] = useState("Show Interest");
    const [interestClass, setInterestClass] = useState("actionButton");

    const handleActionButton = () => {
        setInterest("Interested");
        setInterestClass("actionButton2");
    };

    const dummyData = {
        meetings: [
            {
                id: 1,
                host: "Nayan Pillai",
                date: "16 December 2024",
                time: "04:30 PM",
                location: "College Gazebo",
                title: "Concepts & Basics of UI Design",
                description:
                    "This session will cover basic concepts with real-world examples and introductions, allowing participants to gain the foundational skills necessary for UI design.",
                interested: 5,
                registered: false
            },
            {
                id: 2,
                host: "Nayan Pillai",
                date: "18 December 2024",
                time: "05:30 PM",
                location: "Online",
                title: "The UX/UI Learning Circle",
                description:
                    "An insightful session designed to explore the differences between UX and UI, covering best practices for effective design.",
                interested: 8,
                registerd: true
            },
            {
                id: 3,
                host: "Edwin Emmanuel Roy",
                date: "20 December 2024",
                time: "06:00 PM",
                location: "Online",
                title: "Advanced UI/UX Design Strategies",
                description:
                    "A hands-on workshop covering advanced techniques and methodologies to create intuitive user interfaces and effective user experiences.",
                interested: 10,
                registerd: true
            }
        ],
        headerInfo: {
            description: `The UI/UX Learning Circle at the College of Engineering Trivandrum is an interactive, collaborative space designed to explore the essential principles and practices of user interface (UI) 
      and user experience (UX) design. Targeted at students across various disciplines of engineering, this learning circle aims to deepen understanding of how design impacts functionality, usability, and user 
      satisfaction in digital products. Through workshops, hands-on sessions, and peer-to-peer discussions, participants will delve into the core concepts of UI/UX design, including wireframing, prototyping, 
      usability testing, and the latest trends in digital design. Students will also engage in real-world case studies and practical exercises, gaining insights from industry experts and design professionals.`,
            creator: "Edwin Emmanuel Roy",
            location: "Sreekaryam, Trivandrum",
            college: "College of Engineering Trivandrum",
            totalKarma: 100,
            totalPeers: 12
        }
    };

    const PopupContent: React.FC<{
        close: () => void;
    }> = ({close}) => (
        <div className={styles.popup}>
                                    <h3>Schedule a Meet</h3>
                                    <form className={styles.scheduleForm}>
                                        <div className={styles.dtd}>
                                            <label>
                                                Date*:
                                                <input type="date" required />
                                            </label>
                                            <label>
                                                Time*:
                                                <input type="time" required />
                                            </label>
                                            <label>
                                                Duration*:
                                                <input
                                                    type="number"
                                                    placeholder="Enter duration in hours"
                                                    required
                                                />
                                            </label>
                                        </div>
                                        <div className={styles.dtd}>
                                            <label>
                                                Mode*:
                                                <select required>
                                                    <option value="Online">
                                                        Online
                                                    </option>
                                                    <option value="Offline">
                                                        Offline
                                                    </option>
                                                </select>
                                            </label>
                                            <label>
                                                Meet Link:
                                                <input
                                                    type="url"
                                                    placeholder="Enter meeting link"
                                                />
                                            </label>
                                        </div>
                                        <div>

                                          
                                        </div>
                                        <label>
                                            What are you planning to do
                                            (Agenda)*:
                                            <textarea
                                                placeholder="Add Agenda"
                                                required
                                            />
                                        </label>
                                        <div className={styles.toggleWrapper}>
                                            <label
                                                className={styles.toggleLabel}
                                            >
                                                Proof needs to be submitted?
                                            </label>
                                            <label
                                                className={styles.toggleSwitch}
                                            >
                                                <input
                                                    type="checkbox"
                                                    className={
                                                        styles.toggleInput
                                                    }
                                                />
                                                <span
                                                    className={
                                                        styles.toggleSwitchSpan
                                                    }
                                                ></span>
                                            </label>
                                        </div>

                                        <div className={styles.popupActions}>
                                            <button
                                                type="button"
                                                className={styles.cancelButton}
                                                onClick={close}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className={styles.saveButton}
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </div>
    )

    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate("/dev/lc-meet");
      };
    

    return (
        <div className={styles.learningCircle}>
            {/* Long Image Section */}
            <div className={styles.longImageSection}>
                <img
                    src={detailsImage}
                    alt="Learning Circle Details"
                    className={styles.longImage}
                />
            </div>

            {/* Header Section */}
            <header className={styles.header}>
                <div className={styles.headerL}>
                    <p>{dummyData.headerInfo.description}</p>
                    <div className={styles.headerActions}>
                        {/* Popup Trigger */}
                        <Popup
                            trigger={
                                <button className={styles.actionButtontop}>
                                    Schedule a Meet
                                </button>
                            }
                            modal
                            closeOnDocumentClick
                        >
                            <PopupContent close={(() => {})}/>
                        </Popup>
                        <button className={styles.actionButtontop}>
                            Invite Others
                        </button>
                    </div>
                </div>
                {/* Stats and Info */}
                <div className={styles.headerR}>
                    {/* Stats Section */}
                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statLabel}>
                                Total Karma Points
                            </span>
                            <span className={styles.statValue}>
                                {dummyData.headerInfo.totalKarma}
                            </span>
                        </div>
                        <div className={styles.statItemWithButton}>
                            <span className={styles.statLabel}>
                                Total Number of Peers
                            </span>
                            <span className={styles.statValue}>
                                {dummyData.headerInfo.totalPeers}
                                <button className={styles.viewPeersButton}>
                                    View All Peers
                                </button>
                            </span>
                        </div>
                    </div>
                    {/* Location and College Info */}
                    <div className={styles.locationInfo}>
                        <div className={styles.locationItem}>
                            <FaMapMarkerAlt className={styles.icon} />
                            <span>{dummyData.headerInfo.location}</span>
                        </div>
                        <div className={styles.locationItem}>
                            <FaBuilding className={styles.icon} />
                            <span>{dummyData.headerInfo.college}</span>
                        </div>
                        <div className={styles.createdBy}>
                            <span>Created By:</span>
                            <div className={styles.avatarandname}>
                                <div className={styles.createdByAvatar}>
                                    <img
                                        src="https://via.placeholder.com/30"
                                        alt="Avatar"
                                        className={styles.avatartop}
                                    />
                                </div>
                                <span>{dummyData.headerInfo.creator}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Meetings Section */}
            <div className={styles.meetings}>
                {dummyData.meetings.map(meeting => (
                    <div key={meeting.id} className={styles.meetingCard} onClick={handleCardClick}>
                        {/* Buttons Section */}
                        {meeting.registerd ? (
                            <div className={styles.cardButtons}>
                                <button className={styles.actionButton}>
                                    <span>
                                        Copy Link{" "}
                                        <FaLink className={styles.icon} />{" "}
                                    </span>
                                </button>
                                <button className={styles.actionButton2}>
                                    Join Now
                                </button>
                            </div>
                        ) : (
                            <div className={styles.cardButtons}>
                                <button
                                    className={styles[`${interestClass}`]}
                                    onClick={handleActionButton}
                                >
                                    <span>
                                        {interest}{" "}
                                        <BiLike className={styles.icon} />
                                    </span>
                                </button>
                            </div>
                        )}
                        {/* Card Header */}
                        <div className={styles.cardHeader}>
                            <h3>
                                {meeting.host} has scheduled a learning circle
                                meet
                            </h3>
                        </div>

                        {/* Card Details */}
                        <div className={styles.cardDetails}>
                            <div className={styles.detailItem}>
                                <FaRegCalendarAlt className={styles.icon} />{" "}
                                {meeting.date}
                            </div>
                            <div className={styles.detailItem}>
                                <FaRegClock className={styles.icon} />{" "}
                                {meeting.time}
                            </div>
                            <div className={styles.detailItem}>
                                <FaMapMarkerAlt className={styles.icon} />{" "}
                                {meeting.location}
                            </div>
                        </div>

                        {/* Interested Avatars */}
                        <div className={styles.interestedSection}>
                            <div className={styles.avatarGroup}>
                                <img
                                    src="https://via.placeholder.com/30"
                                    alt="Avatar 1"
                                    className={styles.avatar}
                                />
                                <img
                                    src="https://via.placeholder.com/30"
                                    alt="Avatar 2"
                                    className={styles.avatar}
                                />
                                <img
                                    src="https://via.placeholder.com/30"
                                    alt="Avatar 3"
                                    className={styles.avatar}
                                />
                            </div>
                            <span>
                                {meeting.interested} people showed interest
                            </span>
                        </div>

                        {/* Card Body */}
                        <div className={styles.cardBody}>
                            <strong>{meeting.title}</strong>
                            <p>{meeting.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LcDetails;
