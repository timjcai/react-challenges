export function createRGBValues(percentage) {
  if (percentage < (100/6)) {
    // increase [255, 0-> 255,0] (position 1, to 255)
    return increaseIntensityValue(0,1,percentage);
  } else if (percentage < (100/6)*2) {
    // decrease [255->0, 255, 0] (position 0, to 0)
    return decreaseIntensityValue(1,0,percentage)
  } else if (percentage < (100/6)*3) {
    // increase 0,255,0->255] (position 2, to 255)
    return increaseIntensityValue(1,2,percentage)
  } else if (percentage< (100/6)*4) {
    // decrease [0,255->0,255] (position 1, to 0)
    return decreaseIntensityValue(2,1,percentage)
  } else if (percentage < (100/6)*5) {
    // increase [0->255, 0, 255] (position 0 to 255)
    return increaseIntensityValue(2,0,percentage)
  } else {
    // decrease [255,0,255->0] (position 2 to 0)
    return decreaseIntensityValue(0,2,percentage);
  }
}
export function calcIntensity(percentage) {
  return (percentage % (100/6))/(100/6)
}

export function increaseIntensityValue(maxPosition, varPosition, percentage) {
  const intensity = calcIntensity(percentage)
  const rgb = [0, 0, 0]
  rgb[maxPosition] = 255
  rgb[varPosition] = Math.floor((256 * intensity) - 1)
  return rgb
}

// console.log(increaseIntensityValue(1,2,40))

export function decreaseIntensityValue(maxPosition, varPosition, percentage) {
  const intensity = calcIntensity(percentage)
  const rgb = [0, 0, 0]
  rgb[maxPosition] = 255
  rgb[varPosition] = 256-Math.floor((256 * intensity) - 1)
  return rgb
}

// console.log(decreaseIntensityValue(2,1,54))


// export default colorHandler()
// psuedo code

// take an input

// input will give us a % number
// depending on the % it will place us in a specific range in the color picker
// so let's say we select 5% - it will adjust the RGB color (G from between 0 - 255)
// 5% is in range 0-17%
// 5.1234% will be in range 0-17%
// 5.1234/17 = 30.1%
// 30.1% * 256 = 77.15 we round down (math floor)
// therefore we set the G color to 77.15
// output the colorcode [255,77,0]
