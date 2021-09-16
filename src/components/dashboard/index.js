import styled from "styled-components";
import dashboard from './dashboard.png';

const Container = styled.div`
    width:90%;
    max-width:1400px;
    margin: 0 auto;
`;

const DashboardStyle = styled.div`
    background-color:#4D61FC;
    width:100%;
    margin-top:75px;

    .dashboard-content {
        padding-top:50px;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        justify-items: center;
    }

    h2 {
        font-size:32px;
        font-weight: bold;
        color:white;
        margin:0;
        text-align:center;
    }

    p {
        color:#B2B6BB;
        font-size:24px;
        margin-bottom:5px;
        text-align:center;
    }

    .sub-title {
        font-size:21px !important;
    }

    img {
        position:relative;
        top:50px;
        width:80%;
        border-radius:25px;
    }
`;

function Dashboard() {

    return(
        <DashboardStyle>
            <Container>
                <div className="dashboard-content">
                    <h2>Own and powerful dashboard</h2>
                    <p>Enjoy of our powerful control panel for our customers</p>
                    <h2 className="sub-title">+ SIMPLE + EASY + EFFICIENT - COMPLICATED</h2>
                    <img src={dashboard} />
                </div>
            </Container>
        </DashboardStyle>
    )

}

export default Dashboard;