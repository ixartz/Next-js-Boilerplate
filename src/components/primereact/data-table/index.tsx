"use client"

import React, { FC, useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Game } from "../../../types";
import {
  renderDate,
  renderTime,
  renderTeams,
  renderHomePrice,
  renderDrawPrice,
  renderAwayPrice,
} from "./TableRenderers";

import { fetchGameData } from "@/services/apiService";
import { SportsFootball, SportsSoccer } from "@mui/icons-material";

interface Props {
  sportType: "americanfootball_nfl" | "soccer";
}

const DataTableComponent: FC<Props> = ({ sportType }) => {
  const [data, setData] = useState<Game[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const newData = await fetchGameData(sportType);
      setData(newData);
    };

    fetchData();
  }, [sportType]);

  const iconMapping: { [key in Props["sportType"]]: JSX.Element } = {
    americanfootball_nfl: <SportsFootball />,
    soccer: <SportsSoccer />,
  };

  const getCaptionText = () => {
    switch (sportType) {
      case "americanfootball_nfl":
        return "American Football - NFL";
      case "soccer":
        return "Soccer";
      default:
        return "";
    }
  };

  const headerTemplate = () => {
    return (
      <div className="p-grid">
        <div className="p-col py-3">
          {iconMapping[sportType]} <span>{getCaptionText()}</span>
        </div>
      </div>
    );
  };

  const getColumns = () => {
    let columns = [
      <Column
        key="date"
        header="Date"
        body={renderDate}
        headerClassName="bg-gray-50 border-l border-b border-t border-gray-300 py-2 pl-2 w-[70px]"
        bodyClassName="pl-2 border-l border-b border-t border-gray-300"
      />,
      <Column
        key="time"
        header="Time"
        body={renderTime}
        headerClassName="bg-gray-50 border-b border-t border-gray-300 py-2 w-[70px]"
        bodyClassName="border-b border-t border-gray-300"
      />,
      <Column
        key="teams"
        header="Teams"
        body={renderTeams}
        headerClassName="bg-gray-50 border-b border-t border-gray-300 py-3"
        bodyClassName="border-b border-t border-gray-300"
      />,
    ];

    // Add Home column if outcomes[0] exists
    if (data.length > 0 && data[0]?.bookmakers?.[0]?.markets?.[0]?.outcomes?.length > 0) {
      columns.push(
        <Column
          key="home"
          header="Home"
          headerClassName="bg-gray-50 border-b border-t border-gray-300 py-2 w-[70px]"
          bodyClassName="border-b border-t border-gray-300"
          body={(rowData) => renderHomePrice(rowData) !== null ? renderHomePrice(rowData) : '-'}
        />
      );
    }

    // Add Draw column if outcomes[2] exists
    if (data.length > 0 && data[0]?.bookmakers?.[0]?.markets?.[0]?.outcomes?.length > 2) {
      columns.push(
        <Column
          key="draw"
          header="Draw"
          headerClassName="bg-gray-50 border-b border-t border-gray-300 py-2 w-[70px]"
          bodyClassName="border-b border-t border-gray-300"
          body={(rowData) => renderDrawPrice(rowData) !== null ? renderDrawPrice(rowData) : '-'}
        />
      );
    }

    // Add Away column if outcomes[1] exists
    if (data.length > 0 && data[0]?.bookmakers?.[0]?.markets?.[0]?.outcomes?.length > 1) {
      columns.push(
        <Column
          key="away"
          header="Away"
          headerClassName="bg-gray-50 border-r border-b border-t border-gray-300 py-2 text-center w-[70px]"
          bodyClassName="border-r border-b border-t border-gray-300"
          body={(rowData) => renderAwayPrice(rowData) !== null ? renderAwayPrice(rowData) : '-'}
        />
      );
    }

    return columns;
  };

  return (
    <div className="datatable">
      <DataTable
        value={data}
        className="p-datatable-striped text-xxs lg:text-xs"
        header={headerTemplate()}
      >
        {getColumns()}
      </DataTable>
    </div>
  );
};

export default DataTableComponent;
