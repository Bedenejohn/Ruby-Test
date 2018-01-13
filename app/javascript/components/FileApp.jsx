import React from 'react';
import FileNames from 'components/FileNames'

export default class FileApp extends React.Component {

    state = { files: [] };

    componentDidMount = () => {
        this.setState({ files: this.props.files });
    };

    render = () => {
        return(
            <div>
                <ul>
                    <FileNames files={this.state.files} />
                </ul>
            </div>
        );
    };
}   