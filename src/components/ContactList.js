import AddContact from "./AddContact"
import "./contactList.css"
import Header from "./Header"
import ListContact from "./ListContact"
const ContactList = () => {
    return (
        <div className="whiteContainer">
            <div  className="purpleContainer">
                    <Header/>
                    <AddContact/>
                    <ListContact/>
            </div>
        </div>
    )
}

export default ContactList
