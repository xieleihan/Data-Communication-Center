import { Pagination } from 'antd';
import '../static/css/UserInfo.less';

function UserInfo() {
    return (
        <div>
            <h2>用户信息</h2>
            <div className="container">
                <div className="box">

                </div>
                <div className="pagination">
                    <Pagination align="center" defaultCurrent={1} total={500} />
                </div>
            </div>
        </div>
    );
}

export default UserInfo;