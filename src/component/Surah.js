import { useState, lazy, Suspense } from "react";
import { useQuery } from "react-query";
import { BsInfoLg } from "react-icons/bs";
import MainQuran from "./MainQuran";
import Ayat from "./Ayat";
import axios from "axios";

const Info = lazy(() => import("./Info"));

const fetchSurahById = async ({ queryKey }) => {
  const [key, nomor] = queryKey;
  const res = await axios.get(`https://api.quran.gading.dev/surah/${nomor}`);
  return res;
};

const Surah = () => {
  const [nomor, setNomor] = useState(null);
  const [displayInfo, setDisplayInfo] = useState(false);
  const { data } = useQuery(["surah", nomor], fetchSurahById, {
    enabled: !!nomor,
    keepPreviousData: true,
  });
  const [isPlay, setIsPlay] = useState(false);

  const handleDisplayInfo = () => {
    setDisplayInfo(true);
  };

  const handleHiddenInfo = () => {
    setDisplayInfo(false);
  };

  const getNomor = (nomor) => {
    setNomor(nomor);
  };

  const setPlay = () => {
    if (isPlay) {
      setIsPlay(!isPlay);
    }
  };

  return (
    <div className="surah-container">
      {displayInfo && <div className="bg-info"></div>}
      <MainQuran getNomor={getNomor} nomor={nomor} setPlay={setPlay} />
      <Ayat nomor={data?.data?.data} isPlay={isPlay} setIsPlay={setIsPlay} />
      <Suspense fallback={<div></div>}>
        <Info displayInfo={displayInfo} handleHiddenInfo={handleHiddenInfo} />
      </Suspense>
      {displayInfo ? null : (
        <BsInfoLg className="display-icons" onClick={handleDisplayInfo} />
      )}
    </div>
  );
};

export default Surah;
