const Notification = (props) => {
  const { className, iconUrl, message } = props;
  const ContainerClassName = `notification-container ${className}`;
  return (
    <div className={ContainerClassName}>
      <img className="icon" src={iconUrl} />
      <p className="message">{message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="Bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="notifications-list-container">
      <Notification
        className="Primary"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information Message"
      />
      <Notification
        className="Success"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success Message"
      />
      <Notification
        className="Warning"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Warning Message"
      />
      <Notification
        className="Danger"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Danger Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
