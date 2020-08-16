import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StatusDisplay from './StatusDisplay';
import { statusPropTypes } from '../propTypes';

const ViewWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const ViewArea = ({ showLoadingIndicator, stationStatus }) => {
    const LOADING_TEXT = 'Loading...';
    return (
        <ViewWrapper>
            {showLoadingIndicator && <div>{LOADING_TEXT}</div>}
            {stationStatus && !showLoadingIndicator && <StatusDisplay status={stationStatus} />}
        </ViewWrapper>
    );
};

ViewArea.propTypes = {
    showLoadingIndicator: PropTypes.bool,
    stationStatus: statusPropTypes,
};

ViewArea.defaultProps = {
    showLoadingIndicator: false,
    stationStatus: null,
}

export default ViewArea;
