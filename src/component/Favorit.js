import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { BsArrowRight, BsShare } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import {
  AiOutlineCopy,
  AiOutlinePlayCircle,
  AiOutlinePauseCircle,
} from "react-icons/ai";
import { removeFavorit } from "../redux/action";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Favorit = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [copie, setCopie] = useState(-1);
  const favorit = useSelector((selector) => selector?.favorit.favorit || []);
  const [urlAudio, setUrlAudio] = useState("");
  const [indexAudio, setIndexAudio] = useState(null);
  const audio = useRef([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (copie !== -1) {
      setTimeout(() => setCopie(-1), 3000);
    }
  }, [copie]);

  useEffect(() => {
    audio.current = audio.current.slice(0, favorit.length);
  }, [favorit]);

  useEffect(() => {
    if (audio.current[indexAudio]) {
      if (isPlay) {
        audio.current[indexAudio].play();
      }
      if (!isPlay) {
        audio.current[indexAudio].pause();
        audio.current[indexAudio].currentTime = 0;
      }
    }
  }, [isPlay, urlAudio, indexAudio]);

  const handleAudio = (url, idx) => {
    setUrlAudio(url);
    setIndexAudio(idx);
    if (!isPlay) {
      setIsPlay(true);
    } else {
      setIsPlay(false);
    }
  };

  return (
    <ul className="favorit">
      {favorit.map((v, index) => (
        <li key={index}>
          <div className="ayat">
            <div className="no">{v?.number?.inSurah}</div>
            <div className="bacaan">{v.text.arab}</div>
          </div>
          <h2>
            INDONESIA-SAHIH INTERNATIONAL{" "}
            <span>
              | SEE TAFSIR <BsArrowRight className="icon" />
            </span>
          </h2>
          <p>{v.translation.id}</p>
          <div className="line"></div>
          <div className="icons">
            <MdFavorite
              className="love"
              onClick={() => dispatch(removeFavorit(v.id))}
            />
            <BsShare />
            <div className="audio">
              <audio
                ref={(el) => (audio.current[index] = el)}
                src={urlAudio}
                onEnded={() => setIsPlay(!isPlay)}
              ></audio>
              {isPlay && indexAudio === index ? (
                <AiOutlinePauseCircle
                  onClick={() => handleAudio(v.audio.primary)}
                />
              ) : (
                <AiOutlinePlayCircle
                  onClick={() => handleAudio(v.audio.primary, index)}
                />
              )}
            </div>
            <div className="copy">
              <CopyToClipboard
                text={v.text.arab}
                onCopy={() => setCopie(index)}
              >
                <span>
                  <AiOutlineCopy />
                </span>
              </CopyToClipboard>
              {copie === index ? <div className="popup">Copied</div> : null}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Favorit;
