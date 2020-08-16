import React from 'react';
import styled from 'styled-components';
import CountDisplay from './CountDisplay';
import { statusPropTypes } from '../propTypes';

const StatusWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`;

const StatusDisplay = ({ status }) => (
    <StatusWrapper>
        <CountDisplay
            title="Standard Bikes"
            available={status.bikesAvailable - status.eBikesAvailable}
            disabled={status.bikesDisabled}
        />
        <CountDisplay
            title="E-Bikes"
            available={status.eBikesAvailable}
        />
        <CountDisplay
            title="Docks"
            available={status.docksAvailable}
            disabled={status.docksDisabled}
        />
    </StatusWrapper>
);

StatusDisplay.propTypes = {
    status: statusPropTypes.isRequired,
};

export default StatusDisplay;
