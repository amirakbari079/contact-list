import first from"../img/1.png"
const AddContact = () => {
  return (
    <div>
      <h3>Add Contact</h3>
      <div className="addContactForm">
        <section>
          <form>
            <p className="inputTitle">Name</p>
            <input type="text" />
            <p className="inputTitle">Phone</p>
            <input type="text" />
            <div className="addBtnContainer">
            <button className="addBtn">Add</button>
            </div>
          </form>
        </section>
        <section className="imageContainer">
        <img src={first}  width="180" height="190" className="image"/>
        </section>
      </div>
    </div>
  );
};

export default AddContact;
