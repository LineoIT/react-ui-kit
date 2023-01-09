import React, { FC } from 'react'
import './button.css'

const Button: FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &{
    loading?:boolean
    // className?: string
}> = (prop) => {
	return <button {...prop} className={`bg-primary hover:bg-primary-dark py-2 text-white transition-all` + prop.className}>
		{prop.loading ? <span className="btn-loading">
				<span>&bull;</span>
				<span>&bull;</span>
				<span>&bull;</span>
			</span> : <>{prop.children}</>}
	</button>
}


export default Button