import { Link } from "react-router-dom";


const ListContact = ({ contacts, onDelete,onEdite,changeHnadler }) => {




  return (
    <div className="listContainer">
      <div className="list">
        <h3>Contact List</h3>
        <input type="search" placeholder="search..." onChange={changeHnadler}/>
      </div>
     

      {contacts.map((contact) => {
        const { name, phone, id } = contact;
        return (
          <div className="contactList"  key={id} >
            <img
              src={contact.contactImage}
              width={50}
              height={50}
              className="contactImageList"
              alt="img"
            />
            <div className="list">
              <p className="listText">{name} </p>
              <p className="listText">{phone}</p>
              <div>
              <Link to={`/edite/${id}`}>
              <button className="editeBtn" onClick={()=>onEdite(id)}>
                Edite
              </button>
              </Link>
              <button className="removeBtn" onClick={() => onDelete(id)}>
                Delete
              </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListContact;
