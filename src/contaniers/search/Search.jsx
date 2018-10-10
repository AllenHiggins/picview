import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import SelectFeild from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class Search extends Component{
    
    state = {
        serchText:'',
        amount: 15,
        apiUrl: '',
        apiKey: '',
        images: []
    }

    onHandelTextChange = (e) => {
        this.setState({
            serchText: e.target.value
        })

        console.log(this.state.serchText)
    }

    handelAmountChange = (e, index, value) => {
        this.setState({
            amount: value
        })

        console.log(this.state.amount)
    }

    render(){
        return (
            <div>
                <TextField
                    name=""
                    value={this.state.serchText}
                    onChange={this.onHandelTextChange}
                    floatingLabelText="Search for any image"
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
            </div>
        )
    }
}

export default Search