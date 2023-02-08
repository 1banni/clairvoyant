
const TimeUtil = {
  ReadTime(body) {
    const wordCount = body.join(' ').split(' ').length;
    const minutes = Math.ceil(wordCount / 200);
    const s = minutes > 1 ? 's' : '';
    return `${minutes} min${s}`;
  }
}

export default TimeUtil;