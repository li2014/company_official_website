import React from 'react';

const Index = React.createClass({
    render() {
        return (
          <div>
            {this.props.children}
          </div>
        );
    }
});

module.exports = Index;