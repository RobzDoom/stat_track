import {FETCH_GAMES, FETCH_STANDINGS, SET_DATE, ERROR_404} from './types';
import axios from 'axios';

//server url to interface the backend with the front end
const baseurl = 'http://localhost:8000/api/nba/'



//function to dispatch the reducer, used in the fetchGamesFromApi to handle async call
function gamesAction(res){
  return{
    type: FETCH_GAMES,
    payload: res
  }
}

// function to dispatch the render error for the 404 calls that go past the scheduled games of the playoffs
function renderError(err){
  return {
    type: ERROR_404,
    payload: err
  }
}

export function fetchGamesFromApi(day){
  let games = `${baseurl}/games/${day}`;
  return (dispatch) =>{
    return axios.get(games).then(res =>{
      //when response is received, dispatches gamesAction function with the received response as a param
      dispatch(gamesAction(res))
    })
    .catch(err =>{
      console.log('error', err);
      dispatch(renderError(err));
    })
  }
}

//function to dispatch the standings reducer
function standingsAction(res){
  return{
    type: FETCH_STANDINGS,
    payload: res
  }
}

export function fetchStandingsFromApi(){
  let standings = `${baseurl}/standings`;
  return (dispatch)=>{
    return axios.get(standings).then(res =>{
      dispatch(standingsAction(res))
    })
    .catch(err=>{
      console.log('error', err);
    })
  }
}

function convertDate(date){
  let mm = date.getMonth() + 1; // getMonth() is zero-based
  let dd = date.getDate();

  return [date.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('');
}

export function setViewedDate(date){
  let dateLongForm = date.toDateString();
  let dateNumeric = convertDate(date);//converts given date to YYYYMMDD
  return {
    type: SET_DATE,
    numeric: dateNumeric,
    longDate: dateLongForm,
    unformattedDate: date
  }
}
