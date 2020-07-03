import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";

function DateInput({ value, onClick }) {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {value}
    </Button>
  );
}

export default DateInput;
