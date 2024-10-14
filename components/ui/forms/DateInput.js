import { useState, useRef } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  
  const datePickerRef = useRef(null);

  const handleIconClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };
  

  return (
    <div className="w-full relative">
    <label class="InputBox_label__width__l1qzP left-4 top-3 bg-white absolute text-sm transition-all duration-300 custom-transition text-gray-700 pointer-events-none" for="contactNumber">Start Date</label>
    {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="w-full h-11 px-4 border rounded outline-none transition-all duration-300 custom-transition  border-gray-900 border-opacity-20 focus:border-green-900" /> */}
    <DatePicker placeholderText="Start Date" ref={datePickerRef} onChange={(date) => setStartDate(date)} className="w-full h-11 px-4 border rounded outline-none transition-all duration-300 custom-transition  border-gray-900 border-opacity-20 focus:border-green-900" />
    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
        onClick={handleIconClick}>
      <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.8125 3.5H20.6875V1.4375C20.6875 1.25516 20.6151 1.0803 20.4861 0.951364C20.3572 0.822433 20.1823 0.75 20 0.75C19.8177 0.75 19.6428 0.822433 19.5139 0.951364C19.3849 1.0803 19.3125 1.25516 19.3125 1.4375V3.5H9.6875V1.4375C9.6875 1.25516 9.61507 1.0803 9.48614 0.951364C9.35721 0.822433 9.18234 0.75 9 0.75C8.81766 0.75 8.6428 0.822433 8.51386 0.951364C8.38493 1.0803 8.3125 1.25516 8.3125 1.4375V3.5H4.1875C3.27615 3.50109 2.40245 3.86361 1.75803 4.50803C1.11361 5.15245 0.751092 6.02615 0.75 6.9375V24.8125C0.751092 25.7238 1.11361 26.5976 1.75803 27.242C2.40245 27.8864 3.27615 28.2489 4.1875 28.25H24.8125C25.724 28.2493 26.5979 27.8869 27.2424 27.2424C27.8869 26.5979 28.2493 25.724 28.25 24.8125V6.9375C28.2493 6.02604 27.8869 5.15212 27.2424 4.50762C26.5979 3.86313 25.724 3.50073 24.8125 3.5ZM26.875 24.8125C26.875 25.3595 26.6577 25.8841 26.2709 26.2709C25.8841 26.6577 25.3595 26.875 24.8125 26.875H4.1875C3.64049 26.875 3.11589 26.6577 2.72909 26.2709C2.3423 25.8841 2.125 25.3595 2.125 24.8125V13.125H26.875V24.8125ZM26.875 11.75H2.125V6.9375C2.125 5.799 3.04625 4.875 4.1875 4.875H8.3125V6.9375C8.3125 7.11984 8.38493 7.2947 8.51386 7.42364C8.6428 7.55257 8.81766 7.625 9 7.625C9.18234 7.625 9.35721 7.55257 9.48614 7.42364C9.61507 7.2947 9.6875 7.11984 9.6875 6.9375V4.875H19.3125V6.9375C19.3125 7.11984 19.3849 7.2947 19.5139 7.42364C19.6428 7.55257 19.8177 7.625 20 7.625C20.1823 7.625 20.3572 7.55257 20.4861 7.42364C20.6151 7.2947 20.6875 7.11984 20.6875 6.9375V4.875H24.8125C25.3595 4.875 25.8841 5.0923 26.2709 5.47909C26.6577 5.86589 26.875 6.39049 26.875 6.9375V11.75Z" fill="#1F1F2D"/>
      </svg>
    </span>
    </div>
  );
}

export default DateInput