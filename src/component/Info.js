import { useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { VscBook } from "react-icons/vsc";
import { BiHeadphone } from "react-icons/bi";

const Info = ({ displayInfo, handleHiddenInfo }) => {
  const lastRead = useSelector((selector) => selector?.info.lastRead);
  const lastListening = useSelector((selector) => selector?.info.lastListening);

  return (
    <div className={displayInfo ? "Info active" : "Info"}>
      <FaTimes className="close" onClick={handleHiddenInfo} />
      <div className="person">
        <div className="col-1">
          Salam, <br />
          <span>Yudha</span>
        </div>
        <div className="image">
          <img src="image/person.jpg" />
        </div>
      </div>
      <ul>
        <li>
          <div className="box">
            <p>LAST READ</p>
            <h2>
              {lastRead.surah} <br />
              <span>Ayat no: {lastRead.ayat}</span>
            </h2>
          </div>
          <VscBook className="icon" />
        </li>
        <li>
          <div className="box">
            <p>LAST LISTENED</p>
            <h2>
              {lastListening.surah} <br />
              <span>Ayat no: {lastListening.ayat}</span>
            </h2>
          </div>
          <BiHeadphone className="icon" />
        </li>
      </ul>
    </div>
  );
};

export default Info;
