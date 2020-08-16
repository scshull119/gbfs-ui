import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Panel = styled.div`
    margin-left: 8px;
    height: 2.5rem;
    display: flex;
    align-items: center;
`;

const Title = styled.span`
    font-size: 1.5rem;
`;

const TopPanel = ({ stationName }) => {
    const titleText = stationName ? `BikeInfo: ${stationName}` : 'BikeInfo';
    return (
        <Panel>
            <Title>{titleText}</Title>
        </Panel>
    );
};

TopPanel.propTypes = {
    stationName: PropTypes.string,
};

TopPanel.defaultProps = {
    stationName: ''
};

export default TopPanel;
