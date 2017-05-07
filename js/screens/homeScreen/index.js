import { connect } from 'react-redux';

import { navigatePush } from '@dataFlow/actions/navActions';
import HomeScreen from './homeScreen';


const mapStateToProps = state => ({

});
function mapDispatchToProps(dispatch) {
	return {
		
	};
}



export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
