import {  NavLink } from "react-router-dom"
import { HiOutlineHome } from 'react-icons/hi';
import { RiUserAddLine } from 'react-icons/ri';
import { BsCardList } from 'react-icons/bs';


const Header = () => {
    return (
        <header>
            <NavLink to="" className={(navData)=>navData.isActive ?"activeClass":"link"}> <HiOutlineHome className="icon" /> Home</NavLink>
            <NavLink to="List" className={(navData)=>navData.isActive ?"activeClass":"link"}><BsCardList className="icon"/> List</NavLink>
            <NavLink to="Add"className={(navData)=>navData.isActive ?"activeClass":"link"}><RiUserAddLine className="icon"/> Add</NavLink>
            
        </header>
    )
}

export default Header
