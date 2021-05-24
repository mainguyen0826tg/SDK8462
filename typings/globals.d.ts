// Globals injected by webpack
declare module "*.png" {
    const contents: string;
    export = contents;
}
declare module "*.svg" {
    const contents: string;
    export = contents;
}
declare module "*.ico" {
    const contents: string;
    export = contents;
}

declare const BACKEND_URL: string;
declare const BASEPATH: string;
declare const BUILTIN_MAPBOX_TOKEN: string;
declare const BUILD_TYPE: string;
