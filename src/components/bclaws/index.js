import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import BCLawsDocumentList from './lawDocumentList';
import BCLawsDocument from './lawDocument';

class BCLaws extends Component {
  render() {
    // const { data: {lawsDocument = []} } = this.props;

    return (
      <div>
        <h1 className='home'>BC Laws Library</h1>
        <BCLawsDocumentList path={["statreg"]} />
        <BCLawsDocument path={["statreg", "1527898742", "98043", "1138648009"]} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadLawIndex: () => (dispatch({type: "LAWS_INDEX_FETCH_REQUESTED"}))
  }
};


const query = gql`
    query LawsDocument($path: [String]) {
        lawsDocumentList(path: $path) {
            id,
            title,
            location,
            type,
            parent,
            ancestors,
            isVisible,
            order
        }
    }
`;

export default compose(
    // graphql(query),
    connect(mapStateToProps, mapDispatchToProps)
)(BCLaws);
