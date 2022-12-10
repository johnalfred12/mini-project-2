import React from 'react';

class Page extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.children}</h1>
            </div>
        );
    }
}

export default Page;