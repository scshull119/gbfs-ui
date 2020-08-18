import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'react-select';
import { infoPropTypes } from '../propTypes';

const Wrapper = styled.div`
    width: 20rem;
`;

const StationSelectContainer = (props) => {
    const {
        station,
        setStation,
        stationsInfo
    } = props;

    const selectValue = useMemo(
        () => stationsInfo && { value: station, label: stationsInfo[station].name },
        [station, stationsInfo]
    );

    const selectOptions = useMemo(() => {
        if (stationsInfo === null) {
            return [];
        }
        const options = [];
        for (let id of Object.keys(stationsInfo)) {
            options.push({ value: id, label: stationsInfo[id].name });
        }
        return options;
    }, [stationsInfo]);

    const onSelectChange = useCallback((opt) => {
        setStation(opt.value);
    }, [setStation]);

    return (
        <Wrapper>
            <Select
                value={selectValue}
                options={selectOptions}
                onChange={onSelectChange}
                isDisabled={!stationsInfo}
            />
        </Wrapper>
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
