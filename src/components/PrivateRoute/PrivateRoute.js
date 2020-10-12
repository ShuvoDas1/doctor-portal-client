import React from 'react';
import { userContext } from '../../App';

const PrivateRoute = ({children,...rest}) => {
    const [loggedInUser,setLoggedInUser] = useState(userContext)
    return (
        <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email || localStorage.getItem("token") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;