import 'bootstrap/dist/css/bootstrap.css';
function Foo(){
  return(
    <>
    <footer className="footer">
      <div className="container-fluid">
      <p className="text-center text-light footer-text display-5">Made by Janardhan B</p>
      <p className="text-center text-light ">Mail me/ Connect</p>
        <a href="mailto:janardhangowda2k@gmail.com" className="btn btn-outline-light footer-button">mail me</a>
        <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className="btn btn-light footer-button">linkedin</a>
      </div>
      
    </footer>
    </>
  );
}
export default Foo;