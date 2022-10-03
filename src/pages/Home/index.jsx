import { useSelector } from 'react-redux';
import { loginSelector } from './../../redux/selectors.js';

function Home() {
    const user = useSelector(loginSelector);
    console.log('login:', user);
    return (
        <div>
            This is home
            <button
                onClick={() => {
                    console.log(user);
                }}
            >
                button
            </button>
        </div>
    );
}

export default Home;
