import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Task () {
    const [logs, setLogs] = useState([]);

    const SERVER = "https://app-uj28.onrender.com";
    const { id } = useParams();

    useEffect(() => {
        // Get Logs
        axios.get(SERVER + "/logs/get?task_id="+id)
        .then((response) => {
            setLogs(response["data"]);
        });
    }, []);

    return (
        <div>
            <div>Не найдены на это время:</div>
            {logs.map((data, index) =>
                <div key={index}>
                    {data["status"] === "not_found" ?
                        <td>
                            <tr>{data["link"]}</tr>
                        </td>
                        : <div></div>
                    }
                </div>
            )}

            <br/><br/>

            <div>Отсутствует информация по этим сообществам.</div>
            <table><tbody>
                {logs.map((data, index) =>
                    <div key={index}>
                        {data["status"] === "no_data" ?
                            <td>
                                <tr>{data["link"]}</tr>
                            </td>
                            : <div></div>
                        }
                    </div>
                )}
            </tbody></table>

            <br/><br/>

            <div>Нашёл сообщество, но не удалось разместить</div>
            <table><tbody>
                {logs.map((data, index) =>
                    <div key={index}>
                        {data["status"] === "found_not_placed" ?
                            <tr>
                                <td>{data["link"]}</td>
                                <td>{data["answer"]}</td>
                            </tr>
                            : <div></div>
                        }
                    </div>
                )}
            </tbody></table>

            <br/><br/>

            <div>Удалось разместить рекламу</div>
            <table><tbody>
                {logs.map((data, index) =>
                    <div key={index}>
                        {data["status"] === "placed" ?
                            <td>
                                <tr>{data["link"]}</tr>
                                <tr>{data["answer"]}</tr>
                            </td>
                            : <div></div>
                        }
                    </div>
                )}
            </tbody></table>
        </div>
    );
}

export default Task;