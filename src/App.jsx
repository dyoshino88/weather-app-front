import React from "react";
import axios from "axios";

function App() {
    const [data, setData] = React.useState();
    const url = "https://young-mesa-75839-8d20ed811f40.herokuapp.com/";

    const GetData = () => {
        axios.get(url).then((res) => {
            setData(res.data);
        });
    };
    return (
        <div>
            <div>ここに処理を書いていきます</div>
            {data ? <div>{data.Hello}</div> : <button onClick={GetData}>データを取得</button>}
        </div>
    );
}

export default App;
