function Modal(props) {

  function anjamShod() {
    props.onAnjamShod();
  }
  function anjamNaShod() {
    props.onAnjamNaShod();
  }
  
  return (
    <div className="modal">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <button className="btn btn--alt" onClick={anjamShod}>
        انجام شد
      </button>
      <button className="btn" onClick={anjamNaShod}>
        انجام نشد
      </button>
    </div>
  );
}

export default Modal;
