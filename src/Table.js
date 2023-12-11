import React from 'react'

function TableHeader(props){
    return (
        <thead>
        <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Delete Row</th>
        </tr>
        </thead>
    );
}

function TableBody(props) {
    const rows = props.characterData.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <btton onClick={() => props.removeCharacter(index)}>Delete</btton>
                </td>
            </tr>
        );
    }
    );
    return(
        <tbody>
            {rows}
        </tbody>
    );
}

function Table(props){
    return(
        <table>
            <TableHeader/>
            <TableBody characterData={props.characterData} removeCharacter={props.removeCharacter}/>
        </table>
    );
}

export default Table;