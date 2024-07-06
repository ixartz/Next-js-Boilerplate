'use client';

import React, { FC, useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Game } from '../../../types';
import {
  renderDate,
  renderTime,
  renderTeams,
  renderHomePrice,
  renderDrawPrice,
  renderAwayPrice,
} from './TableRenderers';

import { fetchGameData } from '@/services/apiService';
import { SportsFootball, SportsSoccer } from '@mui/icons-material';
// import useOddsDataDataFetch from '../hooks/useOddsDataDataFetch';

interface Props {
  sportType: 'americanfootball_nfl' | 'soccer';
}

const DataTableComponent: FC<Props> = ({ sportType }) => {
  const [data, setData] = useState<Game[]>([]);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10); // Number of rows per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newData = await fetchGameData(sportType);
        setData(newData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]); // Set data to empty array in case of error
      }
    };

    fetchData();
  }, [sportType]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/netlify/functions/getData'); // Replace with your Netlify Function endpoint
  //       if (response.ok) {
  //         const jsonData = await response.json();
  //         setData(jsonData);
  //       } else {
  //         console.error('Failed to fetch data');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  const iconMapping: { [key in Props['sportType']]: JSX.Element } = {
    americanfootball_nfl: <SportsFootball />,
    soccer: <SportsSoccer />,
  };

  const getCaptionText = () => {
    switch (sportType) {
      case 'americanfootball_nfl':
        return 'American Football - NFL';
      case 'soccer':
        return 'Soccer';
      default:
        return '';
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
    const columns = [
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

    if (data.length > 0 && data[0]?.bookmakers?.[0]?.markets?.[0]?.outcomes) {
      const outcomes = data[0].bookmakers[0].markets[0].outcomes;

      if (outcomes[0] !== undefined) {
        columns.push(
          <Column
            key="home"
            header="Home"
            headerClassName="bg-gray-50 border-b border-t border-gray-300 py-2 w-[70px]"
            bodyClassName="border-b border-t border-gray-300"
            body={(rowData) =>
              renderHomePrice(rowData.bookmakers[0].markets[0].outcomes) !==
              null
                ? renderHomePrice(rowData.bookmakers[0].markets[0].outcomes)
                : '-'
            }
          />,
        );
      }

      if (outcomes[2] !== undefined) {
        columns.push(
          <Column
            key="draw"
            header="Draw"
            headerClassName="bg-gray-50 border-b border-t border-gray-300 py-2 w-[70px]"
            bodyClassName="border-b border-t border-gray-300"
            body={(rowData) =>
              renderDrawPrice(rowData.bookmakers[0].markets[0].outcomes) !==
              null
                ? renderDrawPrice(rowData.bookmakers[0].markets[0].outcomes)
                : '-'
            }
          />,
        );
      }

      if (outcomes[1] !== undefined) {
        columns.push(
          <Column
            key="away"
            header="Away"
            headerClassName="bg-gray-50 border-r border-b border-t border-gray-300 py-2 text-center w-[70px]"
            bodyClassName="border-r border-b border-t border-gray-300"
            body={(rowData) =>
              renderAwayPrice(rowData.bookmakers[0].markets[0].outcomes) !==
              null
                ? renderAwayPrice(rowData.bookmakers[0].markets[0].outcomes)
                : '-'
            }
          />,
        );
      }
    }

    return columns;
  };

  const onPageChange = (event: { first: number; rows: number }) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="datatable">
      <DataTable
        value={data}
        className="p-datatable-striped text-xxs lg:text-xs"
        header={headerTemplate()}
        first={first}
        rows={rows}
        paginator
        paginatorPosition="bottom"
        totalRecords={data.length}
        onPage={onPageChange}
      >
        {getColumns()}
      </DataTable>
    </div>
  );
};

export default DataTableComponent;
