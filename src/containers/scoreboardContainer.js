import React from 'react';
import {connect} from 'react-redux';
import {fetchGamesFromApi} from '../actions/actionCreators';
import GamesContainer from './gamesContainer'

class Scoreboard extends React.Component {
  //make call to fetch game on mount
  componentDidMount() {
    let {viewedDate} = this.props;
    this.props.fetchGames(viewedDate);
  }

  //TODO comment on what this actually does
  componentWillReceiveProps(nextProps) {
    let {viewedDate} = this.props;
    if (viewedDate === nextProps.viewedDate)
      return false;
    this.props.fetchGames(nextProps.viewedDate);
    return true;
  }

  render() {
    //handles initial render to show loading of the games, probably need to refine tho
    let {games} = this.props;
    if (!games) {
      return (
        <div>
          loading...
        </div>
      )
    }
    if (games.length === 0 || this.props.noGames) {
      return (
        <div className="row no_games_div">
          <div className="col-xs-6 col-xs-offset-3 text-center">
            <img src="../assets/hoop_color_2.png" alt=""/>
            <h4>NO GAMES SCHEDULED</h4>
          </div>
        </div>
      )
    }
    return (
        <div className="row games_div">
            <div className="col-xs-12 text-center">
                <img src="../assets/hoop_color_2.png" alt=""/>
            </div>
            <div className="col-xs-12">
                <GamesContainer/>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
          games: state.gamesData.games,
          viewedDate: state.setDate.viewedDate,
          noGames: state.gamesData.noGames
         }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGames: (day) => dispatch(fetchGamesFromApi(day))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard);
