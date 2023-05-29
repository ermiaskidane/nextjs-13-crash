'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import LoadingPage from './loading'
import Courses from './components/Courses'
import CourseSearch from './components/CourseSearch'

const HomePage = () => {
  const [courses, setCourses] = useState([])
  // note that loading page is server components that only work
  // automatically but have type manually in client components
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/courses')
      const data = await response.json()
      setCourses(data)
      setLoading(false)
    }
    fetchCourses()
  }, [])

  if (loading) {
    return <LoadingPage />
  }
  return (
    <>
      <h1>Welcome To Traversy Meida</h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </>
  )
}

export default HomePage
