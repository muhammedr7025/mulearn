import React, { useState, useEffect } from "react";
import styles from "./RecurringDates.module.css";

const RecurringDates: React.FC = () => {
  const [frequency, setFrequency] = useState<"monthly" | "weekly">("monthly"); // Default to "monthly"
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const handleFrequencyClick = (type: "monthly" | "weekly") => {
    setFrequency(type);
    setSelectedDay(null); // Reset selected day on frequency change
  };

  const handleDaySelect = (day: number) => {
    setSelectedDay(day);
  };

  const renderOptions = () => {
    if (frequency === "monthly") {
      return (
        <div className={styles.optionsContainer}>
          <p className={styles.infoText}>Every month at</p>
          <div className={styles.dayButtons}>
            {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
            .map((day) => (
              <button
                type="button"
                key={day}
                className={`${styles.dayButton} ${
                  selectedDay === day ? styles.selected : ""
                }`}
                onClick={() => handleDaySelect(day)}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      );
    } else if (frequency === "weekly") {
      return (
        <div className={styles.optionsContainer}>
          <p className={styles.infoText}>Every week at</p>
          <div className={styles.dayButtons}>
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
              (day, index) => (
                <button
                  type="button"
                  key={index}
                  className={`${styles.dayButton} ${
                    selectedDay === index ? styles.selected : ""
                  }`}
                  onClick={() => handleDaySelect(index)}
                >
                  {day}
                </button>
              )
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Recurring Dates</h2>
      <div className={styles.frequencyButtons}>
        <button
          type="button"
          className={`${styles.frequencyButton} ${
            frequency === "monthly" ? styles.selected : ""
          }`}
          onClick={() => handleFrequencyClick("monthly")}
        >
          Monthly
        </button>
        <button
          type="button"
          className={`${styles.frequencyButton} ${
            frequency === "weekly" ? styles.selected : ""
          }`}
          onClick={() => handleFrequencyClick("weekly")}
        >
          Weekly
        </button>
      </div>
      {renderOptions()}
    </div>
  );
};

export default RecurringDates;