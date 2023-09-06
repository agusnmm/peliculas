import React from 'react'
import NavComponet from '../nav/nav.jsx';
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
    <NavComponet/>
    <Outlet />
    </>
  )
}