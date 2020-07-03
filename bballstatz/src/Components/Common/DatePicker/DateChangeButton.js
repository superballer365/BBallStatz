import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import styles from "./DateChangeButton.module.css";

function DateChangeButton(props) {
  const { direction, onClick } = props;

  return (
    <div className={styles.buttonContainer}>
      <Button
        className={styles.dateChangeButton}
        variant="contained"
        color="primary"
        onClick={onClick}
      >
        {direction === "forward" ? `>` : `<`}
      </Button>
    </div>
  );
}

export default DateChangeButton;
