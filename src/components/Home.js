import AddContact from "./AddContact";
import ListContact from "./ListContact";

const Home = ({ addContactHnadler, contacts, onDelete,onEdite,changeHnadler}) => {
  return (
    <div>
      <AddContact addContactHnadler={addContactHnadler} />
      <ListContact contacts={contacts} onDelete={onDelete} onEdite={onEdite} changeHnadler={changeHnadler} />
    </div>
  );
};

export default Home;
