import React, { FC, useMemo } from 'react'
// import { useProduct } from 'vtex.product-context'
// import { canUseDOM } from 'vtex.render-runtime'

type Props = {
  label: string
}

const DrawnBadge = ({ label }: Props) => {
  // const product = useProduct()

  return (
    <div className="pa3">
      <span>
        {label}
      </span>
    </div>
    )
}

export default DrawnBadge
