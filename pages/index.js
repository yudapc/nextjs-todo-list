import PropTypes from 'prop-types';
import MainLayout from '../layouts/main';
import { withUser } from '../hoc/withUser';
import UserNotLogged from '../components/UserNotLogged';
import HomeContainer from '../containers/HomeContainer';

const Home = ({ user }) => {
  return (
    <MainLayout>
      <p>V2.1</p>
      <div className="container-wrapper">{!user ? <UserNotLogged /> : <HomeContainer />}</div>
      <style jsx>
        {`
          .container-wrapper {
            width: 100%;
            margin-top: 80px;
          }
        `}
      </style>
    </MainLayout>
  );
};

Home.propTypes = {
  user: PropTypes.object,
};

export default withUser(Home);
