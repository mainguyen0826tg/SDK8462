// (C) 2007-2018 GoodData Corporation
import React from "react";
import { DashboardView } from "@gooddata/sdk-ui-ext";
import { idRef, newPositiveAttributeFilter } from "@gooddata/sdk-model";
import { Ldm } from "../../ldm";
import { MAPBOX_TOKEN } from "../../constants/fixtures";

const dashboardRef = idRef("aeO5PVgShc0T");
const filters = [
    newPositiveAttributeFilter(Ldm.LocationState, {
        uris: ["/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2210/elements?id=6340116"],
    }),
];
const config = { mapboxToken: MAPBOX_TOKEN };

const DashboardViewWithFilters: React.FC = () => {
    return <DashboardView dashboard={dashboardRef} filters={filters} config={config} isReadOnly />;
};

export default DashboardViewWithFilters;
