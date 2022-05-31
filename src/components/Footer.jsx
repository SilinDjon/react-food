import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='page-footer green lighten-4'>
            <div className='footer-copyright'>
                <div className='container'>
                    © {new Date().getFullYear()} Copyright Text
                    <Link
                        className='grey-text text-lighten-4 right'
                        to='https://github.com/silindjon/react-food'
                        rel='noreferrer'
                        target='_blank'
                    >
                        Repo
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export { Footer };