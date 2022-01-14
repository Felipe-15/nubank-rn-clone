declare module 'assets/*' {
    const value: any;
    export = value;
}

declare module '*.png?inline' {
    const content: any;
    export default content;
}

declare module '*.png' {
    const content: any;
    export default content;
}
declare module '*.svg?inline' {
    const content: any;
    export default content;
}

declare module '*.svg' {
    const content: any;
    export default content;
}

declare module '*.jpg' {
    import {ImageSourcePropType} from 'react-native';
    const value: ImageSourcePropType;
    export default value;
}
