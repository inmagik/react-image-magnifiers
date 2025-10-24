function invertNumber(min: number, max: number, num: number): number {
  return max + min - num;
}

function convertRange(
  oldMin: number,
  oldMax: number,
  newMin: number,
  newMax: number,
  oldValue: number
): number {
  const percent = (oldValue - oldMin) / (oldMax - oldMin);
  const result = percent * (newMax - newMin) + newMin;
  return result || 0;
}

function convertWidthToPx(width: number | string, containerWidth?: number): number {
  if (typeof width === "number") {
    return width;
  }
  if (typeof width !== "string") {
    throw new Error(`Received: ${width} - Size must be a number or string`);
  }
  if (width.substr(-1) === "%") {
    const percent = 100 / Number(width.slice(0, -1));
    return containerWidth! / percent;
  }
  if (width.substr(-2) === "px") {
    return Number(width.slice(0, -2));
  }
  return Number(width);
}

function convertWidthToString(width: number | string): string {
  if (typeof width === "number") {
    return width + "px";
  }
  return width;
}

function noop(): void {}

export default {
  invertNumber,
  convertRange,
  convertWidthToPx,
  convertWidthToString,
  noop
};
