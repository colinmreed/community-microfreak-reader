import React, {Component} from 'react';
import "./WarningBanner.css";

export class WarningBanner extends Component {

    render() {
        return (
            <div className="warning-top">
                Updated community version: Now supports 512 presets loading & saving. Parameters from firmware v1 work, with v2 partially supported. Please contact if you'd like to help add support for firmware versions 3-5.
            </div>
        );
    }

}
