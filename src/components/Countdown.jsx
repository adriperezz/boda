import { useState, useEffect } from 'react';

export default function Countdown() {
  const weddingDate = new Date('2025-05-30T00:00:00+02:00'); // Hora GMT+2 (Madrid)
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = weddingDate - now;

    if (difference > 0) {
      const months = calculateMonths(now, weddingDate);
      const days = Math.floor(difference / (1000 * 60 * 60 * 24)) % 30;
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return { months, days, hours, minutes, seconds };
    } else {
      return null; // La boda ya ocurrió
    }
  }

  function calculateMonths(start, end) {
    const startYear = start.getFullYear();
    const startMonth = start.getMonth();
    const endYear = end.getFullYear();
    const endMonth = end.getMonth();

    return (
      endMonth -
      startMonth +
      12 * (endYear - startYear) -
      (start.getDate() > end.getDate() ? 1 : 0)
    );
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="text-arena text-4xl font-thin">
        ¡Felicidades a los recién casados!
      </div>
    );
  }

  return (
    <div className="text-xl sm:text-3xl lg:text-4xl font-thin bg-arena opacity-75 px-8 py-4 text-verde-oscuro w-full">
      <p>
        {timeLeft.months} meses {timeLeft.days} días {timeLeft.hours}h{' '}
        {timeLeft.minutes}m {timeLeft.seconds}s
      </p>
    </div>
  );
}
