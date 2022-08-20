declare module "*.svg" {
    import {ReactElement, SVGProps} from "react";
    const content: (props: SVGProps<SVGElement>) => ReactElement;
    export default content;
}

declare module "*.png" {
    const value: string;
    export default value;
}

declare module "*.module.css";
