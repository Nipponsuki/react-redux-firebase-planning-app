import React from "react";
import styled from "styled-components";
import moment from "moment";
import defaultUser from "../../assets/images/defaultUser.png";

const Container = styled.div`
  flex: 0 0 30%;
  padding: 1rem 2rem;

  @media (max-width: 500px) {
    order: -1;
    z-index: 100;
    width: 100%;
    padding: 0.5rem;
  }
`;

const ImageContainer = styled.div`
  width: ${props => (props.widther ? "4.5rem" : "1.5rem")};
  height: ${props => (props.longer ? "4.5rem" : "1.5rem")};
  margin: ${props => (props.userrr ? "20px 0px" : "none")};
  position: relative;

  img {
    width: 100%;
    border-radius: ${props => (props.userr ? "50%" : "none")};
    box-shadow: ${props =>
      props.user ? "0 3px 5px 2px rgba(33, 203, 243, 0.3)" : "none"};
    cursor: pointer;
  }
`;

const NotificationWrapper = styled.div``;
const Notification = styled.div`
  margin-left: 1rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  height: 50%;
  color: #fff;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 3px 5px 2px rgb(255, 255, 255, 0.4);
  padding: 1rem;
  width: 60%;

  p {
    transition: all 0.3s ease;
  }

  &:hover {
    transform: scale(1.05);
    background-image: linear-gradient(
      45deg,
      rgba(78, 84, 200, 1),
      rgba(141, 147, 250, 1)
    );
  }

  @media (max-width: 500px) {
    margin-left: 0;
    margin-right: 0.5rem;
    width: 100%;
  }
`;

const Notifications = props => {
  const { notifications } = props;
  return (
    <Container>
      <h2>Notifications</h2>
      <NotificationWrapper>
        {notifications &&
          notifications.map(item => (
            <Notification key={item.id}>
              <p>
                <p>{item.user}</p>
                <p>{item.content}</p>
                <p>{moment(item.time.toDate()).fromNow()}</p>
                <ImageContainer longer widther user userr userrr>
                  <img
                    src={item.photo === undefined ? defaultUser : item.photo}
                    alt="sign"
                  />
                </ImageContainer>
              </p>
            </Notification>
          ))}
      </NotificationWrapper>
    </Container>
  );
};

export default Notifications;
