import './Button.scss'

export default function Button({ children, className, style })
{
    return (
        <a href='/#' className={`button ${className}`} style={style}>{children}</a>
    )
}