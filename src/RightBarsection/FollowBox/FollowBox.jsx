import { useState } from "react";
import FollowButton from "./FollowButton";
import Styles from "./Follow.module.css"

export default function FollowBox() {


    const content = [
        {
          image:
            "https://pbs.twimg.com/profile_images/1565985672501927936/d-r-h241_400x400.jpg",
          name: "Narendra Modi",
          userName: "@narendramodi",
          dots: "Follow",
          dots3: "Following",
        },
        {
          image:
            "https://pbs.twimg.com/profile_images/1570184150526615553/OwB7Ut_T_400x400.jpg",
          name: "Arunma Oteh",
          userName: "@aoteh",
          dots: "Follow",
          dots3: "Following",
        },
        {
          image:
            "https://pbs.twimg.com/profile_images/1628790075940126721/jhpFOmmY_400x400.jpg",
          name: "Justin Mauldin",
          userName: "@jmauldn",
          dots: "Follow",
          dots3: "Following",
        },
        {
          image:
            "https://pbs.twimg.com/profile_images/1317154509768986625/WcGmrrQY_400x400.jpg",
          name: "Katherine Hay",
          userName: "@KeHay",
          dots: "Follow",
          dots3: "Following",
        },
        {
          image:
            "https://www.gspeakers.com/wp-content/uploads/2022/06/9a7f42_c87b976043d64b7a910ffa11d857fc5emv2-1.jpg",
          name: "Aleissia Laidacker",
          userName: "@Aleissia",
          dots: "Follow",
          dots3: "Following",
        },
        {
          image:
            "https://www.bravotv.com/sites/bravo/files/2023/01/bravo_topchef_s20_digital_bravotv_1920x1080_1.jpg",
          name: "Bravo Top Chef",
          userName: "@BravoTopChef",
          dots: "Follow",
          dots3: "Following",
        },
      ];
  const [shows, setShows] = useState(false);
 const handleShows=()=>{
  setShows(!shows)
 }
 const displayShows=shows? content: content.slice(0,3)
  return (
    <>
      <div className={Styles.mainbox}>
        <h3 style={{paddingLeft:"1rem",fontSize:"30px"}}>Who To Follow </h3>

        {displayShows.map((element) => (
          <div className={Styles.contentmain}>
            <div className={Styles.content}>
              <img
                className={Styles.image}
                src={element.image}
                width="60em"
                height="60em"
                
              />
            </div>
            <div className={Styles.para}>
              <p>{element.name}</p>
              <p>{element.userName}</p>
            </div>
            <div style={{ paddingTop: "1.5em" }}>
              <FollowButton />
            </div>
          </div>
        ))}
        <h4 className={Styles.ShowMore} onClick={handleShows}>{shows ? 'Show Less' : 'Show More'}</h4>
      </div>
    </>
  );
}
