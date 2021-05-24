// (C) 2007-2019 GoodData Corporation
import React from "react";
import { Kpi } from "@gooddata/sdk-ui";
import { Ldm } from "../../ldm";

export const KpiExample = (): JSX.Element => {
    return (
        <div className="kpi">
            <style jsx>{`
                .kpi {
                    margin: 10px 0;
                    font-size: 50px;
                    white-space: nowrap;
                    vertical-align: bottom;
                    text-align: center;
                    min-width: 300px;
                    line-height: 1.2em;
                    font-weight: 700;
                    width: 300px;
                }
            `}</style>
            <Kpi measure={Ldm.$TotalSales} />
        </div>
    );
};
