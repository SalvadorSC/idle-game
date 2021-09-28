import React, { useContext } from "react";
import CounterContext from "../../context/CounterContext";
import MiscContext from "../../context/MiscContext";
import "./Pomodoro.css";
export const Pomodoro = () => {
  const { upgrades } = useContext(CounterContext);
  const {
    pomodoroMessage,
    setPomodoroMessage,
    pomodoroClass,
    setPomodoroClass,
  } = useContext(MiscContext);

  const startPomodoro = () => {
    const countDownDate = new Date().getTime() + 20 * 60 * 1000;
    // Update the count down every 1 second
    const x = setInterval(function () {
      const now = new Date().getTime();
      // Find the distance between now an the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      /* const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ); */
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      setPomodoroMessage(`${minutes}m ${seconds}s`);
      setPomodoroClass("active-pomodoro");

      // If the count down is over, write some text
      if (distance <= 0) {
        clearInterval(x);
        /* document.getElementById("demo").innerHTML = "EXPIRED"; */
        /* setPomodoroMessage("Start Pomodoro"); */
        const unactiveCountDownDate = new Date().getTime() + 20 * 60 * 1000;
        const y = setInterval(function () {
          const now = new Date().getTime();
          // Find the distance between now an the count down date
          const distance = unactiveCountDownDate - now;

          // Time calculations for days, hours, minutes and seconds
          const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Output the result in an element with id="demo"
          setPomodoroMessage(`${minutes}m ${seconds}s`);
          setPomodoroClass("unactive-pomodoro");

          // If the count down is over, write some text
          if (distance < 0) {
            clearInterval(y);
            /* document.getElementById("demo").innerHTML = "EXPIRED"; */
            setPomodoroClass("");
            setPomodoroMessage("Start Pomodoro");
          }
        }, 1000);
      }
    }, 1000);
  };
  return (
    <>
      {upgrades.culture.includes("Atomic habits") && (
        <div className={`pomodoro ${pomodoroClass}`}>
          <button
            onClick={() => {
              if (pomodoroMessage === "Start Pomodoro") {
                startPomodoro();
              }
            }}
          >
            {pomodoroMessage}
          </button>
        </div>
      )}
    </>
  );
};
