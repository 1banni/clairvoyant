
const TimeUtil = {
  ReadTime(body) {
    const wordCount = body.join(" ").split(" ").length;
    const minutes = Math.ceil(wordCount / 200);
    return minutes.toString() + " min read";
  }
}

export default TimeUtil;