import React from "react";
// @ts-ignore
import "mapbox-gl/dist/mapbox-gl.css";

import DeckGlPlugin from "./MinimalPlugin";

function App() {
  return (
    <DeckGlPlugin />
    // <>
    //   <Routes>
    //     <Route path="/">
    //       <Route path="plugins/network-lead-map" element={<NetworkLeadMap />} />
    //     </Route>
    //   </Routes>

    //   <Outlet />
    // </>
  );
}

export default App;
