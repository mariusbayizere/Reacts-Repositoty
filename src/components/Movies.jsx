import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import _ from 'lodash'
import Pagination from './Pagination'
import MoviesTable from './moviesTable'
import ListGroup from './ListGroup'
import { paginate } from '../utils/pagination';
import { getGenres } from '../services/fakeGenreService';
class Movie extends Component {
    state = { 
        // Movie1 : getMovies(),
        currentPage: 1,
        pageSize: 4,
        genres: [],
        Movie1: [],
        selectedGenre: null,
        sortColumn : {Path: 'title', order: 'asc'}

     } 

     handleGenreselect = genre =>{
        // console.log(`The Genre is : ${genre}`);
        console.log(genre);
        this.setState({selectedGenre : genre, currentPage: 1})
     }

     handlesort = (Path) => {
        //  console.log(Path)

        const sortColumn = {...this.state.sortColumn};
        if(sortColumn.Path === Path){
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        }
        else{
            sortColumn.Path = Path;
            sortColumn.order = 'asc';
        }
        // this.setState({sortColumn : {Path, order: 'asc'}})
        this.setState({ sortColumn })
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
    
    componentDidMount(){
      
        // this.setState({Movie1: getMovies(), genres: getGenres()})
     
const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
this.setState({ Movie1: getMovies(), genres });

    }
    handlePage_change = data =>{
        console.log(`this event is called with Parameter${data}`);
        this.setState({currentPage : data})
    }
    

    render() { 






        const {pageSize, sortColumn,currentPage, selectedGenre , Movie1 : allmovies} = this.state;


        const filtered = selectedGenre && selectedGenre._id  ? allmovies.filter(m => m.genre._id === selectedGenre._id) : allmovies;

        const sort = _.orderBy(filtered, [sortColumn.Path], [sortColumn.order])
        
        // const filtered = selectGendre ? allmovies.filter(m => m.genre._id === selectGendre._id) : allmovies;

        // const Movie1 = paginate(allmovies, currentPage, pageSize)

        // const Movie1 = paginate(filtered, currentPage, pageSize)

        const Movie1 = paginate(sort, currentPage, pageSize)


        if (this.state.Movie1.length === 0)
        {
            return <h4>The movies is {this.state.Movie1.length} Zero</h4>
        }
        return ( 
        
           <div className='row'>
            <div className="col-2">
            <ListGroup items={this.state.genres} selectedItem={this.state.selectedGenre} onItemSelect={this.handleGenreselect}/>
            {/* <ListGroup items={this.state.genres} textProperty="name" valueProperty="_id"  onItemSelect={this.handleGenreselect}/> */}
            </div>
            <div className="col">
                
            {/* <h3>this Number of of movies is {this.state.Movie1.length}</h3> */}
            <h3>this Number of of movies is {filtered.length}</h3>
    
        {/* <MoviesTable/>    

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
        </table> */}
        {/* <Pagination itemcount={count} pageSize={pageSize} currentPage ={currentPage} onPagechange={this.handlePage_change}/> */}

        <MoviesTable
            movie1={Movie1}
            onDelete={this.handleDelete}
            onLike={this.handleclick}
            onSort={this.handlesort}
          />
        <Pagination itemcount={filtered.length} pageSize={pageSize} currentPage ={currentPage} onPagechange={this.handlePage_change}/>
                
                </div>   


           </div>


        
        );
    }
}
 
export default Movie;