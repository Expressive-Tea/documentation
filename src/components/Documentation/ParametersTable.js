
import React, {Component, Fragment} from 'react';

class ParametersTable extends Component {
    render() {
        const {args} = this.props;

        return(
            <div className="arguments-table table-responsive-sm">
                <h5>Parameters</h5>
                <table className="table table-borderless">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Optional</th>
                        <th scope="col">Type</th>
                        <th scope="col" colSpan="2">Defaults</th>
                        <th scope="col" colSpan="2">Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {args && args.map( (arg, i) => (
                        <tr key={i}>
                            <td>{arg.name}</td>
                            <td>{arg.isOptional ? 'Yes' : 'No'}</td>
                            <td>{arg.type.name}</td>
                            <td colSpan="2">{arg.defaults}</td>
                            <td colSpan="2" dangerouslySetInnerHTML={{ __html: arg.description}}></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ParametersTable;