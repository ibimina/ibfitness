import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink></NavLink>
            </li>
            <li>
              <NavLink></NavLink>
            </li>
            <li>
              <NavLink></NavLink>
            </li>
            <li>
              <NavLink></NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
