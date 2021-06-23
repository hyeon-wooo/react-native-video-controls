import React from "react";
import { ViewStyle } from "react-native";


export interface Props {
    toggleResizeModeOnFullscreen?: boolean;
    controlAnimationTiming?: number;
    doubleTapTime?: number;
    playInBackground?: boolean;
    playWhenInactive?: boolean;
    resizeMode?: "stretch" | "contain" | "cover" | "none";
    isFullscreen?: boolean;
    showOnStart?: boolean;
    paused?: boolean;
    repeat?: boolean;
    muted?: boolean;
    volume?: number;
    title?: string;
    rate?: number;
    source: { uri?: string, headers?: {[key: string]: string } } | number;
    style?: ViewStyle
    disableBack?: boolean;

    onBack: () => void;
}

export default class VideoPlayer extends React.Component<Props> {

}