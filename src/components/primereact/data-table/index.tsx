'use client'

import React, { FC, useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Game } from '../../../types'
import {
  renderDate,
  renderTime,
  renderTeams,
  renderPrice,
  renderHomePrice,
  renderDrawPrice,
  renderAwayPrice,
} from './TableRenderers'

import { fetchGameData } from '@/services/apiService'
import { SportsFootball, SportsSoccer } from '@mui/icons-material'

interface Props {
  sportType: 'americanfootball_nfl' | 'soccer'
}

const DataTableComponent: FC<Props> = ({ sportType }) => {
  const [data, setData] = useState<Game[]>([])
  const [first, setFirst] = useState(0)
  const [rows, setRows] = useState(10)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newData = await fetchGameData(sportType)
        setData(newData)
      } catch (error) {
        console.error('Error fetching data:', error)
        setData([])
      }
    }

    fetchData()
  }, [sportType])

  const iconMapping: { [key in Props['sportType']]: JSX.Element } = {
    americanfootball_nfl: <SportsFootball />,
    soccer: <SportsSoccer />,
  }

  const getCaptionText = () => {
    switch (sportType) {
      case 'soccer':
        return 'Soccer'
      default:
        return ''
    }
  }

  const headerTemplate = () => (
    <div className="py-3 pl-2 text-neutral-200 bg-neutral-800 text-base">
      {iconMapping[sportType]} <span className="pl-1">{getCaptionText()}</span>
    </div>
  )

  const baseHeaderClassName =
    'bg-transparent text-inherit border-b border-t border-neutral-500 py-2 w-[70px] bg-opacity-10'
  const baseBodyClassName =
    'border-b border-t border-neutral-500 bg-opacity-50 py-0'

  const columnsConfig = [
    {
      key: 'date',
      header: 'Date',
      body: renderDate,
      headerClassName: `${baseHeaderClassName} pl-3`,
      bodyClassName: `${baseBodyClassName} pl-3`,
    },
    {
      key: 'time',
      header: 'Time',
      body: renderTime,
      headerClassName: baseHeaderClassName,
      bodyClassName: baseBodyClassName,
    },
    {
      key: 'teams',
      header: 'Teams',
      body: renderTeams,
      headerClassName: `${baseHeaderClassName} py-3`,
      bodyClassName: baseBodyClassName,
    },
    {
      key: 'home',
      header: 'Home',
      body: (rowData: Game) => renderPrice(rowData, renderHomePrice),
      headerClassName: `${baseHeaderClassName} text-right`,
      bodyClassName: `${baseBodyClassName} text-right`,
    },
    {
      key: 'draw',
      header: 'Draw',
      body: (rowData: Game) => renderPrice(rowData, renderDrawPrice),
      headerClassName: `${baseHeaderClassName} text-right`,
      bodyClassName: `${baseBodyClassName} text-right`,
    },
    {
      key: 'away',
      header: 'Away',
      body: (rowData: Game) => renderPrice(rowData, renderAwayPrice),
      headerClassName: `${baseHeaderClassName} text-right`,
      bodyClassName: `${baseBodyClassName} text-right`,
    },
  ]

  const getColumns = () =>
    columnsConfig.map((column) => (
      <Column
        key={column.key}
        header={column.header}
        body={column.body}
        headerClassName={column.headerClassName}
        bodyClassName={column.bodyClassName}
      />
    ))

  const onPageChange = (event: { first: number; rows: number }) => {
    setFirst(event.first)
    setRows(event.rows)
  }

  if (data.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div className="rounded border border-neutral-500 overflow-hidden">
      <DataTable
        value={data}
        className="p-datatable-striped text-xxs lg:text-xs mx-auto w-full"
        header={headerTemplate()}
        first={first}
        rows={rows}
        paginator
        paginatorPosition="top"
        totalRecords={data.length}
        onPage={onPageChange}
      >
        {getColumns()}
      </DataTable>
    </div>
  )
}

export default DataTableComponent
