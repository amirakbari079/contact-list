import IMAGES from "../img/IMAGES";
import { useEffect, useState } from "react";
import addOneContact from "../services/addContactService";



export const imageArray={
  a:IMAGES.image1,
  b:IMAGES.image2,
  c:IMAGES.image3,
  d:IMAGES.image4,
  e:IMAGES.image5
}

// console.log(randomNumber())
const AddContact = ({ addContactHnadler }) => {

  const [rndNumber,setRndNumber]=useState(1)
  const randomNumber =()=>{
    setRndNumber( Math.ceil(Math.random() * (1,4)));
    
  }

  
  const contactImage=Object.values(imageArray)[rndNumber]
  const [contact, setContact] = useState({ name: "", phone: "",contactImage:"" });
  
  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  
  const submitForm = (e) => {
    if (!contact.name || !contact.phone) {
      alert("All Fields Are Required");
      return;
    }
    e.preventDefault();
    randomNumber();
    addContactHnadler(contact,contactImage);
    setContact({ name: "", phone: "" });
  };
 

  return (
    <div>
      <h3>Add Contact</h3>
      <div className="addContactForm">
        <section>
          <form onSubmit={submitForm}>
            <p className="inputTitle">Name</p>
            <input
              type="text"
              name="name"
              value={contact.name}
              onChange={changeHandler}
            />

            <p className="inputTitle">Phone</p>
            <input
              type="text"
              name="phone"
              value={contact.phone}
              onChange={changeHandler}
            />

            <div className="addBtnContainer">
              <button className="addBtn">Add</button>
            </div>
          </form>
        </section>
        <section className="imageContainer">
          <img src={contactImage} width="180" height="190" className="image" />
        </section>
      </div>
    </div>
  );
};

export default AddContact;
