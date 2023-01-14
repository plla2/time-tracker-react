import Grid from "./Grid";
import React from "react";
import { useState } from "react";

export default function App() {
  const avatar = require("./images/emo.png");
  const [time, setTime] = useState("daily");

  function toggleTimeSpawn(e) {
    if (e.target.tagName.toLowerCase() === "li") {
      setTime(e.target.textContent.toLowerCase());
    }
  }

  const lis = [
    { id: 1, text: "Daily" },
    { id: 2, text: "Weekly" },
    { id: 3, text: "Monthly" },
  ];

  const [active, setActive] = useState(1);

  const list = lis.map((li) => {
    return (
      <li
        key={li.id}
        onClick={() => setActive(li.id)}
        className={active === li.id ? "active" : ""}
      >
        {li.text}
      </li>
    );
  });

  return (
    <main className="app">
      <aside className="aside">
        <div className="hero">
          <div className="avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="name">
            <p>Report For</p>
            <h1>SeungHyun Jeung</h1>
          </div>
        </div>

        <section className="timespan">
          <ul onClick={toggleTimeSpawn}>{list}</ul>
        </section>
      </aside>
      <Grid time={time}></Grid>
    </main>
  );
}
