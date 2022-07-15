import Modal from "./Modal";
import Backdrop from "./Backdrop";
import React, { useState } from "react";

function TodoCard(props) {

  const [anjamState, updateStatColor] = useState(props.anjam);
  const [stateName, updateStat] = useState(props.state);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function tozihat() {
    setIsModalOpen(true);
  }
  function close() {
    setIsModalOpen(false);
  }
  function closeAnjamShod() {
    setIsModalOpen(false);
    updateStatColor(true);
    updateStat(true);
  }
  function closeAnjamNaShod() {
    setIsModalOpen(false);
    updateStatColor(false);
    updateStat(false);
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <h3 style={anjamState ? { color: "green" } : { color: "red" }}>{stateName ? "انجام شد" : "انجام نشد"}</h3>
      <div className="actions">
        <button className="btn" onClick={tozihat}>
          توضیحات بیشتر
        </button>
      </div>
      {isModalOpen && (<Modal onAnjamShod={closeAnjamShod} onAnjamNaShod={closeAnjamNaShod} title={props.title} text={props.text}></Modal>)}
      {isModalOpen && <Backdrop onClose={close} />}
    </div>
  );
}

export default TodoCard;
