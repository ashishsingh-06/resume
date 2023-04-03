import './SocialMedia.scss';

const SocialMedia = (props) => {
    const data = props.data;

    return (
        <div className='socialMedia'>
            <div className='socialMedia-wrapper'>
                <ul className='socialMedia-list'>
                    {
                       data.map((item, index) => {
                            return <li key={index} className={`socialMedia-list-item item-${item.name}`}>
                                <span className={`tooltip ${item.name}`}>
                                    {item.name}
                                </span>
                                <a href={item.link} target='_blank'>
                                    <i className={item.icon} />
                                </a>
                            </li>
                       })
                    }
                </ul>
            </div>
        </div>
    )
}   

export default SocialMedia;