import React from "react";
import { JournalEntries } from "./JournalEntries";

export const Sidebar = () => {
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar mt-5">
        <h3>
          <i className="far fa-moon"></i>
          <span> Daniel</span>
        </h3>
        <button className="btn">Logout</button>
      </div>
      <div className="journal__new-entry">
        <i className="far fa-5x fa-calendar"></i>
        <p className="mt-1">New entry</p>
      </div>
      <JournalEntries />
    </aside>
  );
};
