import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NotesScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <form className="notes__form">
          <input
            type="text"
            name="title"
            placeholder="Some awesome title"
            className="notes__title-input"
          />
          <textarea
            name="text"
            placeholder="What happened today"
            className="notes__textarea"
          ></textarea>
          <div className="notes__image">
            <img
              src="https://www.w3schools.com/css/img_5terre_wide.jpg"
              alt="imagen"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
