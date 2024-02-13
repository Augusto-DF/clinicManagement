const INITIAL_EMPLOYEES = [
  { userId: 1, specialty: "Neurologist" },
  { userId: 2, specialty: "General Practitioner" },
];

const empQuery = `
    INSERT INTO employees VALUES (
        null,
        @userId,
        @specialty
    )
`;

exports.empPopulate = { empQuery, INITIAL_EMPLOYEES };
