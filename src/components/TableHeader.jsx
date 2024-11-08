import React, { Component } from 'react';

class TableHeader extends Component {
    
    
    raisesort = (Path) =>{
        const sortColumn = {...this.props.sortColumn};
        if(sortColumn.Path === Path){
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        }
        else{
            sortColumn.Path = Path;
            sortColumn.order = 'asc';
        }
        // this.setState({ sortColumn })
        this.props.onSort(sortColumn)
    }
    
    render() { 
        return <thead>
            <tr>

                {this.props.columns.map(column => <th key={column.Path} onClick={() => this.raisesort(column.Path)}>{column.label} </th>)}
            </tr>onSort
        </thead>;
    }
}
 
export default TableHeader;