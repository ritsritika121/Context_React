import React from 'react';
import LanguageContext from '../contexts/LanguageContex';

class Field extends React.Component {
    static contextType = LanguageContext;

    render(){
        const Text = this.context === 'english' ? 'Name' : 'Naam' ;
        return(
            <div className="ui field">
            <label>{Text}</label>
            <input />
            </div>
        );
    }
}

export default Field;