import 'bootstrap/dist/css/bootstrap.min.css';
import style from './main.module.css';
import { TypeAnimation } from 'react-type-animation';
export default function Main() {
    return(
        <main>
            <div>
                <nav className='d-flex align-items-center justify-content-between mx-auto mx-md-5 px-4 pt-4'>
                    <img className='rounded-circle' src="/logo.png" height="40px" />
                    <div className='align-items-center d-lg-flex d-none'>
                        <p className={style.navItem}>Projects</p>
                        <p className={style.navItem}>About</p>
                        <p className={style.navItem}>Contact</p>
                    </div>
                    <button className='btn btn-primary d-none d-lg-block'> Resume </button>
                    <img className='d-lg-none d-block' src="/burger.svg" alt="" height='25px' width='25px' />
                </nav>
            </div>
            <div className="container-fluid d-flex flex-column flex-lg-row pt-5 mt-4 pb-2 ps-5 pe-5 align-items-center justify-content-center">
                <div className="d-flex flex-column align-items-center justify-content-start w-100 p-5" style={{ flex: '1 1 0%' }}>
                    <TypeAnimation
                        sequence={[
                            "Hi I'm Sharp",
                            500,
                        ]}
                        wrapper="div"
                        speed={10}
                        cursor={false}
                        style={{ fontSize: '2.8rem', color: '#F5EAEA'}}
                        repeat={false}
                    />
                    <TypeAnimation
                        sequence={[
                            ' ',
                            1500,
                            `I'm a 2nd year BSIT Student`,
                            1000,
                            'I like to code',
                            1000,
                            'Honing my skills',
                            1000,
                            'Currently practicing REACT',
                            1000
                        ]}
                        wrapper="div"
                        speed={50}
                        style={{ fontSize: '1.6em', color: '#F5EAEA',textAlign: 'start' }}
                        repeat={Infinity}
                    />
                </div>
                <div style={{ flex: '1 1 0%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/heisenberg-svgrepo-com.svg" alt="" height="300px" />
                </div>
            </div>
        </main>
    );
}