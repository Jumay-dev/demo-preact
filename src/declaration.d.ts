declare module "*.css" {
    const mapping: Record<string, string>;
    export default mapping;
}
declare module "mobx-preact" {
    import { ComponentConstructor, FunctionalComponent } from "preact"
    type FunctionalComponent<P = any> = ComponentConstructor<P>
    export function observer<T extends Component>(target: T): T
  }
  
  declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}