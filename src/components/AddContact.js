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
            <input type="submit" value="Add" />
          </form>
        </section>
        <section className="imageContainer">
        <img src={first}  width="150" height="160" className="image"/>
        </section>
      </div>
    </div>
  );
};

export default AddContact;
