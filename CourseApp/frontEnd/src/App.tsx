import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import useSWR from 'swr'
import axios from "axios"

function App() {
  const fetcher = (url: string) => axios.get(url).then(res => res.data);
  const { data, error, isLoading } = useSWR('http://localhost:5000/', fetcher)
  console.log('data', data);


  return (
    <div className="main__container ">
      <div className="heading__section">
        <h1 className="">My Courses</h1>
        <a className="" href="#">
          View All
        </a>
      </div>
      <div className="table__wrap">
        <table className="">
          <thead>
            <tr className="table__heading-row">
              <td className="table__heading-col">
                Course Name
              </td>
              <td className="table__heading-col">
                Start Date
              </td>
              <td className="table__heading-col">
                Lesson Completed
              </td>
              <td className="table__heading-col">
                Duration
              </td>
            </tr>
          </thead> <tbody className="">
            {data?.map((data: any) => (
              <tr className="table__data-row " key={data._id}>
                <td className="table__data-col__first">
                  <img src={data.logo} alt="" />
                  <div className="w-16 h-16 rounded-2xl bg-gray-500"></div>
                  <div className="ml-4">
                    <h3 className="text-lg font-normal">{data?.name}</h3>
                    <h2 className="table__heading-col">
                      {data?.totalLesson} Lessons
                    </h2>
                  </div>
                </td>
                <td className="table__data-col__rest">
                  {data?.start}
                </td>
                <td className="text-lg font-normal">
                  {data?.lessonCompleted}
                  <span className="text-gray-400">
                    /{data?.totalLesson}
                  </span>{" "}
                  (
                  {Math.floor(
                    (data?.lessonCompleted / data?.totalLesson) * 100
                  )}
                  %)
                </td>
                <td className="text-lg font-normal">{data?.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
