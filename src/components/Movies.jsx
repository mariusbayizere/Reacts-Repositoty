import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

import Liked from './like';
import Pagination from './Pagination'
import ListGroup from './ListGroup'
import { paginate } from '../utils/pagination';
// import Movie from './Movies';
class Movie extends Component {
    state = { 
        Movie1 : getMovies(),
        currentPage: 1,
        pageSize: 4
     } 


     handleDelete = (moveis) => {
        const Movie1 = this.state.Movie1.filter(data => data._id !== moveis._id)
        this.setState({Movie1})    
    }

    handleclick = (moveis) => {
        const Movie1 = [...this.state.Movie1];
        const index = Movie1.indexOf(moveis);
        Movie1[index] = { ...Movie1[index] }; 
        Movie1[index].liked = !Movie1[index].liked;
        this.setState({ Movie1 });
    };

    handlePage_change = data =>{
        console.log(`this event is called with Parameter${data}`);
        this.setState({currentPage : data})
    }
    

    render() { 



        const {length :count} = this.state.Movie1;
        const {pageSize, currentPage , Movie1 : allmovies} = this.state;


        const Movie1 = paginate(allmovies, currentPage, pageSize)

        if (this.state.Movie1.length === 0)
        {
            return <h4>The movies is {this.state.Movie1.length} Zero</h4>
        }
        return ( 
        
           <React.Fragment>
            {/* <ListGroup/> */}
            <h3>this Number of of movies is {this.state.Movie1.length}</h3>
        
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Gengre</th>
                    <th>stock</th>
                    <th>Rate</th>
                    <th>Liked</th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody>
                    {Movie1.map(mov => (
                                    <tr key={mov._id}>
                                    <td>{mov.title}</td>                                
                                    <td>{mov.genre.name}</td>
                                    <td>{mov.numberInStock}</td>
                                    <td>{mov.dailyRentalRate}</td>
                                    <td> <Liked liked={mov.liked} onClick={()=> this.handleclick(mov)}/></td>

                                    <td>{
                                       <button onClick={()=> this.handleDelete(mov)} 
                                       className='btn btn-danger btn-sm'> Delete</button> 
                                        }</td>
                                </tr>
                            ))}
            </tbody>
        </table>
        <Pagination itemcount={count} pageSize={pageSize} currentPage ={currentPage} onPagechange={this.handlePage_change}/>
           </React.Fragment> 

        
        );
    }
}
 
export default Movie;