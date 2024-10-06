declare type SVGIcon = React.VFC<React.SVGProps<SVGSVGElement>>;
declare module '*.svg' {
  const SVG: SVGIcon;
  export default SVG;
}
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
