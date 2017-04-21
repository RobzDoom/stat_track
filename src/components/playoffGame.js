import React from 'react';
import teams from '../data/teamInfo';


const PlayoffGame = (props)=> {
  let {game} = props; // same as saying let game = props.game
  let {startTime} = props;

  let homeTeam  = teams.filter((homeTeam) => {
        return (homeTeam.teamId === game.hTeam.teamId)
  })
  let visitorTeam = teams.filter((visitorTeam) =>{
      return (visitorTeam.teamId === game.vTeam.teamId);
  });
  // for final score
  if(game.attendance > 0 && game.clock === "" && game.period.isHalftime === false){
      return(
          <div  className='col-xs-12 col-md-4'>
              <div className='panel panel-warning'>
                  <div className='panel-heading'>
                      <div className="row">
                          <div className="col-xs-9">GAME {game.playoffs.gameNumInSeries}</div>
                          <div className="col-xs-3">FINAL</div>
                      </div>
                  </div>
                  <div className='panel-body'>
                      <div className="row scoreboard_first_team_row">
                          <div className="col-xs-9"><img className="nba_team_images_scoreboard" src={visitorTeam[0].logo} alt=""/>{visitorTeam[0].fullName}</div>
                          <div className="score col-xs-3 text-center">{game.vTeam.score}</div>
                      </div>
                      <div className="row">
                          <div className="col-xs-9"><img className="nba_team_images_scoreboard" src={homeTeam[0].logo} alt=""/>{homeTeam[0].fullName}</div>
                          <div className="score col-xs-3 text-center">{game.hTeam.score}</div>
                      </div>
                  </div>
                  <div className='panel-footer'>
                      {game.playoffs.seriesSummaryText}
                  </div>
              </div>
          </div>
      )
  }
  //for game that hasnt started
  if(game.clock === "" &&  game.period.isHalftime === false){
      return(
          <div  className='col-xs-12 col-md-4'>
              <div className='panel panel-warning'>
                  <div className='panel-heading'>
                      <div className="row">
                          <div className="col-xs-5">GAME {game.playoffs.gameNumInSeries}</div>
                          <div className="col-xs-7 text-right">Start time: {startTime}</div>
                      </div>
                  </div>
                  <div className='panel-body'>
                      <div className="row scoreboard_first_team_row">
                          <div className="col-xs-9"><img className="nba_team_images_scoreboard" src={visitorTeam[0].logo} alt=""/>{visitorTeam[0].fullName}</div>
                          <div className="score col-xs-3 text-center">{game.vTeam.score}</div>
                      </div>
                      <div className="row">

                          <div className="col-xs-9"><img className="nba_team_images_scoreboard" src={homeTeam[0].logo} alt=""/>{homeTeam[0].fullName}</div>
                          <div className="score col-xs-3 text-center">{game.hTeam.score}</div>
                      </div>
                  </div>
                  <div className='panel-footer'>
                      {game.playoffs.seriesSummaryText}
                  </div>
              </div>
          </div>
      )
  }
// for game in progress
    return(
        <div  className='col-xs-12 col-md-4'>
            <div className='panel panel-warning'>
                {
                    (game.clock === "")
                        ? <div className='panel-heading'>
                        <div className="row">
                            <div className="col-xs-5">GAME {game.playoffs.gameNumInSeries}</div>
                            <div className="col-xs-7 text-right">Halftime</div>
                        </div>
                    </div>
                        : <div className='panel-heading'>
                        <div className="row">
                            <div className="col-xs-5">GAME {game.playoffs.gameNumInSeries}</div>
                            <div className="col-xs-7 text-right">{game.period.current}Q - {game.clock}</div>
                        </div>
                    </div>
                }
                <div className='panel-body'>
                    <div className="row scoreboard_first_team_row">
                        <div className="col-xs-9"><img className="nba_team_images_scoreboard" src={visitorTeam[0].logo} alt=""/> {visitorTeam[0].fullName}</div>
                        <div className="score col-xs-3 text-center">{game.vTeam.score}</div>
                    </div>
                    <div className="row">
                        <div className="col-xs-9"><img className="nba_team_images_scoreboard" src={homeTeam[0].logo} alt=""/> {homeTeam[0].fullName}</div>
                        <div className="score col-xs-3 text-center">{game.hTeam.score}</div>
                    </div>
                </div>
                <div className='panel-footer'>
                    {game.playoffs.seriesSummaryText}
                </div>
            </div>
        </div>
  )
}

export default PlayoffGame
