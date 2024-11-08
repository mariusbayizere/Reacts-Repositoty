import React from 'react';
import Liked from './like';

const MoviesTable = ({ movie1, onDelete, onLike }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
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
  );
};

export default MoviesTable;
