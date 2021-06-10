
import React, {Component} from 'react';

class PropertyTypes extends Component {
    render() {
        const {type, typeRef, returns} = this.props;

        return(
            <div className="property-types">
                {}
                { type && (

                        typeRef ?
                        (<span className="type token types"><span className="token symbols symbol">:</span><a href={typeRef}>{type}</a></span>) :
                        (<span className="type token types"><span className="token symbols symbol">:</span>{type}</span>)

                )
                }

                {
                    returns && (
                        typeRef ?
                            (<span className="returns token types"><span className="token symbols symbol">&#x21d2;</span><a href={typeRef}>{returns}</a></span>) :
                            (<span className="returns token types"><span className="token symbols symbol">&#x21d2;</span>{returns}</span>)
                    )
                }
            </div>
        );
    }
}

export default PropertyTypes;