import { useEffect, useState } from 'react';

const useSnackbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [message, setMessage] = useState();
    const openSnackBar = (msg = 'Something went wrong...') => {
        setMessage(msg)
        setIsActive(true);
    }

    useEffect(() => {
        if (isActive === true) {
            setTimeout(() => {
                setIsActive(false);
            }, 2750);
        }
    }, [isActive]);

    return { isActive, message, openSnackBar }
}

export default useSnackbar;
