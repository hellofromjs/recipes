import './Button.scss'

export default function Button({ children, className, style, onClick })
{
    return (
        <a href='/#' className={`button ${className}`} style={style} onClick={onClick}>{children}</a>
    )
}