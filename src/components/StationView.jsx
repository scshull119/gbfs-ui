import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TopPanel from './TopPanel';
import ViewArea from './ViewArea';
import { infoPropTypes } from '../propTypes';
import { STATIONS_URL } from '../constants/urls';

const StationViewWrapper = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const StationView = ({
    station,
    stationsInfo,
    infoLoading,
}) => {
    const [ statusLoading, setStatusLoading ] = useState(false);
    const [ stationStatus, setStationStatus ] = useState(null);
    
    useEffect(() => {
        setStatusLoading(true);
        fetch(`${STATIONS_URL}/${station}`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            }).then((data) => {
                setStationStatus(data);
            }).catch((err) => {
                console.error(err);
            }).finally(() => {
                setStatusLoading(false);
            });
    }, [station]);

    const showLoadingIndicator = infoLoading || statusLoading;

    return (
        <StationViewWrapper>
            <TopPanel
                stationName={stationStatus && stationStatus.name}
                station={station}
                stationsInfo={stationsInfo}
            />
            <ViewArea
                showLoadingIndicator={showLoadingIndicator}
                stationStatus={stationStatus}
            />
        </StationViewWrapper>
    );
};

StationView.propTypes = {
    station: PropTypes.string.isRequired,
    stationsInfo: PropTypes.objectOf(infoPropTypes),
    infoLoading: PropTypes.bool
};

StationView.defaultProps = {
    stationsInfo: null,
    infoLoading: false
};

export default StationView;
