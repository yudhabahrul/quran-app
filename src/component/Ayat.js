import { useState, useEffect, useRef } from "react";
import { BsArrowRight, BsShare } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import {
  AiOutlinePlayCircle,
  AiOutlinePauseCircle,
  AiOutlineCopy,
} from "react-icons/ai";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useDispatch } from "react-redux";
import { addFavorit, lastRead, lastListening } from "../redux/action";

const Ayat = ({ nomor, isPlay, setIsPlay }) => {
  const [surah, setSurah] = useState([]);
  const [urlAudio, setUrlAudio] = useState("");
  const [copie, setCopie] = useState(-1);
  const [indexAudio, setIndexAudio] = useState(null);
  const dispatch = useDispatch();
  const audio = useRef([]);

  useEffect(() => {
    const getAyat = async () => {
      try {
        const res = await axios.get("https://api.quran.gading.dev/surah/1");
        setSurah(res.data.data);
      } catch (e) {}
    };
    getAyat();
  }, []);

  useEffect(() => {
    if (nomor) {
      audio.current = audio.current.slice(0, nomor?.verses?.length);
    } else {
      audio.current = audio.current.slice(0, surah?.verses?.length);
    }
  }, [nomor]);

  useEffect(() => {
    if (copie !== -1) {
      setTimeout(() => setCopie(-1), 2800);
    }
  }, [copie]);

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

  const handleFavorit = (v, surah, ayat) => {
    dispatch(addFavorit(v));
    dispatch(lastRead({ surah, ayat }));
  };

  const handleAudio = (url, idx, surah, ayat) => {
    setUrlAudio(url);
    setIndexAudio(idx);
    dispatch(lastListening({ surah, ayat }));
    if (!isPlay) {
      setIsPlay(true);
    } else {
      setIsPlay(false);
    }
  };

  return (
    <div className="ayat-container">
      <ul>
        {nomor?.verses
          ? nomor.verses?.map((v, index) => (
              <li key={index}>
                <div className="ayat">
                  <div className="no">{v.number.inSurah}</div>
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
                  <MdFavoriteBorder
                    onClick={() =>
                      handleFavorit(
                        { ...v, id: v.audio.secondary[0] },
                        nomor.name.transliteration.id,
                        v.number.inSurah
                      )
                    }
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
                        onClick={() =>
                          handleAudio(
                            v.audio.primary,
                            index,
                            nomor.name.transliteration.id,
                            v.number.inSurah
                          )
                        }
                      />
                    ) : (
                      <AiOutlinePlayCircle
                        onClick={() =>
                          handleAudio(
                            v.audio.primary,
                            index,
                            nomor.name.transliteration.id,
                            v.number.inSurah
                          )
                        }
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
                    {copie === index ? (
                      <div className="popup">Copied</div>
                    ) : null}
                  </div>
                </div>
              </li>
            ))
          : surah.verses?.map((v, index) => (
              <li key={index}>
                <div className="ayat">
                  <div className="no">{v.number.inSurah}</div>
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
                  <MdFavoriteBorder
                    onClick={() =>
                      handleFavorit(
                        { ...v, id: v.audio.secondary[0] },
                        surah.name.transliteration.id,
                        v.number.inSurah
                      )
                    }
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
                        onClick={() =>
                          handleAudio(
                            v.audio.primary,
                            index,
                            surah.name.transliteration.id,
                            v.number.inSurah
                          )
                        }
                      />
                    ) : (
                      <AiOutlinePlayCircle
                        onClick={() =>
                          handleAudio(
                            v.audio.primary,
                            index,
                            surah.name.transliteration.id,
                            v.number.inSurah
                          )
                        }
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
                    {copie === index ? (
                      <div className="popup">Copied</div>
                    ) : null}
                  </div>
                </div>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Ayat;
