import React from 'react';
import { useSelector } from 'react-redux';
import { USERS_FEATURE_KEY } from '../redux/users/users.reducer';

//styling
//import './Count.css';

const Count = props => {
  // let dispatch = useDispatch();
  let userInfo = useSelector((state) => {
     return state[USERS_FEATURE_KEY].user;
  });


  let ayatAlKursi = userInfo.filter((prayer) => {
      return prayer.prayerType === "Ayat Al Kursi";
  });

  let surahalYaseen = userInfo.filter((prayer) => {
      return prayer.prayerType === "Surah Al Yaseen";
  });

  let surahAlikhlas = userInfo.filter((prayer) => {
      return prayer.prayerType === "Surah Al Ikhlas";
  });

  let totalPrayer = ayatAlKursi.length + surahAlikhlas.length + surahalYaseen.length;
  
  // label of counter
  // number to increment to
  // duration of count in seconds
  // const {name, number, duration } = props.data

  // number displayed by component
  // const [count, setCount] = useState("0");

  // useEffect(() => {
  //   let start = 0;
    // first three numbers from props
    // const end = parseInt(number.substring(0,3))
    // if zero, return
    // if (start === end) return;

    // find duration per increment
    // let totalMilSecDur = parseInt(duration);
    // let incrementTime = (totalMilSecDur / end) * 1000;

    // timer increments start counter 
    // then updates count
    // ends if start reaches end
    // let timer = setInterval(() => {
    //   start += 1;
    //   setCount(String(start) + number.substring(3))
    //   if (start === end) clearInterval(timer)       
    // }, incrementTime);

    // dependency array
  // }, [number, duration]);

  return (
   <React.Fragment>
      <div className="Count">
      <p>
        {/* <i>{name} : {count}</i> */}
        <i> يس Surah Al Yaseen : {surahalYaseen.length} </i>
      </p>
   
    </div>
    <div className="Count">
      <h6>
        {/* <i>{name} : {count}</i> */}
        <i>آية الكرسي Ayat Al Kursi : {ayatAlKursi.length}</i>
      </h6>
   
    </div>
    <div className="Count">
      <h6>
        {/* <i>{name} : {count}</i> */}
        <i>الإخلاص Surah Al Ikhlas : {surahAlikhlas.length}</i>
      </h6>
   
    </div>
    <div className="Count">
      <h6>
        {/* <i>{name} : {count}</i> */}
        <i>Total Prayers : {totalPrayer}</i>
      </h6>
   
    </div>
   </React.Fragment>
  );
}

export default Count;