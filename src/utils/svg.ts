export const getBase64Svg = (svgXml: string): string => {
  console.log({ svgXml });
  const preparedSvg = encodeURIComponent(svgXml)
    .replace(/'/g, "%27")
    .replace(/"/g, "%22");

  const base64Svg = btoa(preparedSvg);
  return `data:image/svg+xml;base64,${base64Svg}`;
};
