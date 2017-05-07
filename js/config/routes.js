import Home from '@screens/homeScreen/';

import React from 'react';

const Routes = (routeKey) => {
    let screen;
    switch (routeKey) {
        case 'home':
            screen = <Home />;
            break;
        default :
          screen = <Home />;
          break;
  }

  return (
    screen
  );
};

export default Routes;