import React from 'react'
// import { useProduct } from 'vtex.product-context'
// import { canUseDOM } from 'vtex.render-runtime'

type Props = {
  label?: string
}

const DrawnBadge = ({ label }: Props) => {
  // const product = useProduct()

  return (
    <div className="pa3">
      <span>
        {label ?? 'It should be a nice message 🤔'}
      </span>
    </div>
    )
}

export default DrawnBadge
