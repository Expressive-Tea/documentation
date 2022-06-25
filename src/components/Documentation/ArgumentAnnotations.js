import React, { Component } from 'react';
import PropertyTypes from './PropertyTypes';

class ArgumentAnnotations extends Component {
  render() {
    const { args } = this.props;

    return (
      <div className="arguments-annotations">
        {args &&
          args.map((arg, i) => (
            <span className="argument" key={i}>
              <a
                tabIndex={i}
                role="button"
                data-toggle="popover"
                title="Dismissible popover"
                className="token arguments"
                data-content="And here's some amazing content. It's very engaging. Right?"
              >
                {arg.name}
              </a>
              {arg.isOptional && <span className="is-optional token optionals">Optional</span>}
              {arg.type &&
                (arg.type.reference ? (
                  <PropertyTypes type={arg.type.name} typeRef={arg.type.reference} />
                ) : (
                  <PropertyTypes type={arg.type.name} />
                ))}
            </span>
          ))}
      </div>
    );
  }
}

export default ArgumentAnnotations;
