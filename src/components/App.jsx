import React, {
    useState, useEffect,
} from 'react';
import styled from 'styled-components'
import TopPanel from './TopPanel';
import ViewArea from './ViewArea';
import { STATIONS_URL } from '../constants/urls';

const AppWrapper = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const App = () => {
    const [ statusLoading, setStatusLoading ] = useState(false);
    const [ infoLoading, setInfoLoading ] = useState(false);
    const [ station, setStation ] = useState('4068');
    const [ stationsInfo, setStationsInfo ] = useState(null);
    const [ stationStatus, setStationStatus ] = useState(null);

    useEffect(() => {
        setInfoLoading(true);
        fetch(STATIONS_URL)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            }).then((data) => {
                setStationsInfo(data);
            }).catch((err) => {
                console.error(err);
            }).finally(() => {
                setInfoLoading(false);
            });
    }, []);

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
        <AppWrapper id="gbfs-ui">
            <TopPanel
                stationName={stationStatus && stationStatus.name}
                station={station}
                setStation={setStation}
                stationsInfo={stationsInfo}
            />
            <ViewArea
                showLoadingIndicator={showLoadingIndicator}
                stationStatus={stationStatus}
            />
        </AppWrapper>
    );
};

export default App;
