import PropTypes from 'prop-types';

export const statusPropTypes = PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    bikesAvailable: PropTypes.number.isRequired,
    docksAvailable: PropTypes.number.isRequired,
    bikesDisabled: PropTypes.number.isRequired,
    docksDisabled: PropTypes.number.isRequired,
    eBikesAvailable: PropTypes.number.isRequired,
    renting: PropTypes.bool.isRequired,
    returning: PropTypes.bool.isRequired,
    lastReported: PropTypes.number.isRequired,
});
