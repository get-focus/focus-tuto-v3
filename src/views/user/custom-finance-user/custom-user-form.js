import React, {Component, PropTypes} from 'react';
import {connect as connectToState} from 'react-redux';
import {connect as connectToForm} from 'focus-graph/behaviours/form';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {connect as connectToMasterData} from 'focus-graph/behaviours/master-data';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import Panel from 'focus-components/panel';
import compose from 'lodash/flowRight';

const User = ({fieldFor, selectFor, fields, ...otherProps}) => {
    return(
        <Panel title='User' {...otherProps}>
            {fieldFor('uuid')}
            {fieldFor('firstName')}
        </Panel>
    )
}

class SmartUser extends Component {
    componentWillMount() {
        const {id, load, loadMasterData} = this.props;
        // Et voila un load !
        load({id});
    }
    render() {
        const {fieldFor, list} = this.props;
        return (
            <User fieldFor={fieldFor} {...this.props}/>
        );
    }
};

SmartUser.displayName = 'SmartUser';

export default SmartUser;
