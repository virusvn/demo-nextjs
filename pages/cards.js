import React from 'react'
import 'isomorphic-fetch'

import Head from 'next/head'
import Link from 'next/link'
export default class App extends React.Component {
    static async getInitialProps({query}) {
        const res = await fetch('https://api.pokemontcg.io/v1/cards/' + query.id)
        const data = await res.json()
        return data
    }
    render() {
        return (
            <div className="container">
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link
                        rel="stylesheet"
                        href="//cdn.bootcss.com/spectre.css/0.1.29/spectre.min.css"/>
                </Head>
                <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                        {this.props.card.name}
                    </li>
                </ul>
                <div className="columns">
                    <div className="column col-4">
                        <p><img src={this.props.card.imageUrl}/></p>
                    </div>
                    <div className="column col-8 empty">
                        <div className="form-horizontal">
                            <div className="form-group">
                                <div className="col-3">
                                    <label className="form-label">Name</label>
                                </div>
                                <div className="col-9">
                                    <span>{this.props.card.name}</span>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-3">
                                    <label className="form-label">HP</label>
                                </div>
                                <div className="col-9">
                                    <span>{this.props.card.hp}</span>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-3">
                                    <label className="form-label">Series</label>
                                </div>
                                <div className="col-9">
                                    <span>{this.props.card.series}</span>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-3">
                                    <label className="form-label">Set</label>
                                </div>
                                <div className="col-9">
                                    <span>{this.props.card.set}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}