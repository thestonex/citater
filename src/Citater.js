import React, { Component } from 'react';


const citater = ({citater, deletecitat}) => {
    return (
      <div className="citat-liste">
        { 
          citater.map(citat => {
            return (
              <div className="citat" key={citat.id}>
                <div>title: { citat.title }</div>
                <div>citattekst: { citat.citattekst }</div>
                <div>forfatter: { citat.forfatter }</div>
                <button onClick={() => {deletecitat(citat.id)}}>Delete citat</button>
                <hr />
              </div>
            )
          })
        }
      </div>
    );
  }


export default citater
