import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    let navigate = useNavigate();
    return (
        <button onClick={() => navigate(-1)}>
            Go Back
        </button>
    );
};

export default BackButton;