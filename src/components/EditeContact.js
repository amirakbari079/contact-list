import { Link } from "react-router-dom";

const EditeContact = ({contact,setEditeContacts,onEdite,submitEditeForm}) => {
console.log(contact)

  const changeHandler = (e) => {
    setEditeContacts({ ...contact, [e.target.name]: e.target.value });
  };
  

    return (
        <div>
        <h3>Edite Contact</h3>
        <div className="editeForm">
        
            <form onSubmit={submitEditeForm}>
              <p className="inputTitle">Name</p>
              <input
                type="text"
                name="name"
                placeholder={contact[0].name}
                onChange={changeHandler}
              />
  
              <p className="inputTitle">Phone</p>
              <input
                type="text"
                name="phone"
                placeholder={contact[0].phone}
                onChange={changeHandler}
              />
  
              <div className="addBtnContainer editeBtnForm">
                <Link to={"/"}>
                <button className="editeBtn" onClick={()=>submitEditeForm(contact[0].id)}>Edite</button>
                </Link>
                <Link to={"/"}>
                <button className="removeBtn">Cancel</button>
                </Link>
              </div>
            </form>
     
        </div>
      </div>
    )
}

export default EditeContact
