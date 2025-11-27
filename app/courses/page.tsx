import CoursesHero from "@/components/courses/courses-hero"
import CourseCategories from "@/components/courses/course-categories"
import FeaturedCourses from "@/components/courses/featured-courses"
import CoursesBenefits from "@/components/courses/courses-benefits"
import InstructorSpotlight from "@/components/courses/instructor-spotlight"
import CourseTestimonials from "@/components/courses/course-testimonials"
import CourseFAQ from "@/components/courses/course-faq"
import EnrollCTA from "@/components/courses/enroll-cta"
import PopularTags from "@/components/courses/popular-tags"
import BackToTop from "@/components/courses/back-to-top"
import FloatingCTA from "@/components/courses/floating-cta"

export const metadata = {
  title: "Fitness Courses | FitLife",
  description: "Explore our expert-led fitness courses designed to help you achieve your wellness goals",
}

export default function CoursesPage() {
  return (
    <div className="bg-black text-white pt-20 overflow-x-hidden">
      <CoursesHero />
      <CourseCategories />
      <FeaturedCourses />
      <CoursesBenefits />
      <PopularTags />
      <InstructorSpotlight />
      <CourseTestimonials />
      <CourseFAQ />
      <EnrollCTA />
      <BackToTop />
      <FloatingCTA />
    </div>
  )
}
