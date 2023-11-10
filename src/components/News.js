import React, { Component } from 'react'
import Newsitems from './Newsitems';
// import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



export default class News extends Component {

    articles = [
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "The National | Kyiv attacked, Abortion rights protests, Cricket boom",
            "description": "June 26, 2022 | Kyiv digs out from destruction after Russia resumes missile attacks. Plus, anger and fear follows Roe v. Wade reversal.",
            "url": "http://www.cbc.ca/player/play/2038155843965",
            "urlToImage": "https://liveimages.cbc.ca/ot3SfU0IaiLDVjCzoh9I/thumbnail.jpeg",
            "publishedAt": "2022-06-27T00:52:18.3465297Z",
            "content": null
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "ABC News",
            "title": "'Biblical' insect swarms spur Oregon push to fight pests",
            "description": "Farmers in Oregon already battling extreme drought and low water supplies are fighting against future grasshopper and Mormon cricket infestations",
            "url": "https://abcnews.go.com/Technology/wireStory/biblical-insect-swarms-spur-oregon-push-fight-pests-85740304",
            "urlToImage": "https://s.abcnews.com/images/Technology/WireAP_9316c1accdf24059a5b9d01851ab39bd_16x9_992.jpg",
            "publishedAt": "2022-06-26T16:52:24.2538253Z",
            "content": "ARLINGTON, Ore. -- Driving down a windy canyon road in northern Oregon rangeland, Jordan Maley and April Aamodt are on the look out for Mormon crickets, giant insects that can ravage crops.\r\nTheres o… [+7416 chars]"
        },
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": "BBC Sport",
            "title": "Shane Warne memorial - watch & follow updates",
            "description": "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
            "url": "http://www.bbc.co.uk/sport/live/cricket/60916236",
            "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
            "publishedAt": "2022-03-30T08:22:26.498888Z",
            "content": "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]

    static defaultProps = {
        category: 'sports',
        country: 'in'
    }

    PropTypes = {
        category: PropTypes.string,
        country: PropTypes.string,
    }

    // program to convert first letter of a string to uppercase
    capitalizeFirstLetter(str) {

        // converting first letter to uppercase
        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

        return capitalized;
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = (this.capitalizeFirstLetter(this.props.category) + '- NewsDoser');
    }

    async componentDidMount() {
        this.props.setProgress(10)
        console.log("this is comonent did monunt");
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1ab96f1d6ea14809a263b42b090dacf5&pageSize=12`);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles })
        console.log(parsedData);
        this.props.setProgress(100)
    }

    handlePrev = async () => {
        this.setState({
            page: this.state.page - 1
        })
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1ab96f1d6ea14809a263b42b090dacf5&pageSize=12&page=${this.state.page - 1}`);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles })
        console.log(parsedData);

        console.log('');
    }


    handleNext = async () => {
        this.setState({
            page: this.state.page + 1
        })
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1ab96f1d6ea14809a263b42b090dacf5&pageSize=12&page=${this.state.page + 1}`);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalpage: parsedData.totalResults
        })
        console.log(parsedData);
        console.log('');
    }

    fetchMoreData = async () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        this.setState({
            page: this.state.page + 1
        })
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1ab96f1d6ea14809a263b42b090dacf5&pageSize=12&page=${this.state.page - 1}`);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })

    }




    render() {



        return (
            <>
                <h2 className='text-center' style={{marginTop:"90px"}}>Top - Headlines from {this.capitalizeFirstLetter(this.props.category)}</h2>

                <InfiniteScroll
                    dataLength={this.state.articles.length} //This is important field to render the next data
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length != this.state.totalResults}
                    loader={this.state.loading ? <h4 className='text-center'>Loading...</h4> : ''}>
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((elements) => {
                                console.log(elements.source);
                                return <div className="col-md-3" key={elements.url}>
                                    <Newsitems title={elements.title ? elements.title : ''} description={elements.description ? elements.description.slice(0, 85) : ''} imageUrl={elements.urlToImage} newsUrl={elements.url} author={elements.author} date={elements.publishedAt} source={elements.source.name} />
                                </div>
                            })}



                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between my-3">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-primary" onClick={this.handlePrev} >&larr; prev</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalpage / 12)} type="button" className="btn btn-primary" onClick={this.handleNext} >Next &rarr; </button>
                </div> */}
            </>
        )
    }
}
