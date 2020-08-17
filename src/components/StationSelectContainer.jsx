import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { infoPropTypes } from '../propTypes';

const onSelectChange = (val) => {
    console.log('Select changed');
    console.log(val);
}

const StationSelectContainer = (props) => {
    const {
        station,
        setStation,
        stationsInfo
    } = props;

    const selectOptions = useMemo(() => {
        if (stationsInfo === null) {
            return [{ value: station, label: 'Loading...' }];
        }
        const options = [];
        for (let id of Object.keys(stationsInfo)) {
            options.push({ value: id, label: stationsInfo[id].name });
        }
        return options;
    }, [stationsInfo]);

    return (
        <Select
            options={selectOptions}
            onChange={onSelectChange}
        />
    );
};

StationSelectContainer.propTypes = {
    station: PropTypes.string.isRequired,
    setStation: PropTypes.func.isRequired,
    stationsInfo: PropTypes.objectOf(infoPropTypes),
};

StationSelectContainer.defaultProps = {
    stationsInfo: null
};

export default StationSelectContainer;
