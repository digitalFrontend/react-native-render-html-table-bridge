export interface TableStyleSpecs {
    selectableText: boolean;
    fitContainer: boolean;
    cellPaddingEm: number;
    borderWidthPx: number;
    linkColor: string;
    fontFamily: string;
    tdBorderColor: string;
    thBorderColor: string;
    thOddBackground: string;
    thOddColor: string;
    thEvenBackground: string;
    thEvenColor: string;
    trOddBackground: string;
    trOddColor: string;
    trEvenBackground: string;
    trEvenColor: string;
}
export declare const defaultTableStylesSpecs: TableStyleSpecs;
export default function cssRulesFromSpecs(specs?: TableStyleSpecs): string;
