import { useState, useEffect } from "react";

export default function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Formato DD/MM HH:MM AM/PM
  const dateString = now.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
  });

  const timeString = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="fecha">
      <h4>{`${dateString} -  ${timeString}`}</h4>
    </div>
  );
}
