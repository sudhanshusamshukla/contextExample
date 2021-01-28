import React from 'react';
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
    //if we are using consumer we do not require static contextType
    //only require when want tu use data this.context
    //static contextType = LanguageContext;

    //single function has a child
    //consumer always one child passing into consumer ,
    // which is always going to a function, automatically called by consumer
    renderSubmit(value) {
        return value === 'english' ? 'Submit' : 'Voorleggen';
    }
    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {value => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        );
    }

    render() {
        //const text = this.context === 'english' ? 'Submit' : 'Voorleggen';

        return (
            <ColorContext.Consumer>
                {color => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}

export default Button;