import { PureComponent, ComponentType } from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';
import cssRulesFromSpecs, { TableStyleSpecs, defaultTableStylesSpecs } from './css-rules';
export { IGNORED_TAGS, TABLE_TAGS } from './tags';
export { TableStyleSpecs, defaultTableStylesSpecs, cssRulesFromSpecs };
export interface TableConfig<WebViewProps = any> {
    /**
     * The `WebView` Component you wish to use.
     *
     * **Warning** Features such as `autoheight` and `onLinkPress` don't work with legacy, core version.
     * Please use latest community version instead, https://github.com/react-native-community/react-native-webview
     */
    WebViewComponent: ComponentType<WebViewProps>;
    /**
     * Fit height to HTML content.
     *
     * **default** `true`
     *
     * **Warning** Works with `WebView` community edition &ge;5.0.0 and Expo SDK &ge;33.
     */
    autoheight?: boolean;
    /**
     * If `autoheight` is set to `true`, the container will span to `defaultHeight` during content height computation.
     * Otherwise, container height will be fixed to `defaultHeight` before and after height computation.
     */
    defaultHeight?: number;
    /**
     * Maximum container height.
     * Content will be scrollable on overflow.
     */
    maxHeight?: number;
    /**
     * Container style.
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Specs to generate css rules.
     *
     * **Info**: ignored if `cssRules` are provided.
     */
    tableStyleSpecs?: TableStyleSpecs;
    /**
     * Override default CSS rules with this prop.
     */
    cssRules?: string;
    /**
     * Any props you'd like to pass to WebView component
     *
     * **Info**: `source`, `injectedJavascript`, `javascriptEnabled` and `onMessage`
     * will be ignored and overriden.
     */
    webViewProps?: WebViewProps;
    /**
     * Use native `LayoutAnimation` instead of `Animated` module with `autoheight`
     *
     * **Info**: It requires some setup on Android.
     */
    useLayoutAnimations?: boolean;
    /**
     * The transition duration in milliseconds when table height is updated when `autoheight` is used.
     *
     * **default**: `120`
     */
    transitionDuration?: number;
    /**
     * See https://git.io/JeCAG
     */
    sourceBaseUrl?: string;
}
export interface HTMLTableBaseProps {
    /**
     * The outerHtml of <table> tag.
     */
    html: string;
    /**
     * Intercept links press.
     *
     * **Info**: `makeTableRenderer` uses `<HTML>onLinkPress` prop.
     */
    onLinkPress?: (url: string) => void;
    /**
     * Renderers props.
     */
    renderersProps: any;
}
export interface HTMLTablePropsWithStats extends HTMLTableBaseProps {
    /**
     * Number of rows, header included
     */
    numOfRows: number;
    /**
     * Number of columns.
     */
    numOfColumns: number;
    /**
     * Number of text characters.
     */
    numOfChars: number;
}
interface State {
    containerHeight: number;
    animatedHeight: Animated.Value;
}
export interface HTMLTableProps<WVP> extends TableConfig<WVP>, HTMLTablePropsWithStats {
}
export default class HTMLTable<WVP extends Record<string, any>> extends PureComponent<HTMLTableProps<WVP>, State> {
    static defaultProps: Partial<Record<keyof HTMLTableProps<any>, any>>;
    static propTypes: Record<keyof HTMLTableProps<any>, any>;
    private oldContainerHeight;
    constructor(props: HTMLTableProps<WVP>);
    private handleOnMessage;
    private buildHTML;
    private computeHeightHeuristic;
    private findHeight;
    componentDidUpdate(_oldProps: HTMLTableProps<WVP>, oldState: State): void;
    render(): JSX.Element;
}
