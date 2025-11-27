"use client"

// Helper function to generate a random integer in a range
function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Helper function to generate a random element from an array
function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

// Course categories
const categories = [
  "Strength Training",
  "Cardio & HIIT",
  "Yoga & Flexibility",
  "Nutrition & Diet",
  "Mindfulness & Recovery",
  "Group Fitness",
]

// Course levels
const levels = ["Beginner", "Intermediate", "Advanced", "All Levels"]

// Course difficulties (for badge display)
const difficulties = ["beginner", "intermediate", "advanced"]

// Course durations
const durations = ["2 weeks", "4 weeks", "8 weeks", "12 weeks", "16 weeks", "6 months"]

// Course titles
const courseTitles = [
  "Complete Body Transformation: 12-Week Program",
  "30-Day HIIT Challenge for Maximum Fat Loss",
  "Yoga for Strength and Flexibility",
  "Nutrition Masterclass: Meal Planning for Fitness",
  "Strength Training for Beginners",
  "Advanced Powerlifting Techniques",
  "Mindfulness Meditation for Athletes",
  "Core Strength & Stability Workshop",
  "Plant-Based Nutrition for Athletes",
  "Recovery Methods for Optimal Performance",
  "Functional Fitness Fundamentals",
  "Pilates for Core Strength",
  "Marathon Training Program",
  "Mobility & Flexibility Essentials",
  "Weight Management Strategies",
  "Sports Nutrition Fundamentals",
  "Home Workout Bootcamp",
  "Bodyweight Training Essentials",
  "Dynamic Stretching Routines",
  "Kettlebell Training Fundamentals",
]

// Instructors
const instructors = [
  "Alex Morgan",
  "Emma Wilson",
  "David Kim",
  "Aisha Patel",
  "James Wilson",
  "Sophia Chen",
  "Marcus Johnson",
  "Lisa Rodriguez",
  "Carlos Rodriguez",
  "Sarah Johnson",
]

// Course descriptions
const courseDescriptions = [
  "Transform your body with this comprehensive program designed to build muscle, burn fat, and improve overall fitness through progressive strength training and cardio workouts.",
  "Burn maximum calories and accelerate fat loss with this intense challenge featuring quick, effective workouts that can be done anywhere with minimal equipment.",
  "Improve your flexibility, build functional strength, and reduce stress with this beginner-friendly program that progressively builds your practice.",
  "Learn how to fuel your workouts and support your fitness goals with this comprehensive nutrition course covering macronutrients, meal timing, and personalized meal planning.",
  "Start your strength training journey with proper form and technique. This beginner-friendly program gradually introduces you to the fundamentals of resistance training for long-term success.",
  "Take your training to the next level with advanced techniques designed to break through plateaus and maximize your physical potential.",
  "Enhance recovery, focus, and mental toughness with guided meditation sessions specifically designed for active individuals and athletes.",
  "Build a strong, stable core that supports all your movements with this focused program that targets the entire midsection and posterior chain.",
  "Optimize your performance with a plant-based approach to nutrition, including meal planning, supplementation strategies, and recipe ideas.",
  "Learn research-backed recovery strategies to minimize soreness, prevent injury, and maximize training adaptations for better results.",
]

// Generate mock courses
export function mockCourses(count: number) {
  const courses = []

  for (let i = 1; i <= count; i++) {
    const category = getRandomElement(categories)
    const level = getRandomElement(levels)
    const difficulty = getRandomElement(difficulties)
    const duration = getRandomElement(durations)
    const title = getRandomElement(courseTitles)
    const instructor = getRandomElement(instructors)
    const description = getRandomElement(courseDescriptions)

    courses.push({
      id: i,
      title,
      instructor,
      level,
      duration,
      lessons: getRandomInt(10, 50),
      students: getRandomInt(500, 10000),
      rating: Number.parseFloat((Math.random() * (5 - 3.5) + 3.5).toFixed(1)),
      reviews: getRandomInt(50, 500),
      image: `/placeholder.svg?height=${400}&width=${600}`,
      price: Number.parseFloat((Math.random() * (199.99 - 19.99) + 19.99).toFixed(2)),
      category,
      featured: Math.random() > 0.8, // 20% chance to be featured
      new: Math.random() > 0.85, // 15% chance to be new
      difficulty,
      description,
      tags: [category, level, difficulty],
      date: new Date(),
      enrollments: getRandomInt(100, 500),
    })
  }

  return courses
}
