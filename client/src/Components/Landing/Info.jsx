import styles from "../../Styles/landing.module.css";
function 
Info() {
  return (
    <>
      <div className={styles.infogrid}>
        <div className={styles.coupon}>
          <span style={{fontWeight:"bold", fontSize:"24px"}}>SAVE upto Rs.130</span>
          <span className={styles.offerImage}>
            <img src={require("../../Images/off1.jpeg")} alt="coupon-1" />
          </span>
        </div>
        <div className={styles.coupon}>
        <span style={{fontWeight:"bold", fontSize:"24px"}}>SAVE upto Rs.100</span>
        <span className={styles.offerImage}>
            <img src={require("../../Images/off2.jpeg")} alt="coupon-1" />
          </span>
        </div>
        <div className={styles.coupon}>
        <span style={{fontWeight:"bold", fontSize:"24px"}}>SAVE upto 10%</span>
          <span className={styles.offerImage}>
            <img src={require("../../Images/off3.jpg")} alt="coupon-1" />
          </span>
        </div>
      </div>
    </>
  );
}

export default Info;
