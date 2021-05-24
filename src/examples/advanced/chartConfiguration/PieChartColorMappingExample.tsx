// (C) 2007-2019 GoodData Corporation
import React from "react";
import { PieChart, IChartConfig } from "@gooddata/sdk-ui-charts";
import { LdmExt } from "../../../ldm";
import { HeaderPredicates } from "@gooddata/sdk-ui";
import { modifyMeasure } from "@gooddata/sdk-model";

const measures = [
    modifyMeasure(LdmExt.FranchiseFeesAdRoyalty, (m) => m.localId("franchiseFeesAdRoyaltyIdentifier")),
    modifyMeasure(LdmExt.FranchiseFeesInitialFranchiseFee, (m) =>
        m.localId("franchiseFeesInitialFranchiseFeeIdentifier"),
    ),
    modifyMeasure(LdmExt.FranchiseFeesOngoingRoyalty, (m) =>
        m.localId("franchiseFeesIdentifierOngoingRoyalty"),
    ),
];

const chartConfig: IChartConfig = {
    colorMapping: [
        {
            predicate: HeaderPredicates.localIdentifierMatch("franchiseFeesAdRoyaltyIdentifier"),
            color: {
                type: "guid",
                value: "5",
            },
        },
        {
            predicate: HeaderPredicates.localIdentifierMatch("franchiseFeesIdentifierOngoingRoyalty"),
            color: {
                type: "rgb",
                value: {
                    r: 0,
                    g: 0,
                    b: 0,
                },
            },
        },
    ],
};

const style = { height: 300 };

export const PieChartColorMappingExample: React.FC = () => {
    return (
        <div style={style} className="s-pie-chart">
            <PieChart measures={measures} config={chartConfig} />
        </div>
    );
};
