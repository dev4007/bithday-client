import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import "primereact/resources/themes/saga-blue/theme.css"; // PrimeReact theme CSS
import "primereact/resources/primereact.min.css"; // PrimeReact core CSS
import "primeicons/primeicons.css"; // PrimeIcons CSS

export default function InlineDemo() {
  const [date, setDate] = useState(null);

  return (
    <div className="">
      <Calendar
        value={date}
        onChange={(e) => setDate(e.value)}
        inline
        // showWeek
      />
    </div>
  );
}
