import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-img"
        style={{
          backgroundImage:
            'url("https://www.amvos-digital.com/wp-content/uploads/2020/04/alibaba-16-1080x675.jpg")',
          backgroundSize: "cover",
        }}
      ></div>
      <div className="journal__entry-body">
        <div className="journal__entry-title">Entry title</div>
        <div className="journal__entry-content">
          Et et fugiat ex laborum mollit non ad id.
        </div>
      </div>
      <div className="journal__entry-date-box">
        Date
        <span>28</span>
      </div>
    </div>
  );
};
