import {
  MessageSquareTextIcon,
  Users,
  LucideFilePenLine,
  FileText,
  Check,
  X,
  Eye,
  Database,
  LayoutDashboard,
  LifeBuoy,
  Building2,
  Settings,
  CreditCard,
  User,
  Briefcase,
  IdCard,
  GraduationCap,
  UserCheck,
  BookOpen,
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

export const sideLinksData = [
  { to: "/dashboard", icon: Eye, label: "Dashboard" },
  { to: "/my-school", icon: Database, label: "My School" },
  {
    to: "/management-dashboard",
    icon: LayoutDashboard,
    label: "Management Dashboard",
  },
  { to: "/users-management", icon: Users, label: "Users Management" },
  { to: "/supports", icon: LifeBuoy, label: "Supports" },
  { to: "/organization", icon: Building2, label: "Organization" },
  { to: "/settings", icon: Settings, label: "Settings" },
  { to: "/billing", icon: CreditCard, label: "Billing" },
  { to: "/profiles", icon: User, label: "Profiles" },
  {
    to: "/organization-profile",
    icon: Briefcase,
    label: "Organization Profile",
  },
];

export const mySchoolDashboardData = [
  { icon: GraduationCap, label: "Students" },
  { icon: Users, label: "Teachers" },
  { icon: UserCheck, label: "Parents" },
  { icon: BookOpen, label: "Academics" },
  { icon: FileText, label: "Class" },
  { icon: Settings, label: "Settings" },
  { icon: IdCard, label: "Card" },
];
