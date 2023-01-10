
const TimeUtil = {
  ReadTime(body) {
    console.log('body');
    console.log(body);
    const wordCount = body.join(" ").split(" ").length;
    const minutes = Math.ceil(wordCount / 200);

    return minutes.toString() + ' mins';
  }
}

export default TimeUtil;