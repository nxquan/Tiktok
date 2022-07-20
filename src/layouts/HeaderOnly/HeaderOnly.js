import PropTypes from 'prop-types';
import { Header } from '../components';

function HeaderOnly({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <div className="container">{children}</div>
        </div>
    );
}

HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};
export default HeaderOnly;
