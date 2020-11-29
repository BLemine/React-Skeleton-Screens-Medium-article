import './App.css';
import { useEffect, useState, Fragment } from "react";
import Skeleton from './skeleton'
function App() {
  const [poetry, setPoetry] = useState([]);

  const fetchPoetry = async () => {
    fetch("https://www.poemist.com/api/v1/randompoems")
      .then(res => res.json())
      .then(resp => setPoetry(resp))
  }
  useEffect(() => {
    fetchPoetry();
  }, [])
  return (
    <div className="container" >
      <div className="poetryContainer">
        <h2 style={{ textAlign: "center" }}>Quick Random Poetry</h2>
        {poetry.length !== 0 ? poetry.map((post, index) => {
          return <div key={index}>
            <p><span style={{ fontWeight: "bold" }}>Title : </span>{post.title}</p>
            <p><span style={{ fontWeight: "bold" }}>Poet : </span>{post.poet.name}</p>
            <p><span style={{ fontWeight: "bold" }}>Text : </span>{post.content}</p>
          </div>
        })
          :
          <>
            {[1, 2, 3, 4].map(index => {
              return (
                <Fragment key={index}>
                  <Skeleton type="title" />
                  <Skeleton type="title" />
                  <Skeleton type="text" />
                </Fragment>
              )
            })}
          </>
        }
      </div>
    </div>
  );
}

export default App;
