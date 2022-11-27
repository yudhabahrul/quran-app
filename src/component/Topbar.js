import { useState, useRef } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BsArrowLeft } from "react-icons/bs";
import { searchByValue } from "../redux/action";
import { useDispatch } from "react-redux";

const Topbar = () => {
  const [displaySearch, setDisplaySearch] = useState(false);
  const dispatch = useDispatch();
  const ref = useRef();

  const handleChange = (e) => {
    dispatch(searchByValue(e.target.value));
  };

  const handleDisplaySearch = () => {
    ref.current.focus();
    setDisplaySearch(true);
  };

  const resize = () => {
    if (window.screen.width > 600) {
      setDisplaySearch(false);
    }
  };

  window.addEventListener("resize", resize);

  return (
    <div className="topbar">
      <div className={displaySearch ? "col-1 hidden" : "col-1"}>
        <h2>Quran</h2>
      </div>
      <BsArrowLeft
        className={displaySearch ? "back active" : "back"}
        onClick={() => setDisplaySearch(false)}
      />
      <div className="col-2">
        <div className={displaySearch ? "input active" : "input"}>
          <FiSearch className="icon-1" />
          <input
            ref={ref}
            type="text"
            placeholder="Search"
            onChange={handleChange}
          />
        </div>
        <div
          className={displaySearch ? "search-hidden hidden" : "search-hidden"}
        >
          <FiSearch className="search" onClick={handleDisplaySearch} />
          <AiOutlineBell className="icon-2" />
          <img src="image/person.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
