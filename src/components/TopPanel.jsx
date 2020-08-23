import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StationSelectContainer from './StationSelectContainer';
import { infoPropTypes } from '../propTypes';

const Panel = styled.div`
    margin-left: 8px;
    margin-right: 8px;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.span`
    font-size: 1.5rem;
`;

const TopPanel = ({
    stationName,
    station,
    stationsInfo,
}) => {
    const titleText = stationName ? `BikeInfo: ${stationName}` : 'BikeInfo';
    return (
        <Panel>
            <Title>{titleText}</Title>
            <StationSelectContainer
                station={station}
                stationsInfo={stationsInfo}
            />
        </Panel>
    );
};

TopPanel.propTypes = {
    stationName: PropTypes.string,
    station: PropTypes.string.isRequired,
    stationsInfo: PropTypes.objectOf(infoPropTypes)
};

TopPanel.defaultProps = {
    stationName: '',
    stationsInfo: null,
};

export default TopPanel;
