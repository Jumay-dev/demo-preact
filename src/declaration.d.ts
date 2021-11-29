declare module "*.css" {
    const mapping: Record<string, string>;
    export default mapping;
}

declare module "mobx-preact" {
    import { ComponentConstructor } from "preact"
    type Component<P = any> = ComponentConstructor<P>
    export function observer<T extends Component>(target: T): T
  }