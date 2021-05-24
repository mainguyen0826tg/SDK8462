// (C) 2007-2021 GoodData Corporation
const demoProject: { [domain: string]: string } = {
    "https://secure.gooddata.com": "k26dtejorcqlqf11crn6imbeevp2q4kg",
    "https://staging3.intgdc.com": "y2lwt04m1kb3r4mlclsu39tmvf935vy9",
    "https://staging2.intgdc.com": "hpetksmq4kugtc4dphrtyi74og4yp3t6",
    "https://staging.intgdc.com": "na1q8a0q4efb7cajbgre9mmm776dr1yv",
    "https://developer.na.gooddata.com": "xms7ga4tf3g3nzucd8380o2bev8oeknp",
    "https://live-examples-proxy.herokuapp.com": "xms7ga4tf3g3nzucd8380o2bev8oeknp",
};

const backendUrl = BACKEND_URL;
const demoProjectId = demoProject[backendUrl];

if (!demoProjectId) {
    // eslint-disable-next-line no-console
    console.error(`[fixtures.js] ProjectId for backend "${backendUrl}" is not in `, demoProject);
}

// eslint-disable-next-line no-console
console.log("The /gdc proxy is connected to: ", backendUrl, " with workspace: ", demoProjectId);

// your workspace would be probably static (you may ignore the code above)
export const backendUrlForInfo = backendUrl;
export const workspace = demoProjectId;

export const MAPBOX_TOKEN: string = process.env.EXAMPLE_MAPBOX_ACCESS_TOKEN || BUILTIN_MAPBOX_TOKEN || "";
