import { useTable, useSortBy } from "react-table";
import { useMemo } from "react"


const Table = ({ data }) => {
    const columns = useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Region',
                accessor: 'region',
            }
        ],
        []
    );

    const { rows, headerGroups, prepareRow } = useTable(
        { columns, data },
        useSortBy
    );

    return <table>
        <thead>
            {headerGroups.map(headerGroups => {
                return <tr>
                    {headerGroups.headers.map(header => {
                        return (
                            <th {...header.getHeaderProps(header.getSortByToggleProps())}>
                                {header.render('Header')}
                                <span>
                                    {header.isSorted ?
                                        header.isSortedDesc
                                            ? '🔽'
                                            : '🔼'
                                        : ''}
                                </span>
                            </th>
                        );
                    })}
                </tr>
            })}
        </thead>
        <tbody>
            {rows.map(row => {
                prepareRow(row);

                return (
                    <tr>
                        {row.cells.map((cell) => {
                            return <td>{cell.render('Cell')}</td>;
                        })}
                    </tr>
                )
            })}
        </tbody>
    </table>;
}

export default Table;