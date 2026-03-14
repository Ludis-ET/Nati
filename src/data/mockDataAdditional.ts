import {
  managementCurriculumCourses,
  type ManagementCourse,
} from "./managementCourses";

type GradeLetter = "A-" | "B+" | "B" | "C+";
type GradeValue = GradeLetter | "-";

const STUDENT_PROFILE = {
  fullName: "Natnael Tesfaye Ahmed",
  id: "UU93012R/15",
  department: "Management",
  program: "Undergraduate (Degree)",
  programType: "Regular",
  schoolCenter: "Regular",
};

const gradePointsByLetter: Record<GradeLetter, number> = {
  "A-": 3.75,
  "B+": 3.5,
  B: 3,
  "C+": 2.5,
};

const gradePattern: GradeLetter[] = [
  "B+",
  "B",
  "B+",
  "B",
  "A-",
  "B",
  "B+",
  "C+",
];

const ordinalByLevel = ["1st", "2nd", "3rd", "4th"];
const studentYearLabelByAcademicYear: Record<number, string> = {
  2015: "1st",
  2016: "2nd",
  2017: "3rd",
  2018: "4th",
};

const sortByAcademicTerm = (a: ManagementCourse, b: ManagementCourse) => {
  if (a.year !== b.year) {
    return a.year - b.year;
  }

  return a.term - b.term;
};

const groupedCourses = managementCurriculumCourses
  .slice()
  .sort(sortByAcademicTerm)
  .reduce<Record<string, ManagementCourse[]>>((groups, course) => {
    const key = `${course.year}-${course.term}`;

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(course);
    return groups;
  }, {});

const termKeys = Object.keys(groupedCourses).sort((a, b) => {
  const [yearA, termA] = a.split("-").map(Number);
  const [yearB, termB] = b.split("-").map(Number);

  if (yearA !== yearB) {
    return yearA - yearB;
  }

  return termA - termB;
});

export const mockCourseRegistrations = managementCurriculumCourses
  .slice()
  .sort(sortByAcademicTerm)
  .map((course, index) => ({
    sNo: index + 1,
    id: STUDENT_PROFILE.id,
    name: STUDENT_PROFILE.fullName,
    department: STUDENT_PROFILE.department,
    program: "Undergraduate (Degree)",
    programType: "Regular",
    year: studentYearLabelByAcademicYear[course.year],
    academicYear: String(course.year),
    semester: String(course.term),
    course: `${course.courseCode}-${course.courseName}`,
    paymentSlip: "Payment Invoice",
  }));

export const mockPayments = [
  {
    sNo: "+ 1",
    student: "Natnael Tesfaye Ahmed",
    academicYear: "2015/1",
    refPattern: "PAY-2015-1",
    receiptNumber: "000000600001",
    contactHr: "18",
    amount: "10,420.00",
    group: "Course Registration",
    term: "Full",
    date: "-",
    receipt: "Receipt",
    status: "paid",
  },
  {
    sNo: "+ 2",
    student: "Natnael Tesfaye Ahmed",
    academicYear: "2015/2",
    refPattern: "PAY-2015-2",
    receiptNumber: "000000600002",
    contactHr: "19",
    amount: "9,870.00",
    group: "Course Registration",
    term: "Full",
    date: "-",
    receipt: "Receipt",
    status: "paid",
  },
  {
    sNo: "+ 3",
    student: "Natnael Tesfaye Ahmed",
    academicYear: "2015/3",
    refPattern: "PAY-2015-3",
    receiptNumber: "000000600003",
    contactHr: "20",
    amount: "10,210.00",
    group: "Course Registration",
    term: "Full",
    date: "-",
    receipt: "Receipt",
    status: "paid",
  },
  {
    sNo: "+ 4",
    student: "Natnael Tesfaye Ahmed",
    academicYear: "2016/1",
    refPattern: "PAY-2016-1",
    receiptNumber: "000000600004",
    contactHr: "21",
    amount: "10,970.00",
    group: "Course Registration",
    term: "Full",
    date: "-",
    receipt: "Receipt",
    status: "paid",
  },
  {
    sNo: "+ 5",
    student: "Natnael Tesfaye Ahmed",
    academicYear: "2016/2",
    refPattern: "PAY-2016-2",
    receiptNumber: "000000600005",
    contactHr: "22",
    amount: "11,320.00",
    group: "Course Registration",
    term: "Full",
    date: "-",
    receipt: "Receipt",
    status: "paid",
  },
  {
    sNo: "+ 6",
    student: "Natnael Tesfaye Ahmed",
    academicYear: "2016/3",
    refPattern: "PAY-2016-3",
    receiptNumber: "000000600006",
    contactHr: "23",
    amount: "11,585.00",
    group: "Course Registration",
    term: "Full",
    date: "-",
    receipt: "Receipt",
    status: "paid",
  },
  {
    sNo: "+ 7",
    student: "Natnael Tesfaye Ahmed",
    academicYear: "2017/1",
    refPattern: "PAY-2017-1",
    receiptNumber: "000000600007",
    contactHr: "24",
    amount: "13,785.00",
    group: "Course Registration",
    term: "Full",
    date: "-",
    receipt: "Receipt",
    status: "paid",
  },
  {
    sNo: "+ 8",
    student: "Natnael Tesfaye Ahmed",
    academicYear: "2017/2",
    refPattern: "PAY-2017-2",
    receiptNumber: "000000600008",
    contactHr: "25",
    amount: "14,050.00",
    group: "Course Registration",
    term: "Full",
    date: "-",
    receipt: "Receipt",
    status: "paid",
  },
  {
    sNo: "+ 9",
    student: "Natnael Tesfaye Ahmed",
    academicYear: "2017/3",
    refPattern: "PAY-2017-3",
    receiptNumber: "000000600009",
    contactHr: "26",
    amount: "12,755.00",
    group: "Course Registration",
    term: "Full",
    date: "-",
    receipt: "Receipt",
    status: "paid",
  },
  {
    sNo: "+ 10",
    student: "Natnael Tesfaye Ahmed",
    academicYear: "2017/4",
    refPattern: "PAY-2017-4",
    receiptNumber: "000000600010",
    contactHr: "27",
    amount: "13,790.00",
    group: "Course Registration",
    term: "Full",
    date: "-",
    receipt: "Receipt",
    status: "paid",
  },
  {
    sNo: "+ 11",
    student: "Natnael Tesfaye Ahmed",
    academicYear: "2018/1",
    refPattern: "PAY-2018-1",
    receiptNumber: "000000600011",
    contactHr: "28",
    amount: "17,890.00",
    group: "Course Registration",
    term: "Full",
    date: "-",
    receipt: "Receipt",
    status: "paid",
  },
  {
    sNo: "+ 12",
    student: "Natnael Tesfaye Ahmed",
    academicYear: "2018/2",
    refPattern: "PAY-2018-2",
    receiptNumber: "000000600012",
    contactHr: "29",
    amount: "18,290.00",
    group: "Course Registration",
    term: "Full",
    date: "-",
    receipt: "Receipt",
    status: "paid",
  },
  {
    sNo: "+ 13",
    student: "Natnael Tesfaye Ahmed",
    academicYear: "2018/3",
    refPattern: "PAY-2018-SR",
    receiptNumber: "Pending",
    contactHr: "-",
    amount: "Pending",
    group: "Senior Research",
    term: "Pending",
    date: "-",
    receipt: "Pending",
    status: "unpaid",
  },
  {
    sNo: "+ 14",
    student: "Natnael Tesfaye Ahmed",
    academicYear: "2018/4",
    refPattern: "PAY-2018-4",
    receiptNumber: "Pending",
    contactHr: "-",
    amount: "Pending",
    group: "Course Registration",
    term: "4th Term Pending",
    date: "-",
    receipt: "Pending",
    status: "unpaid",
  },
];

export const mockGradeReports = termKeys
  .map((termKey) => {
    const [academicYear, semester] = termKey.split("-");
    const isPendingTerm =
      academicYear === "2018" && (semester === "2" || semester === "3");
    const courses = groupedCourses[termKey].map((course, index) => {
      const grade: GradeValue = isPendingTerm
        ? "-"
        : gradePattern[(course.sNo + index) % gradePattern.length];
      const pointValue =
        grade === "-" ? 0 : gradePointsByLetter[grade] * course.creditHour;

      return {
        courseCode: course.courseCode,
        courseTitle: course.courseName,
        creditHour: course.creditHour,
        grade,
        gradePoint: Number(pointValue.toFixed(2)),
      };
    });

    const totalCredit = courses.reduce(
      (sum, course) => sum + course.creditHour,
      0,
    );
    const totalPoint = courses.reduce(
      (sum, course) => sum + course.gradePoint,
      0,
    );

    return {
      filters: {
        academicYear,
        semester,
      },
      student: {
        fullName: STUDENT_PROFILE.fullName,
        id: STUDENT_PROFILE.id,
        program: STUDENT_PROFILE.program,
        programType: STUDENT_PROFILE.programType,
        schoolCenter: STUDENT_PROFILE.schoolCenter,
        department: STUDENT_PROFILE.department,
        section: `DE MGMT ${Math.max(1, Number(academicYear) - 2014)}`,
        yearLevel:
          ordinalByLevel[Math.max(0, Math.min(3, Number(academicYear) - 2015))],
      },
      courses,
      totalCredit,
      totalPoint,
      pending: isPendingTerm,
    };
  })
  .reduce<
    Array<{
      filters: { academicYear: string; semester: string };
      student: {
        fullName: string;
        id: string;
        program: string;
        programType: string;
        schoolCenter: string;
        department: string;
        section: string;
        yearLevel: string;
      };
      courses: Array<{
        courseCode: string;
        courseTitle: string;
        creditHour: number;
        grade: GradeValue;
        gradePoint: number;
      }>;
      pending: boolean;
      previousCreditHour: number;
      previousGradePoint: number;
      previousSgpa: number;
      cumulativeGpa: number;
      cumulativeCreditHour: number;
      cumulativeGradePoint: number;
      academicStatus: string;
    }>
  >((reports, entry) => {
    const previous = reports[reports.length - 1];
    const previousCreditHour = previous ? previous.cumulativeCreditHour : 0;
    const previousGradePoint = previous ? previous.cumulativeGradePoint : 0;
    const previousSgpa =
      previousCreditHour === 0
        ? 0
        : Number((previousGradePoint / previousCreditHour).toFixed(2));

    const cumulativeCreditHour = entry.pending
      ? previousCreditHour
      : previousCreditHour + entry.totalCredit;
    const cumulativeGradePoint = entry.pending
      ? previousGradePoint
      : Number((previousGradePoint + entry.totalPoint).toFixed(2));
    const cumulativeGpa = Number(
      (cumulativeGradePoint / Math.max(1, cumulativeCreditHour)).toFixed(2),
    );

    reports.push({
      filters: entry.filters,
      student: entry.student,
      courses: entry.courses,
      pending: entry.pending,
      previousCreditHour,
      previousGradePoint,
      previousSgpa,
      cumulativeGpa,
      cumulativeCreditHour,
      cumulativeGradePoint,
      academicStatus:
        (entry.pending && previous?.academicStatus) ||
        (cumulativeGpa >= 2 ? "Good Standing" : "Probation"),
    });

    return reports;
  }, [])
  .map((report) => {
    if (
      report.filters.academicYear === "2018" &&
      report.filters.semester === "1"
    ) {
      return {
        ...report,
        cumulativeGpa: 3.2,
        cumulativeGradePoint: Number(
          (report.cumulativeCreditHour * 3.2).toFixed(2),
        ),
      };
    }

    return report;
  })
  .sort((a, b) => {
    const yearDiff =
      Number(b.filters.academicYear) - Number(a.filters.academicYear);
    if (yearDiff !== 0) {
      return yearDiff;
    }

    return Number(b.filters.semester) - Number(a.filters.semester);
  });

export const mockGradeReport =
  mockGradeReports.find(
    (report) =>
      report.filters.academicYear === "2018" && report.filters.semester === "3",
  ) ?? mockGradeReports[0];

export const mockAcademicYears = ["2018", "2017", "2016", "2015"];
export const mockSemesters = ["1", "2", "3"];

export const mockDepartmentTransferOptions = {
  campuses: [
    { id: "3", name: "Al-Amoudi-Gerji Campus" },
    { id: "1", name: "Main Campus" },
  ],
  colleges: [
    {
      id: "2",
      campusId: "3",
      name: "Business and Management",
    },
    {
      id: "5",
      campusId: "1",
      name: "Business and Management",
    },
  ],
  departments: [
    { id: "6", collegeId: "2", name: "Management" },
    { id: "8", collegeId: "2", name: "Software Engineering" },
    { id: "14", collegeId: "5", name: "Accounting and Finance" },
  ],
};

export const mockDepartmentTransfers = [
  {
    id: "1900",
    transferToDepartment: "Management (Al-Amoudi-Gerji Campus)",
    fullName: "Natnael Tesfaye Ahmed",
    requestDate: "2024-09-28",
    senderDepartmentApproval: "Accepted",
    senderCollegeApproval: "Accepted",
    senderCollegeApprovalDate: "2024-09-28",
    receiverDepartmentApproval: "Accepted",
    receiverDepartmentDate: "2024-09-28",
    receiverCollegeApproval: "Accepted",
    receiverCollegeApprovalDate: "2024-09-28",
    canCancel: true,
  },
];

export const mockAdmittedStudentsDetailed = [
  {
    sNo: 1,
    fullName: "Natnael Tesfaye Ahmed",
    gender: "Male",
    studentNumber: "UU93012R/15",
    admissionYear: "Sep 01, 2016",
    program: "Undergraduate (Degree)",
    programType: "Regular",
    college: "Engineering, Technology and Computational Sciences",
    department: "Management",
  },
];

export const mockSisManuals: Array<{
  sNo: number;
  title: string;
  releaseDate: string;
  version: string;
  manual: string;
}> = [];

export const mockManagementCurriculumCourses = managementCurriculumCourses.map(
  (course) => ({
    sNo: course.sNo,
    yearTerm: `Year ${course.year - 2014} - Semester ${course.term}`,
    courseName: course.courseName,
    courseCode: course.courseCode,
    creditHour: course.creditHour,
    prerequisite: course.prerequisite,
  }),
);
