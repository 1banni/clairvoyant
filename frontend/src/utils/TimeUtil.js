
const TimeUtil = {
  ReadTime(body) {
    console.log('body');
    console.log(body);
    const wordCount = body.join(" ").split(" ").length;
    const minutes = Math.ceil(wordCount / 200);
    const minutesString = minutes > 1 ? " mins" : " min";
    return minutes.toString() + minutesString;
  }
}

export default TimeUtil;