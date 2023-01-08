// TODO
// Check BenchBnB for example

export const dateLongForm = (date) => {
  return new Date(date)
    .toLocaleDateString('en-us', {
      day:"numeric",
      year:"numeric",
      month:"long"
  }) // "July 3, 2021"
}