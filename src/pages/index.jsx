import 'swiper/css'
import Head from 'next/head'

import Hero from 'components/hero'
import Brands from 'components/brands'
import PopularCourses from 'components/popular-courses'
import BookOurCourse from 'components/book-course'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      </Head>
      <Hero />
      <Brands />
      <PopularCourses />
      <BookOurCourse />
    </>
  )
}
