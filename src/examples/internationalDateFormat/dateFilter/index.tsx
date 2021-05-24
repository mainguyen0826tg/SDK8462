// (C) 2007-2019 GoodData Corporation
/* eslint-disable import/no-unresolved,import/default */
import React from "react";

import { ExampleWithSource } from "../../../components/ExampleWithSource";

import { DateFilterComponentExample_DDMMYYYY } from "./DateFilterComponentExample_DDMMYYYY";
import DateFilterComponentExample_DDMMYYYYSRC from "!raw-loader!./DateFilterComponentExample_DDMMYYYY";
import DateFilterComponentExample_DDMMYYYYSRCJS from "!raw-loader!../../../../examplesJS/internationalDateFormat/dateFilter/DateFilterComponentExample_DDMMYYYY";

import { DateFilterComponentExample_MDYY } from "./DateFilterComponentExample_MDYY";
import DateFilterComponentExample_MDYYSRC from "!raw-loader!./DateFilterComponentExample_MDYY";
import DateFilterComponentExample_MDYYSRCJS from "!raw-loader!../../../../examplesJS/internationalDateFormat/dateFilter/DateFilterComponentExample_MDYY";

import { DateFilterWithColumnChartExample_DDMMYYYY } from "./DateFilterWithColumnChartExample_DDMMYYYY";
import DateFilterWithColumnChartExample_DDMMYYYYSRC from "!raw-loader!./DateFilterWithColumnChartExample_DDMMYYYY";
import DateFilterWithColumnChartExample_DDMMYYYYSRCJS from "!raw-loader!../../../../examplesJS/internationalDateFormat/dateFilter/DateFilterWithColumnChartExample_DDMMYYYY";

import { DateFilterWithColumnChartExample_MDYY } from "./DateFilterWithColumnChartExample_MDYY";
import DateFilterWithColumnChartExample_MDYYSRC from "!raw-loader!./DateFilterWithColumnChartExample_MDYY";
import DateFilterWithColumnChartExample_MDYYSRCJS from "!raw-loader!../../../../examplesJS/internationalDateFormat/dateFilter/DateFilterWithColumnChartExample_MDYY";

export const InternationalDateFilterExample: React.FC = () => (
    <div>
        <h1>Date Filter</h1>

        <p>
            These examples show how to pass dateFormat property to a DateFilter component for dates to be
            displayed in the desired format. For more details about date formats, please see{" "}
            <a href="https://date-fns.org/docs/format" target="_blank" rel="noopener noreferrer">
                here
            </a>
            .
        </p>

        <hr className="separator" />

        <h2>DateFilter with dates displayed in dd/MM/yyyy format</h2>
        <p>This example shows a full-featured date filter component.</p>
        <ExampleWithSource
            for={DateFilterComponentExample_DDMMYYYY}
            source={DateFilterComponentExample_DDMMYYYYSRC}
            sourceJS={DateFilterComponentExample_DDMMYYYYSRCJS}
        />

        <h2>DateFilter with dates displayed in M/d/yy format</h2>
        <p>This example shows a full-featured date filter component.</p>
        <ExampleWithSource
            for={DateFilterComponentExample_MDYY}
            source={DateFilterComponentExample_MDYYSRC}
            sourceJS={DateFilterComponentExample_MDYYSRCJS}
        />

        <h2>Filtering a report with dates displayed in dd/MM/yyyy format</h2>
        <p>
            This example shows how to add date filter component into a report. Presets and floating range form
            is restricted to years.
        </p>
        <ExampleWithSource
            for={DateFilterWithColumnChartExample_DDMMYYYY}
            source={DateFilterWithColumnChartExample_DDMMYYYYSRC}
            sourceJS={DateFilterWithColumnChartExample_DDMMYYYYSRCJS}
        />

        <h2>Filtering a report with dates displayed in M/d/yy format</h2>
        <p>
            This example shows how to add date filter component into a report. Presets and floating range form
            is restricted to years.
        </p>
        <ExampleWithSource
            for={DateFilterWithColumnChartExample_MDYY}
            source={DateFilterWithColumnChartExample_MDYYSRC}
            sourceJS={DateFilterWithColumnChartExample_MDYYSRCJS}
        />
    </div>
);
