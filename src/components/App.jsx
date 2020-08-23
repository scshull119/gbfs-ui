import React, {
    useState, useEffect
} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import styled from 'styled-components'
import StationView from './StationView';
import { STATIONS_URL } from '../constants/urls';

const AppWrapper = styled.section`
    height: 100%;
`;

const App = () => {
    const [ infoLoading, setInfoLoading ] = useState(false);
    const [ stationsInfo, setStationsInfo ] = useState(null);

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

    return (
        <AppWrapper id="gbfs-ui">
            <Router>
                <Switch>
                    <Route path="/station/:station"
                        path="/station/:id"
                        render={routeProps => (
                            <StationView
                                station={routeProps.match.params.id}
                                stationsInfo={stationsInfo}
                                infoLoading={infoLoading}
                            />
                        )}
                    />
                    <Route path="/">
                        <h1>Welcome to BikeInfo. Please choose a station.</h1>
                    </Route>
                </Switch>
            </Router>
        </AppWrapper>
    );
};

export default App;
