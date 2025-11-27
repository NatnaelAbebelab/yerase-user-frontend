import CourseListHeader from "@/components/course-list/course-list-header"
import CourseListContainer from "@/components/course-list/course-list-container"

export const metadata = {
  title: "Fitness Course List | FitLife",
  description: "Explore our expert-led fitness courses designed to help you achieve your wellness goals",
}
export default function CourseListPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <CourseListHeader />
      <CourseListContainer />
    </main>
  )
}
