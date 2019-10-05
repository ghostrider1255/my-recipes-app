import React, { Component } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default class Default404 extends Component {
    render() {
        return (
            <Header title="404, unknown path" styleClass="default404-hero">
                <h2 className="text-light text-uppercase">You are in wrong page</h2>
                <Link to="/" className="text-uppercase btn btn-secondary btn-lg mt-3">return home</Link>
            </Header>
        )
    }
}
