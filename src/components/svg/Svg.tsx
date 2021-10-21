import React from "react"

export type SvgProps = React.SVGProps<SVGSVGElement>

export function Svg(props: SvgProps) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props} />
}