import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {getAllData, registerUser} from "../redux/users/users.actions";
import Popup from './Popup';


let Assignment2 = () => {
    // const [platformValue, plaftormInputProps] = useRadioButtons("platform");
    let dispatch = useDispatch();

    let [user, setUser] = useState({
        name: 'Ahle Khair',
        email: '',
        count: 1000,
        prayerType: null,
        duaDescription: 'يرحمها الله'

    });

    // handleInput
    let handleInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };

    // counterChange
    let counterChange = () => {
        setUser({
            ...user,
            count: user.count > 0 ? user.count - 1 : null
        })
    };

    // submitUser
    let submitUser = (e) => {
        if(user.prayerType === "" || user.prayerType === undefined){
            alert('Please Select Atlest one Prayer Type  ---براہ کرم ایک تلاوت منتخب کریں');
          }
          else{      
        counterChange();
        console.log(user);
        dispatch(registerUser(user)); 
        alert(`Thank You ${user.name}`);
        Popup.openModal();
        dispatch(getAllData());
          }
    };

    useEffect(() =>{
        dispatch(getAllData());
    }, [dispatch]);

    // function useRadioButtons(name) {
    //     const [value, setState] = useState(null);

    //     const handleChange = e => {
    //         setState(e.target.value);
    //     };

    //     const inputProps = {
    //         name,
    //         type: "radio",
    //         onChange: handleChange
    //     };

    //     return [value, inputProps];
    // }

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row ">

                    <div className="col-md-9 ">
                        <div className="card">
                            <div className="card-header bg-success text-white">
                                <p className="h4">Special Prayer for maghfirat of my Mother(مسرت آسما)</p>
                                <p className="h6">میری والدہ کی مغفرت کے لئے خصوصی دعا اور تلاوت..مسرت آسما
                        </p>
                                <p className="h7">Target Date  : 9 June 2021 (9 جون )</p>
                            </div>

                            <div className="card-body bg-light">
                                <form method="post" onSubmit={submitUser}>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input required
                                            name='name'
                                            // value={user.name ? user.name : "Ahle khair"}
                                            value={user.name}
                                            onChange={handleInput}
                                            type="text" className='form-control' placeholder='Ahle khair' />
                                    </div>
                                    <label>Email</label>
                                    <div className="form-group">
                                        <input
                                           required
                                            name='email'
                                            value={user.email}
                                            onChange={handleInput}
                                            type="email" className='form-control' placeholder='Email for future challanges' />
                                    </div>
                                    {/* <p onChange={counterChange}  className="h5">Counter : {user.count}</p> */}


                                    <div className="form-group">
                                        <label>Praying (Tilawat)</label>
                                        <fieldset>
                                            <p>Surah Al Yaseen   يس
          <input 
                                                    value="Surah Al Yaseen"
                                            onChange={handleInput}
                                            type = "radio"
                                            name = "prayerType"
                                                    // checked={platformValue === "Yaseen"}
                                                    // {...plaftormInputProps}
                                                /></p>

                                            <br />
                                            <p > Ayat Al Kursi آية الكرسي
          <input 
                                                    value="Ayat Al Kursi"
                                            onChange={handleInput}
                                            type = "radio"
                                            name="prayerType"
                                                    // checked={platformValue === "alKursi"}
                                                    // {...plaftormInputProps}
                                                /></p>

                                            <br />
                                            <p>
                                                Surah Al Ikhlas   الإخلاص
          <input
                                                    value="Surah Al Ikhlas"
                                            onChange={handleInput}
                                            type = "radio"
                                            name="prayerType"
                                                    // checked={platformValue === "ikhlas"}
                                                    // {...plaftormInputProps}
                                                />

                                            </p>

                                        </fieldset>

                                        {/* <select required
                                              name='prayerType'
                                              value={user.prayerType}
                                              onChange={handleInput}
                                              className="form-control">
                                          <option>Select Prayer</option>
                                          <option value="MASHAALLAH">Masha Allah</option>
                                          <option value="ALHUMDULILLAH">ALhumdulillah</option>
                                          <option value="JAZAKALLAH">Jazak Allah</option>
                                      </select> */}
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea
                                            required
                                            name='duaDescription'
                                            value={user.duaDescription}
                                            onChange={handleInput}
                                            rows="4" className="form-control" placeholder="Dua اَلدُّعَاءُ‎" />
                                    </div>
                                    <div className='form-group'>
                                        <input type="submit" className='btn btn-sm btn-success' value="Submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Assignment2;