import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { RiQuillPenLine } from "react-icons/ri";
import { LuCalendarPlus } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";
import styles from "./LC-Meet.module.css";
import classNames from "classnames";
import Popup from 'reactjs-popup';

const pathprop = ["Learning Circles", "UI/UX Designers CET", "16/12/2024 - 04:30PM"];
const description = `
The UI/UX Design Learning Circle Meet will begin with a brief welcome and introductions, 
allowing participants to get to know one another and set the tone for the session. This 
will be followed by a quick overview of UI/UX design basics, highlighting key principles 
and showcasing examples of effective design. Next, attendees will be introduced to 
essential design tools like Figma, along with free resources to continue learning independently.

The main activity will involve a collaborative workshop where participants will work in 
groups to redesign a simple interface, focusing on usability, aesthetics, and user-centered 
design principles. Afterward, each group will present their work, receive constructive feedback, 
and discuss potential improvements. The session will conclude with an open discussion on 
emerging trends in UI/UX and opportunities for networking, allowing participants to share 
insights, ask questions, and explore future collaboration. A brief wrap-up will summarize 
key takeaways, outline next steps, and discuss topics for future meetings.
`;

const participants = [
  {
    name: "Edwin Emmanuel Roy",
    role: "College of Engineering Trivandrum",
    likes: "14.5K",
    status: "View Report",
  },
  {
    name: "John Steve",
    role: "College of Engineering Trivandrum",
    likes: "14.6K",
    status: "To Review",
  },
  {
    name: "Amisha Joseph",
    role: "College of Engineering Trivandrum",
    likes: "13.5K",
    status: "To Review",
  },
  {
    name: "Anita Babu",
    role: "College of Engineering Trivandrum",
    likes: "9.9K",
    status: "Rejected",
  },
  {
    name: "Vaishak Mohandas",
    role: "College of Engineering Trivandrum",
    likes: "9.8K",
    status: "View Report",
  },
];

interface Participant {
  name: string;
  role: string;
  likes: string;
  status: string;
}

const LcMeet: React.FC = () => {
  const [report, setReport] = useState<string>("");

  const handleReportSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Report Submitted: ${report}`);
    setReport("");
  };

  // Popup content component with proper typing
  const PopupContent: React.FC<{
    close: () => void;
    participant: Participant;
  }> = ({ close, participant }) => (
    <div className={styles["popup-container"]}>
      <div className={styles["popup-content"]}>
        <img
          src={`https://via.placeholder.com/80?text=${participant.name[0]}`}
          alt="Avatar"
          className={styles["popup-avatar"]}
        />
        <div className={styles["popup-options"]}>
          <h3>
            <a href="#" className={styles["popup-link"]}>
              View Report
            </a>{" "}
            of {participant.name}
          </h3>
          <div className={styles["popup-actions"]}>
            <button className={styles["popup-accept"]} onClick={close}>✔ Accept</button>
            <button className={styles["popup-reject"]} onClick={close}>✖ Reject</button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      {/* Pathbar */}
      <div className={styles.pathbar}>
        <span>{pathprop[0]}</span> &gt; <span>{pathprop[1]}</span> &gt; <span>{pathprop[2]}</span>
      </div>

      {/* Main Container */}
      <div className={styles["main-container"]}>
        {/* Meet Details Top */}
        <div className={styles["main-container-top"]}>
          <h1 className={styles["meet-details"]}>Meet Details</h1>
          <button className={styles["show-interest"]}>
            <span>Show Interest</span> <AiOutlineLike />
          </button>
        </div>

        {/* Meet Details Cards */}
        <div className={styles["main-container-cards"]}>
          <div className={styles["card"]}>
            <span>Interest Group</span>
            <h1>
              <RiQuillPenLine /> UI/UX Design
            </h1>
          </div>
          <div className={styles["card"]}>
            <span>Date</span>
            <h1>
              <LuCalendarPlus /> 16 Dec 2024
            </h1>
          </div>
          <div className={styles["card"]}>
            <span>Time</span>
            <h1>
              <IoMdTime /> 04:30 PM
            </h1>
          </div>
          <div className={styles["card"]}>
            <span>Location</span>
            <h1>
              <HiOutlineLocationMarker /> College Gazebo
            </h1>
          </div>
        </div>

        {/* Description */}
        <div className={styles["description-section"]}>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles["participants-report"]}>
          {/* Other Participants */}
          <div className={styles["participants-list"]}>
            <h2 className={styles["section-title"]}>Other Participants</h2>
            {participants.map((participant, index) => (
              <div key={index} className={styles.participant}>
                <div className={styles["participant-info"]}>
                  <img
                    className={styles["participant-avatar"]}
                    src={`https://via.placeholder.com/50?text=${participant.name[0]}`}
                    alt={`${participant.name} avatar`}
                  />
                  <div>
                    <h3 className={styles["participant-name"]}>{participant.name}</h3>
                    <p className={styles["participant-role"]}>{participant.role}</p>
                  </div>
                </div>
                <div className={styles["participant-actions"]}>
                  <p className={styles["participant-likes"]}>{participant.likes} Likes</p>
                  <Popup
                    disabled={participant.status !== "To Review"}
                    trigger={
                      <button
                        className={classNames({
                          [styles["status-rejected"]]: participant.status === "Rejected",
                          [styles["status-view-report"]]: participant.status === "View Report",
                          [styles["status-to-review"]]: participant.status === "To Review",
                        })}
                      >
                        {participant.status}
                      </button>
                    }
                    modal
                    closeOnDocumentClick
                    contentStyle={{ padding: "0", border: "none", borderRadius: "12px" }}
                    overlayStyle={{ backdropFilter: "blur(8px)" }}
                  >
                    {/* Pass the PopupContent directly without wrapping in a function */}
                    <PopupContent close={() => { }} participant={participant} />
                  </Popup>

                </div>
              </div>
            ))}
          </div>

          {/* Report Submission */}
          <form className={styles["report-form"]} onSubmit={handleReportSubmit}>
            <h2 className={styles["section-title"]}>Report Submission</h2>
            <label htmlFor="report" className={styles["report-label"]}>
              Submit your report here:
            </label>
            <textarea
              id="report"
              className={styles["report-input"]}
              value={report}
              onChange={(e) => setReport(e.target.value)}
              placeholder="Enter the report link"
            ></textarea>
            <div className={styles["report-actions"]}>
              <span>Or</span>
              <span>
                You can upload your report in .pdf or .doc formats. To upload,{" "}
                <a
                  href="#"
                  className={styles["upload-link"]}
                  onClick={() => alert("Upload functionality not implemented.")}
                >
                  Click here
                </a>
              </span>
              <button type="submit" className={styles["report-submit"]}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LcMeet;