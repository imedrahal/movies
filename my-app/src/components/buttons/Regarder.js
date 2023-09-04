import React from "react";
import Button from "react-bootstrap/Button";
import '../../syles/buttons.css'
function AddButton({ onClick }) {
  return (
    <div  className="btn-responsive">

    <Button variant="light" onClick={onClick}>
      Regarder
    </Button>
    </div>
  );
}

export default AddButton;
