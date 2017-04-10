import React from 'react';
import {connect} from 'react-redux';
import {fetchStandingsFromApi} from '../actions/actionCreators';
import WestStandings from './westStandings';
import EastStandings from './eastStandings';

class Standings extends React.Component{
  componentDidMount(){
    this.props.fetchStandings()
  }

  westTeams(){
    if(!this.props.standings){
      return <div>loading</div>
    }
    let {west} = this.props.standings;
    return west.map((team, index)=>{
      return <WestStandings name={team.teamId} key={index + team.teamId} wins={team.win} losses={team.loss} index={index}/>
    })
  }

  eastTeams(){
    if(!this.props.standings){
      return <div>loading</div>
    }
    let {east} = this.props.standings;
    return east.map((team, index)=>{
      return <WestStandings name={team.teamId} key={index + team.teamId} wins={team.win} losses={team.loss} index={index}/>
    })
  }

  render(){
    return(
      <div className="card">
          <table className="table table-sm table-hover">
              <thead>
                  <tr className="card-header">
                      <th>West Standings</th>
                      <th>Team</th>
                      <th>Wins</th>
                      <th>Losses</th>
                  </tr>
              </thead>
              <tbody className="card-block">
                  {this.westTeams()}
              </tbody>
          </table>
          <br/>
          <table className="table table-sm table-hover">
              <thead>
                  <tr className="card-header">
                      <th>East Standings</th>
                      <th>Team</th>
                      <th>Wins</th>
                      <th>Losses</th>
                  </tr>
              </thead>
              <tbody className="card-block">
                  {this.eastTeams()}
              </tbody>
          </table>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    standings: state.standingsData.standings
  }
}

const mapDispatchToProps= (dispatch)=>{
  return{
    fetchStandings: () => dispatch(fetchStandingsFromApi())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Standings);
