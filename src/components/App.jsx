import { Component } from "react";
import { ToastContainer} from 'react-toastify';
import '../styles.css'
import { Searchbar } from "./Searchbar/Searchbar"
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { getSearchImg } from "../api/api";
import { Loader } from "./Loader/Loader";
import { LoadMoreButton } from "./LoadMoreButton/LoadMoreButton";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
export class App extends Component{
  state = {
    searchValue: '',
    page: 1,
    photos: [],
    loading: false,
    error: null
  }

  
  onSubmit = (value) => {
    this.setState({
      searchValue: value,
      page: 1
    }
    )
  }
  
  onLoadMoreClick = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1
    }))
  }

 async componentDidUpdate(prevProps, prevState) {
    if(prevState.searchValue !== this.state.searchValue || prevState.page !== this.state.page){
    try{
      this.setState({loading: true})
      const data = await getSearchImg(this.state.searchValue, this.state.page)
      this.setState({photos: [...prevState.photos, ...data.hits]})
    }catch (error){
      this.setState({error: true})
    }finally{
      this.setState({loading: false})
    }          
    }
  }

render() {

    return <>
    <Searchbar onSubmit={this.onSubmit}></Searchbar>
    {this.state.error && (<ErrorMessage/>)}
{ this.state.photos.length !== 0 && (<ImageGallery photos={this.state.photos}>
    </ImageGallery>)}
    {this.state.loading && <Loader/>}
    { this.state.photos.length !== 0 && (<LoadMoreButton onLoadMoreClick={this.onLoadMoreClick}>Load more</LoadMoreButton>)}
    <ToastContainer autoClose={3000}/>
    </>
  }
}

