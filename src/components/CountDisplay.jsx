import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CountWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NumberDisplay = styled.div`
    font-size: 5rem;
`;

const Title = styled.div`
    font-size: 2rem;
`;

const CountDisplay = ({ title, available, disabled }) => (
    <CountWrapper>
        <Title>{title}</Title>
        <NumberDisplay>{available}</NumberDisplay>
        {disabled !== 0 && <div>{`${disabled} disabled`}</div>}
    </CountWrapper>
);

CountDisplay.propTypes = {
    title: PropTypes.string.isRequired,
    available: PropTypes.number.isRequired,
    disabled: PropTypes.number
};

CountDisplay.defaultProps = {
    disabled: 0
};

export default CountDisplay;
