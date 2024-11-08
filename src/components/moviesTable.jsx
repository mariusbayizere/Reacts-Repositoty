import Liked from './like';
import React, { Component } from 'react';


class MoviesTable extends Component {

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



    render( ) {
        const { movie1, onDelete, onLike} = this.props;
       
       return (



       <table className="table">
      <thead>
        <tr>
          <th onClick={() => this.raisesort('title')}>Title</th>
          <th onClick={() => this.raisesort('genre.name')}>Genre</th>
          <th onClick={() => this.raisesort('numberInStock')}>Stock</th>
          <th onClick={() => this.raisesort('dailyRentalRate')}>Rate</th>
          <th>Liked</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {movie1.map((mov) => (
          <tr key={mov._id}>
            <td>{mov.title}</td>
            <td>{mov.genre.name}</td>
            <td>{mov.numberInStock}</td>
            <td>{mov.dailyRentalRate}</td>
            <td>
              <Liked liked={mov.liked} onClick={() => onLike(mov)} />
            </td>
            <td>
              <button
                onClick={() => onDelete(mov)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
       )
       
       
 

    }
}
 
export default MoviesTable;