// (C) 2007-2019 GoodData Corporation
import React, { useState } from "react";
import { BarChart } from "@gooddata/sdk-ui-charts";

import Measure from "react-measure";

import { Ldm, LdmExt } from "../../../ldm";

interface IResponsiveExampleState {
    size: [number, number];
}

export const ResponsiveExample: React.FC = () => {
    const [
        {
            size: [width, height],
        },
        setState,
    ] = useState<IResponsiveExampleState>({ size: [500, 400] });

    const resize = (size: [number, number]) => setState({ size });

    return (
        <div>
            <button onClick={() => resize([500, 400])} className="gd-button gd-button-secondary">
                500x400
            </button>
            <button
                onClick={() => resize([800, 200])}
                className="gd-button gd-button-secondary s-resize-800x200"
            >
                800x200
            </button>

            <hr className="separator" />

            <div style={{ width, height }} className="s-resizable-vis">
                <Measure client>
                    {({ measureRef, contentRect }) => {
                        const usedHeight =
                            contentRect.client && contentRect.client.height
                                ? Math.floor(contentRect.client.height)
                                : 0;
                        return (
                            <div style={{ width: "100%", height: "100%" }} ref={measureRef}>
                                <BarChart
                                    height={usedHeight}
                                    measures={[LdmExt.TotalSales1]}
                                    viewBy={Ldm.LocationResort}
                                    stackBy={Ldm.DateMonth.Short}
                                />
                            </div>
                        );
                    }}
                </Measure>
            </div>
        </div>
    );
};
