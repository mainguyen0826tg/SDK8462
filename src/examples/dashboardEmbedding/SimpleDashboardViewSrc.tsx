// (C) 2007-2018 GoodData Corporation
import React from "react";
import { DashboardView } from "@gooddata/sdk-ui-ext";
import { idRef } from "@gooddata/sdk-model";
import { MAPBOX_TOKEN } from "../../constants/fixtures";

const dashboardRef = idRef("aagnDx3Bd9AU");
const config = { mapboxToken: MAPBOX_TOKEN };

const SimpleDashboardView: React.FC = () => {
    return <DashboardView dashboard={dashboardRef} config={config} isReadOnly />;
};

export default SimpleDashboardView;
