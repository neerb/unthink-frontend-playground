import * as React from "react"
import { Link } from 'gatsby';

// markup
const IndexPage = () => {
  return (
    <div class="bg-orange-300 h-screen">
      <div class="bg-orange-300 grid grid-cols-1 place-items-center">
        <h1 class="text-7xl place-self-center italic bg-amber-600 px-4 py-2 rounded mt-5">
          Index Page
        </h1>

        <br></br>

        <button class="bg-green-500 text-white px-4 py-2 rounded">
          <Link to="/playground" class="text-3xl underline">
            da playground 😳
          </Link>
        </button>

        <h1 class="text-2xl place-self-center bold px-4 py-2 rounded mt-6">
          Bottom Text
        </h1>
      </div>
    </div>
  )
}

export default IndexPage
