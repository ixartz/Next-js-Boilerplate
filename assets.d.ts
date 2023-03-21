declare module '*.svg' {
  const ReactComponent: React.FunctionComponent<
    React.SVGAttributes<SVGElement>
  >;
  export { ReactComponent };
}
declare module '*.jpg';
declare module '*.png';
declare module '*.webp';
