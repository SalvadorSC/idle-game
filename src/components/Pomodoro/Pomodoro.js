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

  const calculateNextBuff = (max, min) => {
    const random =
      Math.random() * (max * 60 * 1000 - min * 60 * 1000) + min * 60 * 1000;
    //console.log(random);
    return random;
  };

  const startPomodoro = () => {
    const countDownDate = new Date().getTime() + 30 * 1000;
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
        setPomodoroClass("");
        setPomodoroMessage("Extreme Focus");
        setPomodoroClass("unactive-pomodoro");
        const nextBuff = calculateNextBuff(10, 3);
        setTimeout(() => {
          setPomodoroClass("");
        }, nextBuff);
      }
    }, 1000);
  };
  return (
    <>
      {upgrades.culture.includes("Atomic habits") && (
        <div className={`pomodoro ${pomodoroClass}`}>
          <button
            onClick={() => {
              if (pomodoroMessage === "Extreme Focus") {
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
