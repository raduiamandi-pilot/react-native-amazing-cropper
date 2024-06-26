import React from 'react';
import { PanResponderInstance } from 'react-native';
interface CropperProps {
    imageUri: string;
    footerComponent: JSX.Element;
    getTopOuterStyle: () => object;
    getLeftOuterStyle: () => object;
    getBottomOuterStyle: () => object;
    getRightOuterStyle: () => object;
    getTopLeftStyle: () => object;
    getBottomLeftStyle: () => object;
    getBottomRightStyle: () => object;
    getTopRightStyle: () => object;
    getTopSideStyle: () => object;
    getLeftSideStyle: () => object;
    getBottomSideStyle: () => object;
    getRightSideStyle: () => object;
    getRectangleStyle: () => object;
    getImageStyle: () => object;
    onDone: () => void;
    onRotate: () => void;
    onCancel: () => void;
    topOuterPanResponder: PanResponderInstance;
    leftOuterPanResponder: PanResponderInstance;
    bottomOuterPanResponder: PanResponderInstance;
    rightOuterPanResponder: PanResponderInstance;
    topPanResponder: PanResponderInstance;
    leftPanResponder: PanResponderInstance;
    bottomPanResponder: PanResponderInstance;
    rightPanResponder: PanResponderInstance;
    topLeftPanResponder: PanResponderInstance;
    bottomLeftPanResponder: PanResponderInstance;
    bottomRightPanResponder: PanResponderInstance;
    topRightPanResponder: PanResponderInstance;
    rectanglePanResponder: PanResponderInstance;
    topOuterRef: (ref: any) => any;
    leftOuterRef: (ref: any) => any;
    bottomOuterRef: (ref: any) => any;
    rightOuterRef: (ref: any) => any;
    COMPONENT_WIDTH: number;
    COMPONENT_HEIGHT: number;
    W: number;
    H: number;
}
declare const Cropper: React.FC<CropperProps>;
export default Cropper;