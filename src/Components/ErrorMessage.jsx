const ErrorMessage = ({ error }) => {
  

  if (error) {
    return (
      <div className="alert alert-danger">
        <p>{error}</p>
      </div>
    );
  }
  return null; // meaning there is no error message
};

export default ErrorMessage;
