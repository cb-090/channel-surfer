import "./styles.css";
import Title from "./Title";
import SearchBar from "./SearchBar";
import Info from "./Info";
import { useState, useEffect } from "react";

export default function App() {
  const [showName, setShowName] = useState("");
  const [showIndex, setShowIndex] = useState(0);
  const [showData, setShowData] = useState({});

  function clearFeed() {
    setShowName("");
    setShowIndex(0);
    setShowData({});
  }

  useEffect(() => {
    const title = encodeURIComponent(showName?.toLowerCase());
    const url = `https://api.tvmaze.com/search/shows?q=${title}`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setShowData(r))
      .catch((e) => setShowData(`${e}`));
  }, [showName]);

  useEffect(() => {
    if (showIndex > 0) {
      const url = `https://api.tvmaze.com/shows/${showIndex}`;
      fetch(url)
        .then((r) => r.json())
        .then((r) => setShowData(r))
        .catch((e) => setShowData(`${e}`));
    }
  }, [showIndex]);

  return (
    <div className="App">
      <Title action={setShowIndex} alert={clearFeed} />
      <SearchBar action={setShowName} />
      <Info name={showName} data={showData} num={showIndex} />
    </div>
  );
}
