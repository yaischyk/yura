import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

function Main () {
    const [logs, setLogs] = useState(["Load"]);

    const { key } = useParams();

    const SERVER = "https://app-uj28.onrender.com";

    useEffect(() => {
        // Get Logs
        axios.get(SERVER + "/logs/getAll?access_key="+key)
        .then((response) => {
            const responseArray = [];
            for (const property in response["data"]) {
                responseArray.push(response["data"][property]*1);
            }

            setLogs(responseArray);
        });
    }, []);

    function getDate(date) {
        return moment(date).format("DD MMM yyyy HH:mm");
    }

    return (
        <div>
            {logs.map((data, index) =>
                <div key={index}>
                    {data === "Load" ? 
                        "Загрузка данных..." : 
                        <Link to={`/logs/l/${data}`}>{getDate(new Date(data))}</Link>
                    }
                    <br/>
                </div>
            )}
        </div>
    );
}

export default Main;