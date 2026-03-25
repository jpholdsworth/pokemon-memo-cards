export default function GitHubFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="github-section">
            <p>Copyright &copy; {currentYear} jpholdsworth</p>
            <a href="https://github.com/jpholdsworth" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
            </a>
        </div>
    )
}