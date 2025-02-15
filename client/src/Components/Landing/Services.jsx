import styles from "../../Styles/landing.module.css";
import service1 from "../../Images/service1.jpg";
import service2 from "../../Images/service2.jpg";
import service3 from "../../Images/service3.jpg";
import service4 from "../../Images/service4.jpg";
import promise from "../../Images/promise.png";




const data = [
  {
    img: service1,
    title: "TRAVEL WITH CONFIDENCE",
    desc: "Our enhanced safety protocols include sanitized buses, mandatory masks, and regular health checks for a worry-free journey.",
  },
  {
    img: service2,
    title: "EXCEPTIONAL CUSTOMER SUPPORT",
    desc: "Our dedicated support team is always available to assist you with your travel needs and concerns.",
  },
  {
    img: service3,
    title: "AFFORDABLE PRICES",
    desc: "We ensure the best prices for your trips with exciting deals and partner offers.",
  },
  {
    img: service4,
    title: "EXCLUSIVE PERKS",
    desc: "Enjoy a range of benefits that go beyond just ticket booking for a seamless travel experience.",
  },
];

const Services = () => {
  return (
    <div className={styles.mainContainer1}>
      <div className={styles.imgBox1}>
        <img
          alt=""
          src={promise}
        />
      </div>
      <h1>Your Journey, Our Commitment</h1>
      <div className={styles.flexContainer1}>
        {data.map((item, i) => {
          return (
            <div key={i} className={styles.flexItems1}>
              <div className={styles.itemimg1}>
                <img src={item.img} alt="item"/>
              </div>

              <p>{item.title}</p>
              <p className={styles.desc1}>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
