
import React, {Component} from 'react';

class PropertyAnnotations extends Component {
    render() {
        const {isConstructor, isStatic, isAsync, isolationType, isReadOnly, isInjectable, isDecorable} = this.props;

        return(
            <div className="property-annotations">
                {
                    isReadOnly && (
                        <span className="annotation read-only">read-only</span>
                    )
                }
                {
                    isInjectable && (
                        <span className="annotation injectable"><i className="fas fa-syringe"/> Injectable</span>
                    )
                }
                {
                    isDecorable && (
                        <span className="annotation isDecorable"><i className="fas fa-at"/> Decorable</span>
                    )
                }
                {
                    isolationType && ['public', 'private', 'protected'].indexOf(isolationType) > -1 && (
                        <span className={`annotation isolation-type ${isolationType}`}><i
                            className="fas fa-glasses"/> {isolationType}</span>
                    )
                }
                {
                    isStatic && (
                        <span className="annotation static">Static</span>
                    )
                }
                {
                    isAsync && (
                        <span className="annotation async">Async</span>
                    )
                }
                {
                    isConstructor && (
                        <span className="annotation constructor">Constructor</span>
                    )
                }
            </div>
        );
    }
}

export default PropertyAnnotations;