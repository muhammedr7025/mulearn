import React, { useEffect, useState } from "react";
import styles from "./LC-Create.module.css";
import RecurringDates from "../components/RecurringDates";
import { getInterestGroups } from "../services/LC-CreateService";
import { InterestGroup } from "../types/LC-CreateTypes";

const LcCreate: React.FC = () => {
    const [formData, setFormData] = useState({
        title: "",
        interestGroup: "",
        institute: "",
        location: "",
        description: "",
        recurring: false
    });
    const [interestGroups, setInterestGroups] = useState<InterestGroup[]>([]);

    const handleChange = (
        event: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value, type } = event.target;

        if (type === "checkbox") {
            const checked = (event.target as HTMLInputElement).checked;
            setFormData(values => ({
                ...values,
                [name]: checked
            }));
        } else {
            setFormData(values => ({
                ...values,
                [name]: value
            }));
        }
    };

    useEffect(() => {
        getInterestGroups()
            .then(value => {
                if (value) {
                    setInterestGroups(value.response.aois);
                }
            })
            .catch(err => {
                console.log("Error fetching interest groups:", err);
            });

        return () => {
            setInterestGroups([]);
        };
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className={styles.createContainer}>
            <h1 className={styles.sectionTitle}>
                Create a New Learning Circle
            </h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.gridContainer}>
                    {/* Left column */}
                    <div className={styles.column}>
                        <div className={styles.inputGroup}>
                            <label
                                htmlFor="title"
                                className={styles.inputLabel}
                            >
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                placeholder="Enter the title of your new learning circle"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label
                                htmlFor="institute"
                                className={styles.inputLabel}
                            >
                                Institute
                            </label>
                            <input
                                type="text"
                                id="institute"
                                placeholder="Enter your institute"
                                name="institute"
                                value={formData.institute}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Right column */}
                    <div className={styles.column}>
                        <div className={styles.inputGroup}>
                            <label
                                htmlFor="interestGroup"
                                className={styles.inputLabel}
                            >
                                Interest Group
                            </label>
                            <select
                                name="interestGroup"
                                id="interestGroup"
                                value={formData.interestGroup}
                                onChange={handleChange}
                            >
                                <option value="">
                                    Select an Interest Group
                                </option>
                                {interestGroups.map(group => (
                                    <option key={group?.id} value={group?.id}>
                                        {group?.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className={styles.inputGroup}>
                            <label
                                htmlFor="location"
                                className={styles.inputLabel}
                            >
                                Location
                            </label>
                            <input
                                type="text"
                                id="location"
                                placeholder="Enter your location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Description (spans two columns) */}
                    <div className={`${styles.inputGroup} ${styles.textArea}`}>
                        <label
                            htmlFor="description"
                            className={styles.inputLabel}
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Describe your learning circle"
                            value={formData.description}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>

                {/* Bottom section with buttons */}
                <div className={styles.bottomSection}>
                    <div className={styles.leftButton}>
                        <label
                            htmlFor="recurring"
                            className={styles.inputLabel}
                        >
                            Is this recurring?
                        </label>
                        <label className={styles.switch}>
                            <input
                                type="checkbox"
                                id="recurring"
                                name="recurring"
                                checked={formData.recurring}
                                onChange={handleChange}
                            />
                            <span
                                className={`${styles.slider} ${styles.round}`}
                            ></span>
                        </label>
                        {/* Recurring dates */}
                        {formData.recurring && (
                            <div className={styles.recurringContainer}>
                                <RecurringDates />
                            </div>
                        )}
                    </div>

                    <div className={styles.rightButton}>
                        <button type="submit" className={styles.submitBtn}>
                            Create Learning Circle
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LcCreate;