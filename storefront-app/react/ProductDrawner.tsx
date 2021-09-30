import React from 'react'
// import { useLazyQuery } from 'react-apollo'
// import { Link } from 'vtex.render-runtime'
// import { Image } from 'vtex.store-image'

// import GET_PRODUCT from './graphql/getProduct.graphql'

const ProductDrawner = () => {
  // const [getProduct, { data, loading, called }] = useLazyQuery(GET_PRODUCT)

  return (
    <div className="flex flex-column items-center ma3">
      <div>
        Where is the data?
      </div>
      <div>
        <button onClick={() => alert('clicked')}>Search new product</button>
      </div>
    </div>
  )
}

ProductDrawner.schema = {
  title: 'My component',
  type: 'object',
  properties: {},
}

export default ProductDrawner
