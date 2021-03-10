// import React from "react";
// import { Route, Redirect } from "react-router-dom";

// export function IsUserRedirect({ user, loggedInpath, children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       //    render={() => {
//       //     if (!user) {
//       //       return children;
//       //     } else if (user) {
//       //       return <Redirect to={{ pathname: loggedInpath }} />;
//       //     } else return null;
//       //   }}
//       path={children}
//     />
//   );
// }

// // export function ProtectedRoute({ user, children, signInPage, ...rest }) {
// //   return (
// //     <Route
// //       {...rest}
// //       render={({ location }) => {
// //         console.log(location);
// //         if (user) {
// //           return children;
// //         } else if (!user) {
// //           return (
// //             <Redirect
// //               to={{
// //                 pathname: signInPage,
// //               }}
// //             />
// //           );
// //         } else return null;
// //       }}
// //     />
// //   );
// // }
