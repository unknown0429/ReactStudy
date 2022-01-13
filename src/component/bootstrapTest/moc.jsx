import Game from "../tutorial/Game"
// コンポーネント名は大文字から始めないと読み込んでくれなくなる
// ※ 重要
function Moc() {
    return (
        // <nav class="navbar navbar-expand-lg navbar-light bg-light">
        //     <div class="container-fluid">
        //         <a class="navbar-brand" href="#">Navbar</a>
        //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //         <span class="navbar-toggler-icon"></span>
        //         </button>
        //         <div class="collapse navbar-collapse" id="navbarNav">
        //         <ul class="navbar-nav">
        //             <li class="nav-item">
        //                 <a class="nav-link active" aria-current="page" href="#">Home</a>
        //             </li>

        //         </ul>
        //         </div>
        //     </div>
        // </nav>
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Header</a>
                    <div className="navbar-toggler" typeof="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">content1</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">content2</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card ">
                        <div className="card-header">
                            OX Game
                        </div>
                        <div className="card-body">
                            <div className="card-subtitle">tutorial code</div>
                            <div className="card-text">
                                <Game/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            別のゲーム
                        </div>
                        <div className="card-body">
                            <div className="card-subtitle">tutorial code</div>
                            <div className="card-text">
                                適当な要素
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            別のゲーム
                        </div>
                        <div className="card-body">
                            <div className="card-subtitle">tutorial code</div>
                            <div className="card-text">
                                適当な要素
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            別のゲーム
                        </div>
                        <div className="card-body">
                            <div className="card-subtitle">tutorial code</div>
                            <div className="card-text">
                                適当な要素
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            別のゲーム
                        </div>
                        <div className="card-body">
                            <div className="card-subtitle">tutorial code</div>
                            <div className="card-text">
                                適当な要素
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            別のゲーム
                        </div>
                        <div className="card-body">
                            <div className="card-subtitle">tutorial code</div>
                            <div className="card-text">
                                適当な要素
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}

export default Moc