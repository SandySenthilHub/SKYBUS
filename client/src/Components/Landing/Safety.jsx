import styles from "../../Styles/landing.module.css";

const arr = [
  {
    heading: "Clean and Hygienic Buses",
    descriptions:
      "All buses are thoroughly cleaned and sanitized before and after each trip to ensure a safe journey.",
  },
  {
    heading: "Mandatory Face Masks",
    descriptions:
      "Wearing face masks is compulsory for all passengers and bus staff throughout the journey.",
  },
  {
    heading: "Regular Health Checks",
    descriptions:
      "Passengers undergo temperature checks, and drivers receive regular health screenings before every trip.",
  },
];

const Safety = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imgBox}>
        <img
          src={require("../../Images/safety.jpg")}
          alt="safety shield"
         
        />
      </div>
      <div className={styles.writingConatiner}>
        <h2>Your Safety, Our Priority</h2>
        <h3>Travel with Confidence</h3>
        <span
          style={{
            color: "blue",
            display: "inline-block",
            marginLeft: "4px",
          }}
        >
          Learn More
        </span>
        <p>
          Look for the &nbsp;
          <span className={styles.boldspan}>Safety+ tag</span>&nbsp; when booking your trip.
        </p>
        <div className={styles.lowerFlex}>
          {arr.map((item, i) => {
            return (
              <div key={i} className={styles.lowerFlexItems}>
                <h3>{item.heading}</h3>
                <p>{item.descriptions}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Safety;
