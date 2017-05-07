
import React, { Component, PropTypes } from 'react';
import { BackAndroid, NavigationExperimental , Linking} from 'react-native';
import { connect } from 'react-redux';

import Routes  from '@config/routes';
import { navigatePop, navigatePush } from '@dataFlow/actions/navActions';

const { CardStack: NavigationCardStack } = NavigationExperimental;

class App extends Component {
  constructor(props) {
    super(props);
    this.handleBackButton = this.handleBackButton.bind(this);
    this.handleExternalUrlCall = this.handleExternalUrlCall.bind(this);
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton(){
    this.props.backAction();
    return true;
  }

  handleExternalUrlCall(event)
  {
    this.props.forwardToExternalUrlHandler(event.url);
  }

  renderScene({scene}) {
		const { route } = scene;
		return Routes(route.key);
	}

  render() {
    let { navigationState, backAction } = this.props;
    return (
      <NavigationCardStack
          navigationState={navigationState}
          onNavigateBack={backAction}
          renderOverlay={this._renderOverlay}
          renderScene={this.renderScene}
        />
    );
  }
}

App.propTypes = {
	navigationState: PropTypes.object,
	backAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
		navigationState: state.navigationState
});
const dispatchState = dispatch => ({
		backAction: () => {
			dispatch(navigatePop());
		}
});

export default connect(mapStateToProps, dispatchState)(App);
