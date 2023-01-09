const userIconColors = [
  "#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"
]

const ColorUtil = {
  nameToColor (name) {
    let idx = name.length % userIconColors.length;
    return userIconColors[idx];
  }
}

export default ColorUtil;