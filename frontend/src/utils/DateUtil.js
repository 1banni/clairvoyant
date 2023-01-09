// TODO
// Check BenchBnB for example

const DateUtil = {
  longForm (date) {
    let options = {
      day:"numeric",
      month:"long"
    };

    let dateObj = new Date(date);
    if (dateObj.getFullYear() !== 2023) options.year = "numeric";
    return dateObj.toLocaleDateString('en-us', options);
  }
}

export default DateUtil;