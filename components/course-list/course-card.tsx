import { Star, Clock, BookOpen, Users } from "lucide-react"
import Link from "next/link"

interface CourseCardProps {
  course: {
    id: number
    title: string
    instructor: string
    price: number
    rating: number
    reviews: number
    image: string
    category: string
    level: string
    duration: string
    lessons: number
    students: number
    featured?: boolean
    new?: boolean
    difficulty: string
  }
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col h-full">
      <div className="relative">
        <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover" />
        <div className="absolute top-3 left-3 flex gap-2">
          {course.featured && (
            <span className="bg-primary text-black text-xs font-bold px-2.5 py-1 rounded-full">Featured</span>
          )}
          {course.new && <span className="bg-blue-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">New</span>}
        </div>
        <div className="absolute bottom-3 right-3">
          <span
            className={`text-xs font-bold px-2.5 py-1 rounded-full capitalize
            ${
              course.difficulty === "beginner"
                ? "bg-green-500/20 text-green-400"
                : course.difficulty === "intermediate"
                  ? "bg-yellow-500/20 text-yellow-400"
                  : "bg-red-500/20 text-red-400"
            }`}
          >
            {course.difficulty}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">{course.category}</span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm ml-1">{course.rating}</span>
            <span className="text-xs text-gray-400 ml-1">({course.reviews})</span>
          </div>
        </div>

        <h3 className="font-bold text-lg mb-2 line-clamp-2">
          <Link href={`/course-detail/${course.id}`} className="hover:text-primary transition-colors">
            {course.title}
          </Link>
        </h3>

        <p className="text-gray-400 text-sm mb-4">
          By <span className="text-white">{course.instructor}</span>
        </p>

        <div className="grid grid-cols-2 gap-2 text-sm text-gray-400 mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-primary" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1 text-primary" />
            <span>{course.lessons} lessons</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1 text-primary" />
            <span>{course.students.toLocaleString()} students</span>
          </div>
          <div className="flex items-center">
            <span className="text-xs px-2 py-1 bg-gray-800 rounded">{course.level}</span>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-800 mt-auto">
          <span className="font-bold text-xl">${course.price.toFixed(2)}</span>
          <Link
            href={`/course-detail/${course.id}`}
            className="bg-primary text-black px-4 py-2 rounded hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            View Course
          </Link>
        </div>
      </div>
    </div>
  )
}
