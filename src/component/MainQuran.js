import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useSelector } from "react-redux";

const fetchSurah = async () => {
  const res = await axios.get("https://api.quran.gading.dev/surah");
  return res;
};

const MainQuran = ({ getNomor, setPlay }) => {
  const { data } = useQuery("surah", fetchSurah);
  const [nomor, setNomor] = useState(1);
  const [filterSurah, setFilterSurah] = useState([]);
  const text = useSelector((selector) => selector.search?.search) || "";

  useEffect(() => {
    const filterData = () => {
      const filterValue = data?.data?.data.filter((s) =>
        s.name?.transliteration?.id.toLowerCase()?.includes(text.toLowerCase())
      );
      setFilterSurah(filterValue);
    };

    filterData();
  }, [text, data?.data?.data]);

  const handleNomor = (no) => {
    getNomor(no);
    setNomor(no);
    setPlay();
  };

  return (
    <div className="main-quran">
      <ul>
        {filterSurah?.map((s, index) => (
          <li
            key={index}
            onClick={() => handleNomor(s.number)}
            className={s.number === nomor ? "item border" : "item"}
          >
            <div className="ayat">{s.number}</div>
            <div className="surah">
              <div className="name">{s.name?.transliteration?.id}</div>
              <div className="info">{s.name?.translation?.id}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainQuran;
