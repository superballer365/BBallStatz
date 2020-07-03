import React from "react";
import ReactDatePicker from "react-datepicker";
import DateChangeButton from "./DateChangeButton";
import DateInput from "./DateInput";
import styles from "./DatePicker.module.css";

export default function DatePicker({
  onBackwardClick,
  onForwardClick,
  onDateChange,
  date
}) {
  return (
    <div className={styles.container}>
      <DateChangeButton direction="backwards" onClick={onBackwardClick} />
      <ReactDatePicker
        dateFormat="yyyy/MM/dd"
        selected={date}
        onChange={onDateChange}
        customInput={<DateInput />}
      />
      <DateChangeButton direction="forward" onClick={onForwardClick} />
    </div>
  );
}
