import React, { FC, useMemo } from 'react'
import { useProduct } from 'vtex.product-context'
import { canUseDOM } from 'vtex.render-runtime'

type Props = {
  label: string
}

const DrawnBadge: FC<Props> = ({ label = 'Your Product!' }) => {
  const product = useProduct()

  const productId = useMemo(() => product?.product?.productId, [product])

  const drawnProductId = canUseDOM && window.localStorage.getItem('your-product')

  if (!productId || !drawnProductId) {
    return null
  }

  return productId === drawnProductId ? (
    <div className="pa3">
      <span className="f6 dim br-pill ph3 pv2 mb2 dib white bg-red">
        {label}
      </span>
    </div>
  ) : null
}

export default DrawnBadge
