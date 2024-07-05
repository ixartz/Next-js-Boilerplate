import React from "react";
import { Game } from "../../../types";

export const renderDate = (rowData: Game) => {
  const formatDate = (dateTimeString: string): string => {
    const dateObj = new Date(dateTimeString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const isSameDate = (date1: Date, date2: Date): boolean => {
      return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
      );
    };
    
    if (isSameDate(dateObj, yesterday)) {
      return "Yesterday";
    } else if (isSameDate(dateObj, today)) {
      return "Today";
    } else if (isSameDate(dateObj, tomorrow)) {
      return "Tomorrow";
    } else {
      const options = { month: "short", day: "numeric" };
      return dateObj.toLocaleDateString("en-US", options);
    }
  };

  const date = formatDate(rowData.commence_time);
  return <div>{date}</div>;
};

export const renderTime = (rowData: Game) => {
  const formatTime = (dateTimeString: string): string => {
    const dateObj = new Date(dateTimeString);
    const hours = dateObj.getHours().toString().padStart(2, "0");
    const minutes = dateObj.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const time = formatTime(rowData.commence_time);
  return <div>{time}</div>;
};

export const renderTeams = (rowData: Game) => {
  return (
    <>
      <span className="block leading-3 mt-2 mb-1">{rowData.home_team}</span>
      {/* <span className="block text-center"> v </span> */}
      <span className="block leading-3 mt-1 mb-2">{rowData.away_team}</span>
    </>
  );
};
export const renderHomePrice = (rowData: Game) => {
  if (
    rowData.bookmakers.length > 0 &&
    rowData.bookmakers[0].markets.length > 0 &&
    rowData.bookmakers[0].markets[0].outcomes.length > 0
  ) {
    return rowData?.bookmakers[0].markets[0].outcomes[0].price;
  } else {
    return null;
  }
};

export const renderAwayPrice = (rowData: Game) => {
  if (
    rowData.bookmakers.length > 0 &&
    rowData.bookmakers[0].markets.length > 0 &&
    rowData.bookmakers[0].markets[0].outcomes.length > 1
  ) {
    return rowData?.bookmakers[0].markets[0].outcomes[1].price;
  } else {
    return null;
  }
};

export const renderDrawPrice = (rowData: Game) => {
  if (
    rowData.bookmakers.length > 0 &&
    rowData.bookmakers[0].markets.length > 0 &&
    rowData.bookmakers[0].markets[0].outcomes.length > 2
  ) {
    return rowData?.bookmakers[0].markets[0].outcomes[2].price;
  } else {
    return null;
  }
};
