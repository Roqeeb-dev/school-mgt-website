import {
  MessageSquareTextIcon,
  Users,
  LucideFilePenLine,
  FileText,
  Check,
  X,
} from "lucide-react";

export const academicData = [
  { label: "Dashboard", to: "/dashboard/academics" },
  { label: "Class", to: "/dashboard/academics/class" },
  { label: "Sections", to: "/dashboard/academics/sections" },
  { label: "Subjects", to: "/dashboard/academics/subjects" },
  { label: "Timetable", to: "/dashboard/academics/timetable" },
  { label: "Attendance", to: "/dashboard/academics/attendance" },
  { label: "Student Leaves", to: "/dashboard/academics/student-leaves" },
  { label: "Study Materials", to: "/dashboard/academics/study-materials" },
  { label: "Homework", to: "/dashboard/academics/homework" },
  { label: "Notice Board", to: "/dashboard/academics/notice-board" },
  { label: "Events", to: "/dashboard/academics/events" },
  { label: "Live Classes (Go pro)", to: "/dashboard/academics/live-classes" },
];

export const schoolmgtData = [
  { label: "Dashboard", to: "/dashboard/school-mgt" },
  { label: "Add Branch", to: "/dashboard/school-mgt/add-branch" },
  { label: "Class", to: "/dashboard/school-mgt/class" },
  { label: "Sessions", to: "/dashboard/school-mgt/sessions" },
];

export const schoolBoxes = [
  { icon: MessageSquareTextIcon, label: "Inquiry" },
  { icon: Users, label: "Interested" },
  { icon: Check, label: "Confirmation" },
  { icon: X, label: "Rejected" },
  { icon: FileText, label: "Shortlisted" },
  { icon: LucideFilePenLine, label: "Admission" },
];

export const MySchoolData = [
  { label: "Dashboard", to: "/dashboard/my-school" },
  { label: "Inquiries", to: "/dashboard/my-school/inquiries" },
];
