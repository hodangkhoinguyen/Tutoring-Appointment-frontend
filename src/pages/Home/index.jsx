import { useSelector } from 'react-redux';
import { loginSelector } from './../../redux/selectors.js';

function Home() {
    const user = useSelector(loginSelector);
    console.log('login:', user);
    return (
        <div>
            This is home. Welcome, {user.firstName} {user.lastName}
            <a href="/appointment">Click here</a> to view upcoming appointments
        </div>
    );
}

export default Home;
