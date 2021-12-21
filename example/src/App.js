import React from 'react'

import { ExampleComponent, priceFormat } from 'utils'
import 'utils/dist/index.css'

const App = () => {
  return <ExampleComponent text={priceFormat(1000.57)} />
}

export default App
