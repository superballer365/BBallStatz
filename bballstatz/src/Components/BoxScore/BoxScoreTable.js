import React, { useMemo } from "react";
import { useTable } from "react-table";
import styles from "./BoxScoreTable.module.css";
import classNames from "classnames";
import { useSticky } from "react-table-sticky";

function BoxScoreTable(props) {
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        sticky: "left"
      },
      {
        Header: "MIN",
        accessor: "minutes"
      },
      {
        Header: "PTS",
        accessor: "points"
      },
      {
        Header: "REB",
        accessor: "rebounds"
      },
      {
        Header: "AST",
        accessor: "assists"
      },
      {
        Header: "BLK",
        accessor: "blocks"
      },
      {
        Header: "FGM",
        accessor: "fieldGoalsMade"
      },
      {
        Header: "FGA",
        accessor: "fieldGoalsAttempted"
      },
      {
        Header: "FG%",
        accessor: "fieldGoalPercentage",
        Cell: ({ value }) => value.toFixed(1)
      },
      {
        Header: "FTM",
        accessor: "freethrowsMade"
      },
      {
        Header: "FTA",
        accessor: "freethrowsAttempted"
      },
      {
        Header: "FT%",
        accessor: "freethrowPercentage",
        Cell: ({ value }) => value.toFixed(1)
      },
      {
        Header: "3PM",
        accessor: "threesMade"
      },
      {
        Header: "3PA",
        accessor: "threesAttempted"
      },
      {
        Header: "3P%",
        accessor: "threePercentage",
        Cell: ({ value }) => value.toFixed(1)
      },
      {
        Header: "TOV",
        accessor: "turnovers"
      },
      {
        Header: "PF",
        accessor: "fouls"
      }
    ],
    []
  );

  const tableInstance = useTable({ columns, data: props.data }, useSticky);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = tableInstance;

  return (
    <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                className={classNames(
                  styles.defaultHeader,
                  getHeaderClass(column)
                )}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className={classNames(
                      styles.commonCell,
                      getCellClass(cell)
                    )}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function getCellClass(cell) {
  switch (cell.column.Header) {
    case "Name":
      return styles.nameCell;
    default:
      return styles.cell;
  }
}

function getHeaderClass(column) {
  switch (column.Header) {
    case "Name":
      return styles.nameHeader;
    case "Min":
      return styles.minutes;
    default:
      return styles.smallHeader;
  }
}

export default BoxScoreTable;
