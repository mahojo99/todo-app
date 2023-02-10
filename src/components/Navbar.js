export default function Navbar({username}){
    return (
        <header>
            <nav>
                <h1>
                    HIOF
                </h1>
            </nav>
            <span>{username}</span>
        </header>
    )
}