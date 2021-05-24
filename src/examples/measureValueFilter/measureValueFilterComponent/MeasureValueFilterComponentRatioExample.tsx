// (C) 2007-2020 GoodData Corporation
import React from "react";
import { MeasureValueFilter } from "@gooddata/sdk-ui-filters";
import { IMeasureValueFilter, measureLocalId } from "@gooddata/sdk-model";
import { PivotTable } from "@gooddata/sdk-ui-pivot";

import { LdmExt } from "../../../ldm";

const measureTitle = "Franchised Sales in %";

const measures = [LdmExt.FranchisedSalesWithRatio];

const attributes = [LdmExt.LocationName];

const defaultFilter = {
    measureValueFilter: {
        measure: measures,
    },
};

export class MeasureValueFilterComponentRatioExample extends React.PureComponent {
    public state = {
        filters: [],
    };

    public onApply = (filter: IMeasureValueFilter): void => {
        this.setState({ filters: [filter ?? defaultFilter] });
    };

    public render(): React.ReactNode {
        const { filters } = this.state;
        return (
            <React.Fragment>
                <MeasureValueFilter
                    onApply={this.onApply}
                    filter={filters[0]}
                    buttonTitle={measureTitle}
                    warningMessage="The filter uses actual measure values, not percentage."
                    measureIdentifier={measureLocalId(LdmExt.FranchisedSalesWithRatio)}
                />
                <hr className="separator" />
                <div style={{ height: 300 }} className="s-pivot-table">
                    <PivotTable measures={measures} rows={attributes} filters={filters} />
                </div>
            </React.Fragment>
        );
    }
}

export default MeasureValueFilterComponentRatioExample;
