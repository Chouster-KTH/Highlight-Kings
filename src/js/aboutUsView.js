import Logo from '../images/logo.png';
import '../css/aboutUs.css';

function AboutUs(props) {
    return (
        <div className='picture'>
            <div id="pic">
                <img src={Logo} alt="Highlight Kings" />
            </div>
            <h1 className="aboutUs-content">
                About Us</h1>

            <div type='text' className='auText'>This website is a project done by Ville Vik, Carl Johan Jonsson, Nima Nayeri and Daniel Chouster as part of the DH2642 course at KTH Royale Institute of Technology.
                <br></br><br></br>Feel free to contact team leader Ville Vik at <a href="mailto:vvik@kth.se">vvik@kth.se</a> for feedback or business inquiries.

                <h1 className="aboutUs2-content">
                    About Highlight Kings</h1>

                <div type='text' className='infoText2'>Highlight Kings is a football application that targets football lovers who want an easy and interactive way to enjoy football highlights. The application is simply a web page where users can enjoy football highlights. What makes the application special is that highlights can be upvoted by the users. Users can watch highlights from several countries and leagues and rank them using the upvote button. The most upvoted highlights are displayed in the home page, hence, the users can see if they agree or not with other users. In addition to the leaderboard, one can also choose to watch recent highlights. <br /><br />

                    The website also includes features to list and watch fixtures (whole schedule of games to be played), from pre-selected leagues. With different search options for team and current match status, the user will be able to find a particular match in the current league. Another feature is to see the current standings of one of the pre-selected leagues.
                    On "My Account", you can see a list of games that you have upvoted. To delete an upvote, you can either go to my account and remove it from there or do it directly where you made the upvote by clicking the arrow button again.
                    <br /><br />
                    The user can navigate the site by using the fixed sidebar, to explore the different content.

                </div>
            </div>
        </div>
    )
}

export default AboutUs;
