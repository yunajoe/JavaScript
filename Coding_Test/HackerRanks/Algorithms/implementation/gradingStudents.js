function gradingStudents(grades) {
  // Create an array to store the rounded grades
  const roundedGrades = [];

  // Loop through each grade and apply the rounding logic
  for (const grade of grades) {
    if (grade < 38) {
      // Grades less than 38 are not rounded
      roundedGrades.push(grade);
    } else {
      const fiveMultiple = Math.ceil(grade / 5) * 5;
      const diff = fiveMultiple - grade;
      // Check if the difference is less than 3 for rounding
      roundedGrades.push(diff < 3 ? fiveMultiple : grade);
    }
  }

  return roundedGrades;
}
