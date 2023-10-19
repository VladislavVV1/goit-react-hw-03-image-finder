import {Component} from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledSearchbar, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./Searchbar.styled";

export class Searchbar extends Component{
    state = {
        value:'',
    }
    handleInputValueChange = ({target}) => {
        this.setState(
          {value: target.value}
        )
      }
    
    handleFormSubmit = (e) => {
        e.preventDefault()
        if(this.state.value.trim() === ''){
          toast.error('Введите что то')
          return;
        }
        this.props.onSubmit(this.state.value)
    }
    
    render(){
    return <StyledSearchbar>
    <SearchForm onSubmit={this.handleFormSubmit}>
        <SearchFormButton type="submit"  >
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>
        <SearchFormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={this.state.value}
        onInput={(e)=>this.handleInputValueChange(e)}
        />
    </SearchForm>
</StyledSearchbar>
  }
}

