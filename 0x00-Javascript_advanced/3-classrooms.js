/* JS script that creates a classroom */

function createClassRoom(numberOfStudents) {
  function studentSeat (seat) {
    return () => seat;
  }
  let students = [];

  for (let count = 1; count <= numberOfStudents; count++) {
    students.push(studentSeat(count));
  }
  return students;
}

classRoom = createClassRoom(10);
