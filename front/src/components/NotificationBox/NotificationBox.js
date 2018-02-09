import React, { Component } from 'react';


class NotificationBox extends Component {


    render() {
        if (this.props.show) {
            return (
                <div className="NotificationBox">
                    {this.props.children}
                </div>
            );
        } else {
            return null;
        }
    }
}

export default NotificationBox;
