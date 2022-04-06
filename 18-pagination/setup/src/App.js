import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  const handlePrevNext = ({ target }) => {
    let newPage;
    if (target.classList.contains("next-btn")) {
      newPage = page < data.length - 1 ? page + 1 : page;
    } else if (target.classList.contains("prev-btn")) {
      newPage = page > 0 ? page - 1 : page;
    }
    console.log(newPage);
    setPage(newPage);
  };

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page, data]);

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={handlePrevNext}>
              prev
            </button>
            {data.map((_, index) => {
              return (
                <button
                  key={index}
                  className={`${
                    page === index ? "page-btn active-btn" : "page-btn"
                  }`}
                  onClick={() => setPage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="next-btn" onClick={handlePrevNext}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
