import './SocialMedia.scss';

const SocialMedia = () => {

    return (
        <div className='socialMedia'>
            <div className='container'>
                <ul className='list'>
                    <li>
                        <a><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a><i class="fa fa-github" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a><i class="fa fa-codepen" aria-hidden="true"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}   

export default SocialMedia;