import { BsBookFill } from "react-icons/bs";
import { FaStoreAlt } from "react-icons/fa";
import { GiSpellBook } from "react-icons/gi";
import { MdFavorite } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { BiDonateBlood } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <NavLink
          to="/logo"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <GiSpellBook />
        </NavLink>
      </div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            <BsBookFill />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorit"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            <MdFavorite />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/info1"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            <FiSend />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/info2"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            <BiDonateBlood />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/info3"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            <FaStoreAlt />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
