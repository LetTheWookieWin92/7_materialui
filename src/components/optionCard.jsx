import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


class OptionCard extends Component {
    state = { 
        cardTitle: this.props.text,
        cardImage: this.props.image
     };
    render() { 
        return ( 
            <a href="" target="_blank" style={{textDecoration: 'none'}}>
                <Paper style={{margin: 10, padding: 5, textAlign: 'center', overflow: 'hidden'}}> 
                    {this.state.cardImage}
                    <br />
                    {this.state.cardTitle}
                </Paper>
            </a>
         );
    }
}
 
export default OptionCard;


