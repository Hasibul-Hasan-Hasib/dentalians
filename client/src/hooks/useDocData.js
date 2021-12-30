import { useEffect } from "react";
import { useState } from "react"

const useDocData = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('/doctor.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return doctors;
}
export default useDocData;