import React, { useMemo } from "react";
import { useTable } from "react-table";

function BoxScoreTable(props) {
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name"
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
        accessor: "fieldGoalPercentage"
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
        accessor: "freethrowPercentage"
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
        accessor: "threePercentage"
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

  const tableInstance = useTable({ columns, data: props.data });
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
                style={{
                  borderBottom: "solid 3px red",
                  background: "aliceblue",
                  color: "black",
                  fontWeight: "bold"
                }}
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
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                      background: "papayawhip"
                    }}
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

export default BoxScoreTable;
