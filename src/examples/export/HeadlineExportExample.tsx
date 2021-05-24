// (C) 2007-2019 GoodData Corporation
import React from "react";
import { Headline } from "@gooddata/sdk-ui-charts";
import { newAbsoluteDateFilter } from "@gooddata/sdk-model";

import { ExampleWithExport } from "./ExampleWithExport";
import { Ldm, LdmExt } from "../../ldm";

const primaryMeasure = LdmExt.FranchiseFees;

const secondaryMeasure = LdmExt.FranchiseFeesAdRoyalty;

const filters = [newAbsoluteDateFilter(Ldm.DateDatasets.Date, "2017-01-01", "2017-12-31")];

const style = { display: "flex" };

export const HeadlineExportExample: React.FC = () => {
    return (
        <ExampleWithExport filters={filters}>
            {(onExportReady) => (
                <div className="s-headline" style={style}>
                    <Headline
                        primaryMeasure={primaryMeasure}
                        secondaryMeasure={secondaryMeasure}
                        filters={filters}
                        onExportReady={onExportReady}
                    />
                </div>
            )}
        </ExampleWithExport>
    );
};

export default HeadlineExportExample;
