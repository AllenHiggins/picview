import React, {Component} from 'react'
import { connect } from 'react-redux'

import TextField from 'material-ui/TextField'
import SelectFeild from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import ImageResults from '../image-results/ImageResults'

import {
    searchAmount, 
    searchUpdateUserInput, 
    searchGetImagesList,
    searchSetImagesList
} from '../../actions/search-actions'


class Search extends Component{
    
    componentWillMount() {
        this.props.searchGetImagesList(this.props.userSearch.searchText, this.props.userSearch.amount )
    }

    onHandelTextChange = (e) => {

        const val = e.target.value

         if(val === ''){
            this.props.searchSetImagesList([])
            this.props.searchUpdateUserInput('')
         }else{
            this.props.searchUpdateUserInput(val)
            this.props.searchGetImagesList(val, this.props.userSearch.amount )
        }

    }

    handelAmountChange = (e, index, value) => {
        this.props.searchAmount(value)
    }

    searchText = () => {
        return this.props.userSearch.searchText !== ''
        ? <h4>Sorry, No Images found</h4> 
        : <h4>Search for images</h4>
    }

    render(){

        const {amount, searchText, images} = this.props.userSearch

        return (
            <div>
                <TextField
                    name=""
                    value={searchText}
                    onChange={this.onHandelTextChange}
                    floatingLabelText="Search Here"
                    fullWidth={true}
                />
                <br />
                <SelectFeild
                    name="Amount"
                    floatingLabelText="Amount to display"
                    value={amount}
                    onChange={this.handelAmountChange}
                >
                    <MenuItem value={5} primaryText="5"/>
                    <MenuItem value={10} primaryText="10"/>
                    <MenuItem value={15} primaryText="15"/>
                    <MenuItem value={30} primaryText="30"/>
                    <MenuItem value={50} primaryText="50"/>
                </SelectFeild>
                <br />
                {
                    images.length > 0 
                    ? ( <ImageResults images={images}/> ) 
                    : <div style={{textAlign: 'center', color: 'lightgray'}}>{this.searchText()}</div>
                    
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userSearch: state.searchReducer,
    };
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        searchGetImagesList: (userInput,amount) => {
        dispatch(searchGetImagesList(userInput,amount))
      },
      searchSetImagesList: (val) => {
          dispatch(searchSetImagesList(val))
      },
      searchAmount: (selectedAmount) => {
        dispatch(searchAmount(selectedAmount))
      },
      searchUpdateUserInput: (userInput) => {
          dispatch(searchUpdateUserInput(userInput))
      }
    };
}
  
export default connect(mapStateToProps,mapDispatchToProps)(Search);