import { useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import Header from "./components/Header";
import ListContact from "./components/ListContact";
import "./components/contactList.css";
import { useEffect } from "react/cjs/react.development";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import EditeContact from "./components/EditeContact";

function App() {
  const [contacts, setContacts] = useState([]);
  const [editeContacts, setEditeContacts] = useState({});
  const [searchTerm, setSearchTerm] = useState([]);
  const [allContacts, setAllContacts] = useState(null);
  
  const addContactHnadler = async (contact, contactImage) => {
    console.log("addContactHandler");
    try {
      setContacts([
        ...contacts,
        { id: Math.ceil(Math.random() * 100), ...contact, contactImage },
      ]);
      setAllContacts(contacts);
      console.log("contacts");
      console.log(contacts);
      // await addOneContact(contacts)
    } catch (error) {}
  };

  const deleteContactHandler = (id) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  };
  const editeContactHandler = (id) => {
    setEditeContacts(contacts.filter((q) => q.id === id));
    console.log("here is edited item : " + editeContacts);
  };

  // useEffect(() => {
  //   const savedContacts = JSON.stringify(localStorage.getItem("contacts"));
  //   console.log(savedContacts)
  //   if(savedContacts) setContacts(savedContacts)
  // }, []);

  useEffect(() => {
    if (contacts) localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const submitEditeForm = (id) => {
    console.log("az maz maz");
    console.log(editeContacts.name);
    const item = contacts.filter((q) => q.id === id);
    item[0].name = editeContacts.name;
    item[0].phone = editeContacts.phone;
  };

  const changeHnadler=(e)=>{
    setSearchTerm(e.target.value)
    const search=e.target.value;
    if(search!==null){
      const filteredContacts=allContacts.filter(c=>{
        return Object.values(c).join(" ").toLowerCase().includes(search.toLowerCase())
      })
      console.log("filteredContacts")
      console.log(filteredContacts)
      setContacts(filteredContacts)
    }else{
      setContacts(allContacts)
    }

  }
  return (
    <div className="App">
      <div className="whiteContainer">
        <div className="purpleContainer">
          <Header />
          {/* <Route path="/addContact"  element={<App.js/>}/>
              <Route path="/listOfContact"  element={<App.js/>}/> */}
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  addContactHnadler={addContactHnadler}
                  contacts={contacts}
                  onDelete={deleteContactHandler}
                  onEdite={editeContactHandler}
                  changeHnadler={changeHnadler}
                />
              }
            />
            <Route
              path="/add"
              element={<AddContact addContactHnadler={addContactHnadler} />}
            />
            <Route
              path="/list"
              element={
                <ListContact
                  contacts={contacts}
                  onDelete={deleteContactHandler}
                  editeContactHandler={editeContactHandler}
                />
              }
              onEdite={editeContactHandler}
            />
            <Route
              path="/edite/:id"
              element={
                <EditeContact
                  submitEditeForm={submitEditeForm}
                  contact={editeContacts}
                  setEditeContacts={setEditeContacts}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
