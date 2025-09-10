import {
  MessageSquareTextIcon,
  Users,
  LucideFilePenLine,
  FileText,
  Check,
  X,
} from "lucide-react";

export const academicData = [
  { label: "Dashboard", to: "" },
  { label: "Class", to: "" },
  { label: "Sections", to: "" },
  { label: "Subjects", to: "" },
  { label: "Timetable", to: "" },
  { label: "Attendance", to: "" },
  { label: "Student Leaves", to: "" },
  { label: "Study Materials", to: "" },
  { label: "Homework", to: "" },
  { label: "Notice Board", to: "" },
  { label: "Events", to: "" },
  { label: "Live Classes (Go pro)", to: "" },
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
  { label: "Dashboard", to: "" },
  { label: "Inquiries", to: "" },
];
