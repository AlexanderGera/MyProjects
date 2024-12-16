import './HeadNavHolder.css'

export function HeadNavHolder ({children}) {

    const menu = [
        { name: 'Main', path: '/' },
        { name: 'Theatre', path: '#' },
        { name: 'Kids', path: '#' },
        { name: 'Drama', path: '#' },
        { name: 'Comedie', path: '#' },

    ];

return (
    <div className="header__navigation-holder">
        {children}
    </div>
);
}