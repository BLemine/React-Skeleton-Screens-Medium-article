import './App.css';
import { useEffect, useState, Fragment } from "react";
import Skeleton from './skeleton'
function App() {
  const [poetry, setPoetry] = useState([]);
  const [poet, setPoet] = useState("");

  const fetchPoetry = () => {
    fetch("https://poetrydb.org/author")
      .then(res => res.json())
      .then(resp => {
        const chosenPoet = resp.authors[Math.floor(resp.authors.length * Math.random())]
        setPoet(chosenPoet)
        fetch("https://poetrydb.org/author/" + chosenPoet)
          .then(res => res.json())
          .then(resp => setPoetry(resp))
      }
      )
  }

  useEffect(() => {
    setTimeout(() => fetchPoetry(), 5000);
    //fetchPoetry();
  }, [])
  return (
    <div>
      <div className="poetryContainer">
        <h2 style={{ textAlign: "center" }}>Quick Random Poetry</h2>
        {poetry.length !== 0 ?
          <>
            {poetry.map((poem, index) => {
              if (index <= 10) {
                return <div key={index} style={{ marginBottom: 30 }}>
                  <span style={{ display: "block", marginBottom: 10 }}><span style={{ fontWeight: "bold" }}>Title : </span>{poem.title}</span>
                  <span style={{ display: "block" }}><span style={{ fontWeight: "bold" }}>Text : </span>{poem.lines.toString().substring(0, 500)}</span>
                </div>
              } else return null;
            })}
            <div style={{ display: "inline-block" }}>
              <div style={{ textAlign: "center", position: "absolute", top: 20, right: 20 }}>
                <img alt="best_author" style={{ borderRadius: 50, }} src="https://www.lexiconn.in/wp-content/uploads/2019/04/FI-Genres-of-peotry..jpg" width={150} height={150} />
                <h4>{poet}</h4>
              </div>
            </div>
          </>
          :
          <>
            {[1, 2, 3, 4].map(index => {
              return (
                <Fragment key={index}>
                  <Skeleton type="title" />
                  <Skeleton type="text" />
                </Fragment>
              )
            })}
            <div className="poetSkeletonContainer">
              <Skeleton type="avatar" />
              <Skeleton type="title" />
            </div>
          </>
        }
      </div>
    </div>
  );
}

export default App;
