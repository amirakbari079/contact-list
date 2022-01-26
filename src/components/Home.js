import AddContact from "./AddContact";
import ListContact from "./ListContact";

const Home = ({ addContactHnadler, contacts, onDelete,onEdite}) => {
  return (
    <div>
      <AddContact addContactHnadler={addContactHnadler} />
      <ListContact contacts={contacts} onDelete={onDelete} onEdite={onEdite} />
    </div>
  );
};

export default Home;
