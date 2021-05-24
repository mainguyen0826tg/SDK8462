// (C) 2007-2019 GoodData Corporation
import React, { Component } from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { HeaderPredicates, IDrillEvent } from "@gooddata/sdk-ui";
import { attributeIdentifier, measureIdentifier, ITotal } from "@gooddata/sdk-model";
import isNil from "lodash/isNil";

import { LdmExt, Ldm } from "../../ldm";

const measures = [
    LdmExt.FranchiseFees,
    LdmExt.FranchiseFeesAdRoyalty,
    LdmExt.FranchiseFeesOngoingRoyalty,
    LdmExt.FranchiseFeesInitialFranchiseFee,
];

const attributes = [LdmExt.LocationState, LdmExt.LocationName, LdmExt.MenuCategory];

const columns = [LdmExt.quarterDate, LdmExt.monthDate];

const totals: ITotal[] = [
    {
        measureIdentifier: "franchiseFees",
        type: "sum",
        attributeIdentifier: "state",
    },
    {
        measureIdentifier: "franchiseFeesAdRoyalty",
        type: "sum",
        attributeIdentifier: "state",
    },
    {
        measureIdentifier: "franchiseFees",
        type: "max",
        attributeIdentifier: "state",
    },
    {
        measureIdentifier: "franchiseFees",
        type: "sum",
        attributeIdentifier: "menu",
    },
    {
        measureIdentifier: "franchiseFeesAdRoyalty",
        type: "sum",
        attributeIdentifier: "menu",
    },
];

const drillableItems = [
    HeaderPredicates.identifierMatch(attributeIdentifier(Ldm.MenuCategory)!),
    HeaderPredicates.identifierMatch(measureIdentifier(Ldm.$FranchiseFees)!),
];

interface IPivotTableDrillExampleState {
    drillEvent: IDrillEvent | null;
}

export class PivotTableDrillExample extends Component<unknown, IPivotTableDrillExampleState> {
    state: IPivotTableDrillExampleState = {
        drillEvent: null,
    };

    public onDrill = (drillEvent: IDrillEvent): boolean => {
        // eslint-disable-next-line no-console
        console.log(
            "onFiredDrillEvent",
            drillEvent,
            JSON.stringify(drillEvent.drillContext.intersection, null, 2),
        );
        this.setState({
            drillEvent,
        });
        return true;
    };

    public renderDrillValue = (): React.ReactNode => {
        const { drillEvent } = this.state;

        if (!drillEvent) {
            return null;
        }

        const drillColumn =
            drillEvent.drillContext.row && drillEvent.drillContext.columnIndex
                ? drillEvent.drillContext.row[drillEvent.drillContext.columnIndex]
                : undefined;

        const drillValue = !isNil(drillColumn) ? drillColumn.name : drillColumn;

        return (
            <h3>
                You have Clicked <span className="s-drill-value">{drillValue}</span>{" "}
            </h3>
        );
    };

    public render(): React.ReactNode {
        return (
            <div>
                {this.renderDrillValue()}
                <div style={{ height: 600 }} className="s-pivot-table-drill">
                    <PivotTable
                        measures={measures}
                        rows={attributes}
                        columns={columns}
                        pageSize={20}
                        drillableItems={drillableItems}
                        onDrill={this.onDrill}
                        totals={totals}
                    />
                </div>
            </div>
        );
    }
}

export default PivotTableDrillExample;
