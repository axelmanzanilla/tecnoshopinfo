import { Link } from 'react-router-dom';

export function Item({ className, path, children }){
    return (
        <Link to={path} className={className}>{children}</Link>
    );
}