import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import SelectFeild from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import axios from 'axios'
import ImageResults from '../image-results/ImageResults'

class Search extends Component{
    
    state = {
        serchText:'',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '10361802-d80edd7c8013de8fa58524476',
        images: []
    }

    onHandelTextChange = (e) => {

        const val = e.target.value

         if(val === ''){
             this.setState({
                 images: [],
                 serchText: ''
             })
         }else{
            this.setState({serchText: val}, () => {
                axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${val}
                            &image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                .then( res => {
                    this.setState({
                        images: res.data.hits
                    })
                })
                .catch( err => console.log(err))
            })
        }

    }

    handelAmountChange = (e, index, value) => {
        this.setState({
            amount: value
        })
    }

    searchText = () => {
        return this.state.serchText !== ''
        ? <h4>Sorry, No Images found</h4> 
        : <h4>Search for images</h4>
    }

    render(){
        return (
            <div>
                <TextField
                    name=""
                    value={this.state.serchText}
                    onChange={this.onHandelTextChange}
                    floatingLabelText="Search Here"
                    fullWidth={true}
                />
                <br />
                <SelectFeild
                    name="Amount"
                    floatingLabelText="Amount to display"
                    value={this.state.amount}
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
                    this.state.images.length > 0 
                    ? ( <ImageResults images={this.state.images}/> ) 
                    : <div style={{textAlign: 'center', color: 'lightgray'}}>{this.searchText()}</div>
                }
            </div>
        )
    }
}

export default Search