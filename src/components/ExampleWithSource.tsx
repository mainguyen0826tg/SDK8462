// (C) 2007-2019 GoodData Corporation
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from "react";
import { SourceContainer } from "./SourceContainer";

interface ISourceSectionProps {
    source: string;
    sourceJS?: string;
}

interface IExampleWithSourceProps extends ISourceSectionProps {
    for: React.ComponentType;
}

const SourceSection: React.FC<ISourceSectionProps> = ({ source, sourceJS }) => {
    const [hidden, setState] = useState(true);
    const [viewJS, setViewJS] = useState(true);
    const switchLang = (switchToJS: boolean) => setViewJS(switchToJS);
    const iconClassName = hidden ? "gd-icon-navigatedown" : "gd-icon-navigateup";

    return (
        <div className="source">
            <style jsx>{`
                .source {
                    margin: 20px 0;
                }

                :global(pre) {
                    overflow: auto;
                }

                .gd-source-button {
                    font-family: Avenir, "Helvetica Neue", arial, sans-serif;
                    text-transform: none;
                }

                .gd-source-button:focus {
                    border-color: rgba(20, 178, 226, 0.75);
                }

                --gd-shadow-color: initial;
                --gd-palette-complementary-0: initial;
                --gd-palette-complementary-1: initial;
                --gd-palette-complementary-2: initial;
                --gd-palette-complementary-3: initial;
                --gd-palette-complementary-4: initial;
                --gd-palette-complementary-5: initial;
                --gd-palette-complementary-6: initial;
                --gd-palette-complementary-7: initial;
                --gd-palette-complementary-8: initial;
                --gd-palette-complementary-9: initial;
            `}</style>
            <button
                className={`gd-button gd-button-secondary button-dropdown icon-right gd-source-button ${iconClassName}`}
                onClick={() => setState(!hidden)}
            >
                source code
            </button>
            {hidden ? (
                ""
            ) : (
                <SourceContainer toggleIsJS={switchLang} isJS={viewJS} source={source} sourceJS={sourceJS} />
            )}
        </div>
    );
};

export const ExampleWithSource: React.FC<IExampleWithSourceProps> = ({
    for: Component,
    source,
    sourceJS,
}) => {
    return (
        <div className="example-with-source">
            <style jsx>{`
                .example-with-source {
                    flex: 1 0 auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: stretch;
                    margin-top: 30px;
                }

                .example {
                    padding: 20px;
                    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
                    background-color: var(--gd-palette-complementary-0, #fff);
                }
            `}</style>
            <div className="example">
                <Component />
            </div>
            <SourceSection source={source} sourceJS={sourceJS} />
        </div>
    );
};
