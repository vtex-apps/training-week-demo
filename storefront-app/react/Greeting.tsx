import React, { useEffect } from 'react'
import { useLazyQuery } from 'react-apollo'
import { canUseDOM, Link } from 'vtex.render-runtime'
import { Image } from 'vtex.store-image'

import GET_PRODUCT from './graphql/getProduct.graphql'

const randomNumber = (min: number, max: number) => {
  return Math.round(Math.random() * (max - min) + min)
}

const getProductId = (productIds: number[]) => {
  const idx = randomNumber(0, productIds.length-1)

  return productIds[idx]
}

type Props = {
  productIds: number[]
}

function Greeting({ productIds = [] }: Props) {
  const [getProduct, { data, loading, called }] = useLazyQuery(GET_PRODUCT, {
    onCompleted: data => localStorage.setItem('your-product', data.product.productId)
  })

  useEffect(() => {
    const productId = canUseDOM && window.localStorage.getItem('your-product')

    getProduct({ variables: { id: productId } })
  }, [])

  const handleClick = () => {
    if (productIds.length === 0) {
      return
    }

    getProduct({ variables: { id: getProductId(productIds) } })
  }

  if (productIds.length === 0) {
    return (
      <div className="center red ba b--dotted bw1 pa3 ma5 w-20">
        <span>No product list was configured. Please add some product Ids through Site Editor or Blocks</span>
      </div>
      )
  }

  if (loading) {
    return <div className="center"><span>Loading...</span></div>
  }

  return (
    <div className="flex flex-column items-center ma3">
        {data && (
          <Link to={`/${data.product.linkText}/p`}>
            <div className="flex flex-column items-center">
              <p>{data.product.productName}</p>
              <p>
                <Image src={data.product.items?.[0].images?.[0].imageUrl} maxWidth='320px'/>
              </p>
            </div>
          </Link>
        )}
        {!data && called && <p>Product not found :(</p>}
      <div>
        <button onClick={() => handleClick()}>Search new product</button>
      </div>
    </div>
  )
}

Greeting.schema = {
  title: 'My component',
  type: 'object',
  properties: {
    productIds: {
      type: 'array',
      minItems: 1,
      uniqueItems: true,
      title: 'Product ID List',
      description: 'Put here the Product IDs to be randomized',
      items: {
        type: 'integer',
        title: 'Product ID',
        default: 0
      }
    },
  },
}

export default Greeting
